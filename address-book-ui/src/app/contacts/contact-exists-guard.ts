import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

import { Store } from '@ngrx/store';

import { getContactById } from './store/selectors';
import { IAppState } from './store/state';

@Injectable()
export class ContactExistsGuard implements CanActivate {
  constructor(private router: Router, private store: Store<IAppState>) {}

  canActivate(next: ActivatedRouteSnapshot): Promise<any> {
    return new Promise((resolve) => {
      this.store.select(getContactById, +next.params.id).subscribe((result) => {
        if (result) {
          resolve(true);
        } else {
          // returning UrlTree instead of redirecting is preferable as this allows complex route guards handle redirects appropriately
          resolve(this.router.parseUrl('/notfound'));
        }
      });
    });
  }
}
