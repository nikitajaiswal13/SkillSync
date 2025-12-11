import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Storage {
    set(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Get data from localStorage
  get(key: string) {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  }
}
