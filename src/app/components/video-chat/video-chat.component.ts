import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video-chat',
  templateUrl: './video-chat.component.html',
  styleUrls: ['./video-chat.component.css'],
})
export class VideoChatComponent implements OnInit {
  message = '';
  goToRoom = () => {
    /* this.message = 'Entrando...';
    setInterval(() => (this.message = 'Listo'), 3000); */

    //abrimos video-chat
    window.open('http://localhost:3030/', '_blank');
  };

  constructor() {}

  ngOnInit(): void {}
}
