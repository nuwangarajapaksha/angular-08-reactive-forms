import { AbstractControl, ValidationErrors } from '@angular/forms';

//06,10,11, - Implementing Custom Validation,Validating Upon Submitting the Form,Nested FormGroups
export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0)
      return { cannotContainSpace: true };

    return null;
  }

  //07,08,09 - Async Operations,Async Validators,Displaying a Loader Image
  static shouldBeUnique(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'mosh') resolve({ shouldBeUnique: true });
        else resolve(null);

        return null;
      }, 2000);
    });
  }
}
