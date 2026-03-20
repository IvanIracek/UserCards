import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'
import { MatDialogRef} from '@angular/material/dialog'

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrl: './new-user.component.css'
})
export class NewUserComponent {

  userForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NewUserComponent>
  ) { }

  @Output() user: any = new EventEmitter<string>

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.email, Validators.required]]
    })
  }

  onSubmit() {
    let newUser = {
      id: this.userForm.value.firstName + this.userForm.value.email,
      name: `${this.userForm.value.firstName} ${this.userForm.value.lastName}`,
      avatar: '',
      email: this.userForm.value.email
    }
    this.dialogRef.close(newUser)
  }
}