import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NewContactComponent } from './components/new-contact/new-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ContactExistsGuard } from './contact-exists-guard';
import { CanDeactivateGuard } from './can-deactivate-guard';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  {
    path: 'new',
    component: NewContactComponent,
    canDeactivate: [CanDeactivateGuard],
  },
  {
    path: 'edit/:id',
    component: EditContactComponent,
    canActivate: [ContactExistsGuard],
    canDeactivate: [CanDeactivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactsRoutingModule {}
