import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocReqListComponent } from './doc-req-list.component';

describe('DocReqListComponent', () => {
  let component: DocReqListComponent;
  let fixture: ComponentFixture<DocReqListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocReqListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocReqListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
