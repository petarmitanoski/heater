import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Heater, HeaterService } from '../services/heater.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  public heaters$: Observable<Heater[]>;

  constructor(private heaterService: HeaterService) {
    this.heaters$ = this.heaterService.heaters$;
  }

  ngOnInit() {
    this.heaterService.loadHeaters();
  }
}
