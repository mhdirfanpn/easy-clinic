import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashDatasComponent } from './dash-datas.component';

describe('DashDatasComponent', () => {
  let component: DashDatasComponent;
  let fixture: ComponentFixture<DashDatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashDatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashDatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
