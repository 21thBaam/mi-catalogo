import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  message: string [] = [];
  constructor(private messagesServices: MessageService) { }

  ngOnInit(): void {
    this.message = this.messagesServices.messages;
  }

}
