import { Component, inject } from '@angular/core';
import { TasksService } from './tasks/tasks.service'
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { MatDialog } from '@angular/material/dialog'
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserService } from './user/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = this.userService.getAllUsers
  selectedUserId?: string;
  searchQuery?: string;

  constructor(
    private dialog: MatDialog,
    private userService: UserService) {
  }



  openDialog() {
    let dialogRef = this.dialog.open(NewUserComponent)

    dialogRef.afterClosed().subscribe(result => {
      this.userService.addUser(result)
    })
  }

  get selectedUser() {
    this.searchQuery.valueChange.subscribe(result => {

    })
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  