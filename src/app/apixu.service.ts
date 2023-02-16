import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) {}

  getWeather(location: string){
      return this.http.get(
          'http://api.weatherstack.com/current?access_key=404d5e9b542ec3314d4d1a26bc2f5e56&query=' + location
      );
  }
}