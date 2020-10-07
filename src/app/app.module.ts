import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MenuComponent } from './menu/menu.component';
// import { ManufacturerComponent } from './manufacturer/manufacturer.component';
// import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
    // MenuComponent,
    // ManufacturerComponent,
    // ProductComponent,
    SearchComponent,
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
