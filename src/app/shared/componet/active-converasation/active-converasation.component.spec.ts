import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveConverasationComponent } from './active-converasation.component';

describe('ActiveConverasationComponent', () => {
  let component: ActiveConverasationComponent;
  let fixture: ComponentFixture<ActiveConverasationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveConverasationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveConverasationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
