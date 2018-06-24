import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StockSearchComponent } from './stock-search/stock-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockCartComponent } from './stock-cart/stock-cart.component';
import { LifeComponent } from './life/life.component';
import { ChildComponent } from './child/child.component';
import { ParentsComponent } from './parents/parents.component';
import { Child1Component } from './child1/child1.component';
import { AfterviewComponent } from './afterview/afterview.component';
import { AfterviewchildComponent } from './afterviewchild/afterviewchild.component';
import { RedBorderComponent } from './red-border/red-border.component';
import { ContentComponent } from './content/content.component';
import { ContentchildrenComponent } from './contentchildren/contentchildren.component';
import { Routerchild1Component } from './routerchild1/routerchild1.component';
import { Routerchild2Component } from './routerchild2/routerchild2.component';

const routerConfig:Routes = [
	{
		path: '', component:Routerchild1Component
	},
	{
		path: 'routerchild1', component:Routerchild2Component
	}
]
@NgModule({
	declarations: [
		AppComponent,
		StockSearchComponent,
		StockCartComponent,
		LifeComponent,
		ChildComponent,
		ParentsComponent,
		Child1Component,
		AfterviewComponent,
		AfterviewchildComponent,
		RedBorderComponent,
		ContentComponent,
		ContentchildrenComponent,
		Routerchild1Component,
		Routerchild2Component
	],
	imports: [
		BrowserModule,
		FormsModule, // 双向数据绑定
		ReactiveFormsModule,

		RouterModule.forRoot(routerConfig) // 路由配置

	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
