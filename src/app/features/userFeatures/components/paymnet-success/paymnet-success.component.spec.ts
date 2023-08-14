import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymnetSuccessComponent } from './paymnet-success.component';

describe('PaymnetSuccessComponent', () => {
  let component: PaymnetSuccessComponent;
  let fixture: ComponentFixture<PaymnetSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymnetSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymnetSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
