import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaTextInputComponent } from './ma-text-input.component';

describe('MaTextInputComponent', () => {
  let component: MaTextInputComponent;
  let fixture: ComponentFixture<MaTextInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaTextInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
