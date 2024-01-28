import { ChangeDetectionStrategy, Component, Input, SimpleChanges } from '@angular/core';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'heater-knob',
  templateUrl: './heater-knob.component.html',
  styleUrl: './heater-knob.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaterKnobComponent {
  @Input() public title: string = '';
  @Input() public minimumValue: number = 0;
  @Input() public maximumValue: number = 40;
  @Input() public targetValue: number = 20;
  public pointerTransform: string = 'translate(-50%, -100%) rotate(0deg)';

  private pointerLocation: number = 0;

  constructor(private temperatureService: TemperatureService) { }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['title'].currentValue 
      || changes['minimumValue'].currentValue 
      || changes['maximumValue'].currentValue 
      || changes['targetValue'].currentValue) {
        this.pointerLocation = this.temperatureService.getPointerLocationFromTemperature(this.targetValue, this.minimumValue, this.maximumValue);
    
        this.pointerTransform = `translate(-50%, -100%) rotate(${this.pointerLocation}deg)`;
    };
  }
}
