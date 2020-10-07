export class User {
  public id?: string;
  public name?: string;
  public room?: string;
  public country?: string;
  public language?: string;
  public type?: string; //visitor or guide or admin

  constructor(
    id?: string,
    name?: string,
    room?: string,
    country?: string,
    language?: string,
    type?: string
  ) {
    this.id = id;
    this.name = name;
    this.room = room;
    this.country = country;
    this.language = language;
    this.type = type;
  }
}
