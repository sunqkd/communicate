import { Component, OnInit, Input } from '@angular/core';
import { StockInfo } from '../stock-search/stock-search.component';

@Component({
	selector: 'app-stock-cart',
	templateUrl: './stock-cart.component.html',
	styleUrls: ['./stock-cart.component.css']
})
export class StockCartComponent implements OnInit {

	constructor() { }
	@Input()
	private stockInfo:StockInfo;
	ngOnInit() {
		
	}

}
