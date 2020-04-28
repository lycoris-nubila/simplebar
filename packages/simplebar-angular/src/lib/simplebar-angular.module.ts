import { NgModule } from '@angular/core';
import { SimplebarAngularComponent } from './simplebar-angular.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [SimplebarAngularComponent],
  imports: [ScrollingModule],
  exports: [SimplebarAngularComponent]
})
export class SimplebarAngularModule {}
