import {Component, ElementRef, forwardRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from '@angular/forms';
import {fromEvent, Observable} from 'rxjs';
import {debounce, debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'ma-date-input',
  templateUrl: './ma-date-input.component.html',
  styleUrls: ['./ma-date-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MaDateInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaDateInputComponent),
      multi: true,
    }
  ]
})
export class MaDateInputComponent implements ControlValueAccessor, Validator, OnInit {
  @HostBinding('class') _class = 'col-6';

  get class(): string {
    return this._class;
  }

  @Input()
  set class(value: string) {
    this._class = value;
  }

  @ViewChild('inputController') inputController: ElementRef;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() required: boolean;
  @Input() min: Date;
  @Input() max: Date;
  @Input() pattern: RegExp;
  @Input() maxErrorMessage = 'Should be less than or equal to';
  @Input() minErrorMessage = 'Should be greater than or equal to';
  @Input() requiredErrorMessage = 'is required';
  @Input() patternErrorMessage = 'Should match required pattern';
  @Input() disabled = false;


  private _value: Date;
  private inputController$: Observable<any>;
  private inputValidationClass: string;
  private errorType = 0;
  private pristine: boolean;
  private readonly VALID_CLASS = 'is-valid';
  private readonly INVALID_CLASS = 'is-invalid';
  private readonly NO_ERROR = 0;
  private readonly REQUIRED_ERROR = 1;
  private readonly MIN_ERROR = 2;
  private readonly MAX_ERROR = 3;
  private readonly PATTERN_ERROR = 4;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange: any = () => {
  };
  onTouched: any = () => {
  };

  validate(c: FormControl) {
    this.pristine = c.pristine;
    /*
    * required validation
    * */
    if (this.required) {
      if (!c.value || (c.value && c.value === 0)) {
        this.errorType = this.REQUIRED_ERROR;
        this.inputValidationClass = this.INVALID_CLASS;
        return {required: {valid: false}};
      }
    } else {
      if (!c.value || (c.value && c.value === 0)) {
        this.errorType = this.NO_ERROR;
        this.inputValidationClass = this.VALID_CLASS;
        return null;
      }
    }

    /*
    * min validation
    * */
    if (this.min !== null && this.min !== undefined) {
      if (!c.value || (c.value && c.value < this.min)) {
        this.errorType = this.MIN_ERROR;
        this.inputValidationClass = this.INVALID_CLASS;
        return {min: {valid: false}};
      }
    }

    /*
    * max validation
    * */
    if (this.min !== null && this.min !== undefined) {
      if (!c.value || (c.value && c.value > this.max)) {
        this.errorType = this.MAX_ERROR;
        this.inputValidationClass = this.INVALID_CLASS;
        return {min: {valid: false}};
      }
    }

    /*
    * pattern validation
    * */
    if (this.pattern !== null && this.pattern !== undefined) {
      if (!this.pattern.test(c.value)) {
        this.errorType = this.PATTERN_ERROR;
        this.inputValidationClass = this.INVALID_CLASS;
        return {min: {valid: false}};
      }
    }

    this.errorType = this.NO_ERROR;
    this.inputValidationClass = this.VALID_CLASS;
    return null;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

}
