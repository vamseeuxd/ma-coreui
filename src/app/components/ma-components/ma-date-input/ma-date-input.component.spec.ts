import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaDateInputComponent } from './ma-date-input.component';

describe('MaDateInputComponent', () => {
  let component: MaDateInputComponent;
  let fixture: ComponentFixture<MaDateInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaDateInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaDateInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
