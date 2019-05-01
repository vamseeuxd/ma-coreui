import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaNumberInputComponent } from './ma-number-input.component';

describe('MaDateInputComponent', () => {
  let component: MaNumberInputComponent;
  let fixture: ComponentFixture<MaNumberInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaNumberInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
