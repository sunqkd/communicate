import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-routerchild1',
	templateUrl: './routerchild1.component.html',
	styleUrls: ['./routerchild1.component.css']
})
export class Routerchild1Component implements OnInit, OnDestroy {
	ngOnDestroy(): void {
		console.log("组件销毁")
	}

	constructor() { }

	ngOnInit() {
	}

}
