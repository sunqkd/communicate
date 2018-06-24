import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
	selector: 'app-afterviewchild',
	templateUrl: './afterviewchild.component.html',
	styleUrls: ['./afterviewchild.component.css']
})
export class AfterviewchildComponent implements OnInit, AfterViewInit, AfterViewChecked {


	constructor() { }

	ngOnInit() {

	}
	
    greeting(){
		console.log("子组件的方法")
	}

	ngAfterViewInit(): void {
		console.log("子组件的视图初始化完毕")
	}

	ngAfterViewChecked(): void {
		console.log("子组件的视图变更完毕")
	}
}
