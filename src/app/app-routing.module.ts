import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemPageComponent } from './view/page/list-item-page/list-item-page.component';
import { ListPageComponent } from './view/page/list-page/list-page.component';
import { NewItemPageComponent } from './view/page/new-item-page/new-item-page.component';
import { NewListPageComponent } from './view/page/new-list-page/new-list-page.component';

const routes: Routes = [ 
  { path: '', component: ListPageComponent, data: {animation: 'isLeft'} },
  { path: 'item-create/:token', component: NewItemPageComponent, data: {animation: 'isRight'}},
  { path: 'list/:token', component: ListItemPageComponent, data: {animation: 'isRight'}},
  { path: 'list-create', component: NewListPageComponent, data: {animation: 'isRight'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
