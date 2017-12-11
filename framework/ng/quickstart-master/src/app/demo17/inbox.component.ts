import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'inbox',
    template: `
        <ul>
            <li>未读邮件1</li>
            <li>未读邮件2</li>
            <li>未读邮件3</li>
        </ul>
    `
})

export class InBoxComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}