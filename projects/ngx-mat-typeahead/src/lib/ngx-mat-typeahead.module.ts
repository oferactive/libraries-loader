import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxMatTypeaheadComponent } from './ngx-mat-typeahead.component';

@NgModule({
  imports: [HttpClientModule],
  declarations: [NgxMatTypeaheadComponent],
  exports: [NgxMatTypeaheadComponent]
})
export class NgxMatTypeaheadModule {}