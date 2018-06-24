import { Component, OnInit, AfterViewInit, AfterViewChecked, ViewChild } from '@angular/core';
import { AfterviewchildComponent } from '../afterviewchild/afterviewchild.component';

@Component({
	selector: 'app-afterview',
	templateUrl: './afterview.component.html',
	styleUrls: ['./afterview.component.css']
})
export class AfterviewComponent implements OnInit, AfterViewInit, AfterViewChecked {
	@ViewChild("child1")
	child1:AfterviewchildComponent

	constructor() { }
	message:string;
	
	ngOnInit() {
		setInterval(() => {
			this.child1.greeting()
		},3000)
	}

	ngAfterViewInit(): void {
		console.log("父组件的视图初始化完毕")
		// this.message = "456"  禁止视图被组装完成之后在去更新视图(下面为解决方法)
		setTimeout( () => {
			this.message = "456"
		},0)
	}

	ngAfterViewChecked(): void {
		console.log("父组件的视图变更完毕")
	}

	/**
	 * 不能在ngAfterViewInit、ngAfterViewChecked 去改变视图中去改变的东西
	 * 想改变写在setTimeout()中
	 */
}
