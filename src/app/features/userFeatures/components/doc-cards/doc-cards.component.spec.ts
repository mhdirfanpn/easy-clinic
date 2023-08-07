import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocCardsComponent } from './doc-cards.component';

describe('DocCardsComponent', () => {
  let component: DocCardsComponent;
  let fixture: ComponentFixture<DocCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
