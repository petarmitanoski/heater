import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Heater {
  id?: any;
  title: string,
  minimumTemp: number,
  maximumTemp: number,
  targetTemp: number,
}

@Injectable({
  providedIn: 'root'
})
export class HeaterService {
  private mockHeaters: Heater[] = [
    {
      title: "Room 1",
      minimumTemp: 0,
      maximumTemp: 0,
      targetTemp: 0,
    },
    {
      title: "Room 2",
      minimumTemp: 10,
      maximumTemp: 20,
      targetTemp: 10,
    },
    {
      title: "Room 3",
      minimumTemp: 0,
      maximumTemp: 50,
      targetTemp: 25,
    },
    {
      title: "Room 4",
      minimumTemp: 0,
      maximumTemp: 40,
      targetTemp: 40,
    },
    {
      title: "Room 5",
      minimumTemp: 0,
      maximumTemp: 40,
      targetTemp: 0,
    }
  ];

  private _heaters = new BehaviorSubject<Heater[]>([]);

  public readonly heaters$: Observable<Heater[]> = this._heaters.asObservable();

  constructor() { }

  loadHeaters() {
    this._heaters.next(this.mockHeaters);
  }
}
