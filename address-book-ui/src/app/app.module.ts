import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsModule } from './contacts/contacts.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule, ContactsModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
