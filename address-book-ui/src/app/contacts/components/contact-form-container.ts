import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

export class ContactFormContainer {
  title = 'New contact';
  contact = null;
  error = '';
  hasChanges = false;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  onChanges(hasChanges: boolean): void {
    this.hasChanges = hasChanges;
  }

  showSnackBar(message: string): void {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }

  navigateHome(): void {
    this.hasChanges = false; // allow navigating away without confirmation
    this.router.navigate(['/contacts']);
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (this.hasChanges) {
      return window.confirm('You have unsaved changes, do you want to proceed?');
    }
    return true;
  }
}
