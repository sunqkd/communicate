import { Component } from '@angular/core';
import { StockInfo } from './stock-search/stock-search.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    parentsSearch:string;
    private currentPrice:number;
    // 捕获子组件传过来的数据
    // $event 为传过来的数据


    private stockInfo:StockInfo

    searchResultHandler(stockInfo:StockInfo){
        this.currentPrice = stockInfo.price
    }
    
    addCartHandler(stockInfo:StockInfo){
        this.stockInfo = stockInfo
    }
}
