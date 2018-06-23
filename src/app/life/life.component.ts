import { Component, OnInit, Input, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges } from '@angular/core';

let logIndex:number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})



export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
 
	logit(msg:string){
		console.log(`#${logIndex++} ${msg}`)
	}
	@Input()
	name:string

	constructor() { // 构造方法最先被执行
		this.logit("name 属性在constructor 值是" + name)
	}
	
	ngOnInit() {
		this.logit("ngOnInit")
	}
	// 初始化输入属性的是被调用
	ngOnChanges(changes:SimpleChanges):void{
		let name = changes['name'].currentValue
		this.logit("name 属性在 ngOnChanges 值是" + name)
	}
	ngDoCheck(): void {
		this.logit("ngDoCheck")
	}
	ngAfterContentInit(): void {
		this.logit("ngAfterContentInit")
	}
	ngAfterContentChecked(): void {
		this.logit("ngAfterContentChecked")
	}
	ngAfterViewInit(): void {
		this.logit("ngAfterViewInit")
	}
	ngAfterViewChecked(): void {
		this.logit("ngAfterViewChecked")
	}
	ngOnDestroy(): void {
		this.logit("ngOnDestroy")
	}
}
