import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PunkIpaService {

  constructor(private http: HttpClient) { }

  getBeers() {
    return this.http.get<unknown>("https://api.punkapi.com/v2/beers");
  }
}
