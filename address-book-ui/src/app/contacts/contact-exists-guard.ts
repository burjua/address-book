import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state';
import { contactExists } from './store/selectors';

@Injectable()
export class ContactExistsGuard implements CanActivate {
  constructor(private router: Router, private store: Store<IAppState>) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    console.log('ContactExistsGuard canActivate: ', next.params.id);

    const id = +next.params.id;

    return new Promise((resolve) => {
      this.store.select(contactExists, { id }).subscribe((result) => {
        if (result) {
          resolve(true);
        } else {
          resolve(this.router.parseUrl('/notfound'));
        }
      });
    });
  }
}
