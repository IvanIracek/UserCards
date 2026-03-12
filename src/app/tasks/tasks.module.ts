import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TasksComponent } from './tasks.component';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { CardComponent } from '../shared/card/card.component';

@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, FormsModule, CardComponent]
})
export class TasksModule {}