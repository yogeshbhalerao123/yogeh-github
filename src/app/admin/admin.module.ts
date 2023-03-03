import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ImageComponent } from './image/image.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ImageComponent, CheckboxComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
