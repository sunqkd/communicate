import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-stock-search',
	templateUrl: './stock-search.component.html',
	styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {
	
	@Input()
	private keyword:string;

	constructor() {
		setInterval( () => {
			this.keyword = 'xxxx'
		},3000)
	}
	

	ngOnInit() {
	}

}
