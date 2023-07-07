// 03 - Creating Controls Programatically
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  form = new FormGroup({
    // 11 -  Nested FormGroups
    account: new FormGroup({
      // username: new FormControl('', [
      //   //04 - Adding Validation
      //   Validators.required,

      //   //05 - Specific Validation Errors
      //   Validators.minLength(3),

      //   // 06 - Implementing Custom Validation
      //   UsernameValidators.cannotContainSpace,

      //   //07,08 - Async Operations,Async Validators
      //   UsernameValidators.shouldBeUnique,
      // ]),

      //or---------------------------------------------------

      //07,08,09 - Async Operations,Async Validators,Displaying a Loader Image
      username: new FormControl(
        '',
        Validators.required,
        UsernameValidators.shouldBeUnique
      ),

      password: new FormControl('', Validators.required),
    }),
  });

  // 10 - Validating Upon Submitting the Form
  login() {
    this.form.setErrors({
      invalidLogin: true,
    });
  }

  get username() {
    return this.form.get('account.username');
  }
}
