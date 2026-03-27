import { Component, inject } from '@angular/core';
import { TasksService } from './tasks/tasks.service'
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { MatDialog } from '@angular/material/dialog'
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserService } from './user/user.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = this.userService.getAllUsers
  selectedUserId?: string;
  searchQuery = new FormControl('')
  search: string | null = null

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
  ) {
      this.searchQuery.valueChanges.subscribe(data => this.search = data)
  }

  openDialog() {
    let dialogRef = this.dialog.open(NewUserComponent)

    dialogRef.afterClosed().subscribe(result => {
      this.userService.addUser(result)
    })
  }

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
