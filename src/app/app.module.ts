import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockCartComponent } from './stock-cart/stock-cart.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { ParentsComponent } from './parents/parents.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
	declarations: [
		AppComponent,
		StockSearchComponent,
		StockCartComponent,
		LifeComponent,
		ChildComponent,
		ParentsComponent,
		Child1Component
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
