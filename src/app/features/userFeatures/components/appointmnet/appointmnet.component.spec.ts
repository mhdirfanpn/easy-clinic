import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmnetComponent } from './appointmnet.component';

describe('AppointmnetComponent', () => {
  let component: AppointmnetComponent;
  let fixture: ComponentFixture<AppointmnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmnetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
