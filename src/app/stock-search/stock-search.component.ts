import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-stock-search',
	templateUrl: './stock-search.component.html',
	styleUrls: ['./stock-search.component.css']
})
export class StockSearchComponent implements OnInit {
	
	@Input()
	private keyword:string;
	private price:number;

	// @Output()  // searchResult 为输出属性
    @Output('price') // 也可以指定名字
	searchResult:EventEmitter<StockInfo> = new EventEmitter();

    @Output()
	addCart:EventEmitter<StockInfo> = new EventEmitter();

	constructor() {
		setInterval( () => {

			let stockInfo:StockInfo = new StockInfo(this.keyword, 100 * Math.random())
			this.price = stockInfo.price;
			
			// emit 为发射的意思
			this.searchResult.emit(stockInfo)

		},3000)
	}
    // 购买股票
	buyStock(){
		this.addCart.emit( new StockInfo(this.keyword, this.price) )
	}

	ngOnInit() {
	}
}

export class StockInfo{
	constructor(public name:string,public price:number){

	}
}
