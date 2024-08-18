import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {FormsModule} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-delete-user',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './delete-user.component.html',
  styleUrl: './delete-user.component.css'
})
export class DeleteUserComponent {
  userId: string = '';
  message: string = '';

  constructor(private userService: UserService , private router: Router) { }

  deleteUser(): void {
    if (this.userId) {
      this.userService.deleteUser(this.userId).subscribe({
        next: (response) => {
          this.message = response;
          alert("User deleted successfully!");
        },
        error: (error) => {
          this.message = 'Error deleting user';
          console.error(error);
        }
      });
    } else {
      this.message = 'Please enter a user ID';
    }
    this.router.navigateByUrl('display-user');
  }
  goToDisplay(){
    this.router.navigateByUrl('display-user');
  }
}
