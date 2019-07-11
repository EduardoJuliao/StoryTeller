import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.writeText();
  }

  @Input("text")
  private text: string;

  @Input("textSpeed")
  private speed: number;

  options: any[] = [];
  display_text: string = "";

  private writeText() {
    let index: number = 0;
    const interval = setInterval(() => {
      if (this.text.length > index) {
        this.display_text += this.text[index];
        index++;
      }
      else {
        clearInterval(interval);
      }
    }, this.speed);
  }
}
