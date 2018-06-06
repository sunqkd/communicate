import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockCartComponent } from './stock-cart/stock-cart.component';

@NgModule({
	declarations: [
		AppComponent,
		StockSearchComponent,
		StockCartComponent
	],
	imports: [
		BrowserModule,
		FormsModule, // 双向数据绑定
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
