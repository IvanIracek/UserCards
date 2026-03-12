import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddingTask = false;

  constructor(
    private tasksService: TasksService,
    private dialog: MatDialog
  ) { }

  openDialog() {
    this.dialog.open(NewTaskComponent,{
      data: {
        userId:this.userId
      }
    });
  }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }


  onCloseAddTask() {
    this.isAddingTask = false;
  }
}
