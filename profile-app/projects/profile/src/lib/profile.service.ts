import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }
  get() {
    console.log('ProfileSERvice')
  }
}
