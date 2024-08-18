import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { UserService} from '../user.service';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-app',
  templateUrl: './add-user.component.html',
  standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule,
        FormsModule,
        NgOptimizedImage
    ],
  styleUrls: ['./add-user.component.css']
})
export class AddAppComponent implements OnInit {

  name: string = '';
  email: string = '';
  file?: File;
  responseMessage?: string;


  constructor(private userService: UserService , private router: Router) { }

  onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  onSubmit(): void {
    if (this.file) {
      this.userService.addUser(this.name, this.email, this.file)
        .subscribe({
          next: (response) => this.responseMessage = response,
          error: (error) => this.responseMessage = 'An error occurred: ' + error.message
        });
    } else {
      this.responseMessage = 'Please select a file.';
    }
    alert("User Added Successfully!");
    console.log("User Added Successfully!");
    this.router.navigateByUrl('display-user');

  }

  goToDisplay(){
    this.router.navigateByUrl('display-user');
  }



  ngOnInit(): void {
  }
}

