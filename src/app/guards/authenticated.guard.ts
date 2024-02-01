import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const authenticatedGuard: CanMatchFn = (route, segments) => {

  const token = localStorage.getItem('token');
  const router = inject(Router);

  if(!token){
    localStorage.clear();
    router.navigate(['/login']);
    return false;
  }
  else
    return true;

};
