import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  var isLoggedIn: boolean = inject(AuthService).isLoggedIn();

  if (!isLoggedIn) {
    inject(Router).navigate(['/session/authenticate']);
  }

  console.log('authGuard: ' + isLoggedIn);

  return isLoggedIn;
};
