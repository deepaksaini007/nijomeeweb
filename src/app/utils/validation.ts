import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[NumberOnly],input[type=number],input[numbersOnly]'
})
export class Validation {

    private regex: RegExp = new RegExp('^[0-9]*$');
    constructor(private elementRef: ElementRef,) {

    }
    @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
        const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
        if (inputValue && !String(inputValue).match(this.regex)) { event.preventDefault(); }
        return;
    }
    // @HostListener('input', ['$event']) onInputChange(event) {
    //     const initalValue = this.elementRef.nativeElement.value;
    //     this.elementRef.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    //     if ( initalValue !== this.elementRef.nativeElement.value) {
    //       event.stopPropagation();
    //     }
    //   }
    // @HostListener('paste', ['$event']) OnPaste(event) { return; }

}
export const customRegex = {
    allAllow: /^.*$/,
    numberOnly: /^[0-9]*$/,
    alphabetOnly: /^[a-zA-Z ]*$/,
    onlyNumberWithFloat: /^[0-9.]*$/,
    alphabhetAndNumberOnly: /^[a-zA-Z0-9]*$/,
    alphabhetAndNumberOnlyWithSpace: /^[a-zA-Z0-9 ]*$/,
    notStartWithSpecialChar: /^[A-Za-z][A-Za-z ]*(?:_[A-Za-z]+)*$/,
    notStartWithSpecialCharAndNumber: /^[A-Za-z0-9][A-Za-z0-9 ]*(?:_[A-Za-z0-9]+)*$/,
    notStartWithSpecialCharAndNumberOnly: /^[A-Za-z0-9][A-Za-z0-9]*(?:_[A-Za-z0-9]+)*$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    emailWithTwoDots: /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{7,}$/  //special, alph, number
  }
