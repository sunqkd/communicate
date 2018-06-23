import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

	@Input() // 输入属性
	greeting: string

	@Input()
	user: { name: string }

	message: string = "初始化消息";

	oldUserName:string;
	changeDetected:boolean;
	changeCount:number;
	

	constructor() { }

	ngOnInit() {
	}

	/** 
	 * ngOnChanges 第一次被调用为父组件 初始化子组件的值
	 * 不可变对象的值发生变化时
	 * user自身没有改变只是改变了name属性的值所以不会触发ngOnChanges事件
	 * message不是输入属性Input也不会调用ngOnChanges
	 * */
	ngOnChanges(changes: SimpleChanges): void {
		console.log(JSON.stringify(changes, null, 2))
	}

	/**
	 * 变更检测
	 */
	ngDoCheck(): void {

		if(this.user.name != this.oldUserName){
			this.changeDetected = true;
			console.log("DoCheck: user.name" + this.oldUserName +"变更为"+ this.user.name)
			this.oldUserName = this.user.name;
		}

		if(this.changeDetected){
			this.changeCount = 0
		}else{
			this.changeCount++;
			console.log("没有发生变化" +　this.changeCount)
		}

		this.changeDetected = false;
	}

}
