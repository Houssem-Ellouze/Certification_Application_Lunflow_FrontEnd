import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../user.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  name: string = '';
  email: string = '';



  constructor(private userService: UserService, private router: Router) { }

  login(): void {
    this.userService.login(this.name, this.email).subscribe(
      response => {
        console.log('Login successful:', response);
        this.router.navigate(['/display-user']);
      },
      error => {
        if (error.status === 401) {
          console.error('Login failed: Unauthorized');
        }
      }
    );
  }
}


