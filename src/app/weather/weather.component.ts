import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData: any;
  ngOnInit(){
    this.weatherSearchForm = this.formBuilder.group({
      location: ['']
    });
    //throw new Error('Method not implemented.');
  }
  sendToAPIXU(formValues: any) {
    this.apixuService.getWeather(formValues.location).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
  }
  public weatherSearchForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private apixuService: ApixuService){}
}
