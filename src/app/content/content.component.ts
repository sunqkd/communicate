import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-content',
	templateUrl: './content.component.html',
	styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit,AfterViewInit,AfterContentInit,AfterContentChecked {
	
	ngAfterViewInit(): void {
		console.log("父组件内容初始化完毕")
	}
	
	ngAfterContentInit(): void {
		console.log("父组件投影内容初始化完成")
	}

	ngAfterContentChecked(): void {
		console.log("父组件投影内容变更检测完成")
	}

	constructor() { }

	ngOnInit() {
	}

}
