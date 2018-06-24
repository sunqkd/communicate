import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
	selector: 'app-parents',
	templateUrl: './parents.component.html',
	styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
	
	@ViewChild("child1") // 获得子组件的引用
	child1:Child1Component
	greeting:string = "Hello";
	user:{name:string} = {name: 'Tom'}


	constructor() { }

	ngOnInit() :void{
		this.child1.greeting("Jerry")
	}

}
