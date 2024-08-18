import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../model/app.model";
import {JsonPipe, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-display-users',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    JsonPipe,
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './display-users.component.html',
  styleUrl: './display-users.component.css'
})
export class DisplayUsersComponent implements OnInit {





  users: User[] = [];


  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: data => {
        this.users = data
      },
      error: error => {
        console.error(error);
      }
    })
  }


  getFileName(fileUrl: string): string {
    // Extract the file name from the URL
    return fileUrl.substring(fileUrl.lastIndexOf('/') + 1);
  }
  onLogout() {
    // Perform any necessary logout operations here, such as clearing user data or tokens

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
