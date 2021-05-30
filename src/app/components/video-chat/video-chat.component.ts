import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css'],
})
export class VideoChatComponent implements OnInit {
  message = '';
  goToRoom = () => {
    this.message = 'Entrando...';
  };

  constructor() {}

  ngOnInit(): void {}
}
