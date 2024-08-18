import { Component } from '@angular/core';
import {AddAppComponent} from "./add-user/add-user.component";
import {CommonModule, NgIf} from '@angular/common';
import {DisplayUsersComponent} from "./display-users/display-users.component";
import { HttpClientModule } from '@angular/common/http';
import {UpdateUserComponent} from "./update-user/update-user.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {RouterLink, RouterOutlet} from "@angular/router";



@Component({
  imports: [AddAppComponent, CommonModule, DisplayUsersComponent, HttpClientModule, NgIf, UpdateUserComponent, DeleteUserComponent, RouterOutlet, RouterLink],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'LunflowCertBack';
}
