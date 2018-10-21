import { Component } from '@angular/core';
import {MessageService} from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp 1234';
  name = 'varsha';

  constructor(public messageService : MessageService) { }

  ngOnInit() {
    this.messageService.add('Page Loaded Successfully');
  }
}
