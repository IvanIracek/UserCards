import { Component, EventEmitter, Input, Output, inject, Inject } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<void>();

  private tasksService = inject(TasksService);
  formVariable: FormGroup

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { userId: string }
  )
   {
    this.formVariable = this.fb.group({
      title: [null],
      summary: [null],
      dueDate: []
    })
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.formVariable.value.title,
        summary: this.formVariable.value.summary,
        date: this.formVariable.value.dueDate,
      },
      this.data.userId
    );
    this.close.emit();
    this.dialogRef.close();
  }
}
