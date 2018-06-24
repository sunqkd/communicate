import { Component, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-contentchildren',
	templateUrl: './contentchildren.component.html',
	styleUrls: ['./contentchildren.component.css']
})
export class ContentchildrenComponent implements OnInit, AfterContentInit, AfterContentChecked,AfterViewInit {
	ngAfterViewInit(): void {
		// 这里不可以写变更message的方法，因为页面渲染已经完成
	}
	
	message:string = "666"
	ngAfterContentInit(): void {
		console.log("子组件投影初始化完成")
		this.message = "8888"
	}
	ngAfterContentChecked(): void {
		console.log("子组件投影变更检测完成")
	}


	constructor() { }

	ngOnInit() {
	}

}
