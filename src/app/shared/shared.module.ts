import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [TableModule, PanelModule],
  exports: [TableModule, PanelModule],
})
export class SharedModule {}
