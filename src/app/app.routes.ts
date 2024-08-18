import {RouterModule, Routes} from '@angular/router';
import {AddAppComponent} from "./add-user/add-user.component";
import {DisplayUsersComponent} from "./display-users/display-users.component";
import {UpdateUserComponent} from "./update-user/update-user.component";
import {DeleteUserComponent} from "./delete-user/delete-user.component";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'login', component: LoginComponent },          // Login route
  { path: 'display-user', component: DisplayUsersComponent }, // Display users
  { path: 'add-user', component:  AddAppComponent },         // Add user
  { path: 'update-user/:id', component: UpdateUserComponent }, // Update user with ID parameter
  { path: 'delete-user/:id', component: DeleteUserComponent }, // Delete user with ID parameter
  { path: '**', redirectTo: '/login' }, // Wildcard route for a 404 page or redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
