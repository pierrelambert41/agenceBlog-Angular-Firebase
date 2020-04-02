import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authentication: AuthenticationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initSignInForm();
  }

  initSignInForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmitSignInForm() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authentication.signInUser(email, password).then(
      (data) => {
        this.router.navigate(['/admin', 'dashboard']);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    );
  }

}
