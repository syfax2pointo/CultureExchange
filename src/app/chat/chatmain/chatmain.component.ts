import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Event } from '../../models/event';
import { Message } from '../../models/message';
import { User } from '../../models/user';
import { TranslationResults } from '../../models/translationResults';
import { SocketService } from '../../services/socket.service';
import { TranslateService } from '../../services/translate.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-chatmain',
  templateUrl: './chatmain.component.html',
  styleUrls: ['./chatmain.component.css'],
})
export class ChatmainComponent implements OnInit, AfterViewInit {
  ioConnection: any;

  users: User[] = [];
  txtMessage: string;
  messageList: Message[] = [];
  scrollContainer: any;

  @ViewChild('scrollframe', { static: false }) scrollFrame: ElementRef;
  @ViewChildren('item') itemElements: QueryList<any>;

  constructor(
    private socketService: SocketService,
    private translateService: TranslateService,
    private sharedData: SharedService
  ) {}

  ngOnInit(): void {
    this.socketService.initSocket();
    this.initSubscriptions();
  }

  ngAfterViewInit(): void {
    this.scrollContainer = this.scrollFrame.nativeElement;
    this.itemElements.changes.subscribe(
      (e) =>
        (this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight)
    );
  }

  initSubscriptions(): void {
    // Subscribe to messages sent back from server
    this.ioConnection = this.socketService
      .onMessage()
      .subscribe((message: Message) => {
        console.log('message', message);

        if (message.from.type != 'admin') {
          let lang = this.getLanguages(message);
          message = this.getTranslation(message, lang.source, lang.target);
        }

        this.messageList.push(message);
      });

    // Subscribe to connections
    this.socketService.onEvent(Event.CONNECT).subscribe(() => {
      console.log('connected');
      this.sharedData.newUserData.subscribe((user) => {
        this.socketService.join(user as User);
      });
    });

    // Subscribe to disconnections
    this.socketService.onEvent(Event.DISCONNECT).subscribe(() => {
      console.log('disconnected');
    });

    // Subscribe to roomUsers
    this.socketService.onRoomUsers().subscribe((users) => {
      this.users = users;
      console.log('roomUsers', {
        users: this.users,
        loginurl: `${this.sharedData.chaturl}?roomToken=${this.users[0].room}`,
      });
    });
  }

  // Send message to server then clear textbox
  sendMessage(): void {
    if (this.txtMessage) this.socketService.send(this.txtMessage);

    this.txtMessage = null;
  }

  // Call translation service
  getTranslation(
    message: Message,
    sourceLang: string,
    targetLang: string
  ): Message {
    if (targetLang != undefined && sourceLang != targetLang) {
      this.translateService
        .translateText(sourceLang, targetLang, message.content)
        .subscribe((response: TranslationResults) => {
          message.translatedcontent =
            response.data.translations[0].translatedText;

          console.log('response received', message.translatedcontent);
        });
    }
    return message;
  }

  // Get source and target language to pass to service
  getLanguages(message: Message): any {
    var sourceLang = this.users.find((u) => u.id === message.from.id)?.language;
    var targetLang = this.users.find((u) => u.id != message.from.id)?.language;

    return { source: sourceLang, target: targetLang };
  }
}
