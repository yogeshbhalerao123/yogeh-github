import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {path:'',component:AdminComponent,children:
[
  {path:'',component:ImageComponent},
  {path:'Image',component:ImageComponent},
  {path:'Checkbox',component:CheckboxComponent}
  
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
