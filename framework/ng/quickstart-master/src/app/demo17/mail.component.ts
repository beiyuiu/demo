import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mail',
    template: `
        <h1>主页</h1>
        <ul>
            <li routerLink="/mail/inbox">收件箱</li>
            <li routerLink="/mail/outbox">发件箱</li>
            <li routerLink="/mail/trash">垃圾箱</li>
        </ul>
        <router-outlet></router-outlet>
    `
})

export class MailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}