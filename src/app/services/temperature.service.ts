import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {
  private readonly minLocation: number = 0;
  private readonly maxLocation: number = 281;

  constructor() { }

  getPointerLocationFromTemperature(targetValue: number, minValue: number, maxValue: number) {
    if (targetValue >= minValue && targetValue <= maxValue) {
      return (targetValue-minValue)/(maxValue-minValue) * this.maxLocation;
    }

    return this.minLocation;
  }
}
