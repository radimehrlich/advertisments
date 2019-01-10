/* 
 * Class Advertisment
 * Represents one single advertisment 
 */
export class Advertisment {

  private date: number;
  private caption: string;
  private content: string;
  private type: number;

  constructor (date: number, caption: string, content: string, type: number) {
    this.date = date;
    this.caption = caption;
    this.content = content;
    this.type = type;
  }

  getDate(): number {
    return this.date;
  }

  getCaption(): string {
    return this.caption;
  }
  
  getContent(): string {
    return this.content;
  }

  getType(): number {
    return this.type;
  }

}
