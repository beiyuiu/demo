import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'storeOrderConfirm',
    template: `
    
        <storeHeader></storeHeader>
        <router-outlet></router-outlet>
        <storeFooter></storeFooter>
    `
})

export class OrderConfirmComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}