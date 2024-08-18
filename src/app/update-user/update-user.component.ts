import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    FormsModule,
    NgOptimizedImage
  ],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {

  @ViewChild('userFile', { static: false }) userFile!: ElementRef<HTMLInputElement>;

  constructor(private userService: UserService , private router: Router) { }

  onUpdateUser(id: string, name: string, email: string): void {
    const fileInput = this.userFile.nativeElement;
    const file = fileInput.files ? fileInput.files[0] : null;

    if (file) {
      this.userService.updateUser(id, name, email, file).subscribe({
        next: response => {
          console.log('User updated successfully:', response);
        },
        error: err => {
          console.error('Error updating user:', err);
        }
      });
    } else {
      console.error('File is required');
    }
    alert("User updated successfully!");
    this.router.navigateByUrl('display-user');
  }
  goToDisplay(){
    this.router.navigateByUrl('display-user');
  }
}
