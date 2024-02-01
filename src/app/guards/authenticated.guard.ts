import { CanMatchFn } from '@angular/router';

export const authenticatedGuard: CanMatchFn = (route, segments) => {

  const token = localStorage.getItem('token');


  return true;


};
