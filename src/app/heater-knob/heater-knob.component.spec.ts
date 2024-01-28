import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaterKnobComponent } from './heater-knob.component';

describe('HeaterKnobComponent', () => {
  let component: HeaterKnobComponent;
  let fixture: ComponentFixture<HeaterKnobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaterKnobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaterKnobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
