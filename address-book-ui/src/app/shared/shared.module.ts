import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderDetailsComponent } from './headers/header-details/header-details.component';
import { HeaderMainComponent } from './headers/header-main/header-main.component';

@NgModule({
  imports: [RouterModule],
  declarations: [HeaderMainComponent, HeaderDetailsComponent],
  exports: [HeaderMainComponent, HeaderDetailsComponent],
})
export class SharedModule {}
