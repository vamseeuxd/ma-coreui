import {Component, ElementRef, forwardRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator} from '@angular/forms';
import {fromEvent, Observable} from 'rxjs';
import {debounce, debounceTime, map} from 'rxjs/operators';

@Component({
  selector: 'ma-text-input',
  templateUrl: './ma-text-input.component.html',
  styleUrls: ['./ma-text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MaTextInputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MaTextInputComponent),
      multi: true,
    }
  ]
})
export class MaTextInputComponent implements ControlValueAccessor, Validator, OnInit {

  @HostBinding('class') classes = 'form-group';
  @ViewChild('inputController') inputController: ElementRef;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() required: boolean;
  @Input() min: number;
  @Input() max: number;
  @Input() pattern: RegExp;
  @Input() maxErrorMessage = 'Should be less than';
  @Input() minErrorMessage = 'Should be more than';
  @Input() requiredErrorMessage = 'is required';
  @Input() patternErrorMessage = 'Should match required pattern';
  @Input() disabled = false;

  private _value: string;
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
  }

  constructor() {
  }

  ngOnInit(): void {
    this.inputController$ = fromEvent(this.inputController.nativeElement, 'keyup').pipe(
      map((x: any) => x.currentTarget.value),
      debounceTime(200)
    );
    this.inputController$.subscribe(value1 => {
      this.onChange(value1);
      this.onTouched();
    });
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
      if (!c.value || (c.value && c.value.trim().length === 0)) {
        this.errorType = this.REQUIRED_ERROR;
        this.inputValidationClass = this.INVALID_CLASS;
        return {required: {valid: false}};
      }
    } else {
      if (!c.value || (c.value && c.value.trim().length === 0)) {
        this.errorType = this.NO_ERROR;
        this.inputValidationClass = this.VALID_CLASS;
        return null;
      }
    }

    /*
    * min validation
    * */
    if (this.min !== null && this.min !== undefined) {
      if (!c.value || (c.value && c.value.trim().length < this.min)) {
        this.errorType = this.MIN_ERROR;
        this.inputValidationClass = this.INVALID_CLASS;
        return {min: {valid: false}};
      }
    }

    /*
    * max validation
    * */
    if (this.min !== null && this.min !== undefined) {
      if (!c.value || (c.value && c.value.trim().length > this.max)) {
        this.errorType = this.MAX_ERROR;
        this.inputValidationClass = this.INVALID_CLASS;
        return {min: {valid: false}};
      }
    }

    /*
    * pattern validation
    * */
    if (this.pattern !== null && this.pattern !== undefined) {
      if (!this.pattern.test(c.value.trim())) {
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

/*
if (this.required) {
  if (this.min && this.max) {
    if (this.value && this.value.length >= this.min && this.value.length <= this.max) {
      this.inputValidationClass = this.VALID_CLASS;
      this.errorType = this.NO_ERROR;
      return null;
    } else if (this.value && this.value.length < this.min) {
      this.inputValidationClass = this.INVALID_CLASS;
      this.errorType = this.MIN_ERROR;
      return {min: {valid: false}};
    } else if (this.value && this.value.length > this.max) {
      this.errorType = this.MAX_ERROR;
      this.inputValidationClass = this.INVALID_CLASS;
      return {max: {valid: false}};
    } else {
      this.inputValidationClass = this.INVALID_CLASS;
      this.errorType = this.REQUIRED_ERROR;
      return {required: {valid: false}};
    }
  } else {
    this.errorType = this.REQUIRED_ERROR;
    this.inputValidationClass = this.INVALID_CLASS;
    return {required: {valid: false}};
  }
} else {
  this.errorType = this.NO_ERROR;
  this.inputValidationClass = this.VALID_CLASS;
  return null;
}*/
