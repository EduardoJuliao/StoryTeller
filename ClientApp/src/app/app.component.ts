import { StoryTellerService, Story } from './services/story-teller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: StoryTellerService) { }

  ngOnInit() {
    this.service.getFirstStory()
      .subscribe((response: Story) => {
        this.story.push(response);
      })
  }

  story: Story[];
}
