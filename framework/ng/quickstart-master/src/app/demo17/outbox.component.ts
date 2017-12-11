import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'outbox',
    template: `
        <ul>
            <li>已发邮件1</li>
            <li>已发邮件2</li>
            <li>已发邮件3</li>
        </ul>
    `
})

export class OutBoxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}