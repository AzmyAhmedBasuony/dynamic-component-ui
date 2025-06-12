import { ChangeDetectionStrategy, Component, inject, Input, input, OnInit, ViewEncapsulation } from '@angular/core';
import { IDFormStructure } from '../interfaces/i-d-form-structure';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-d-form',
  imports: [ReactiveFormsModule,],
  standalone: true,
  templateUrl: './d-form.component.html',
  styleUrl: './d-form.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DFormComponent implements OnInit {
 

formStructure=input.required<IDFormStructure[]>()
  fb = inject(FormBuilder);
  dynamicForm: FormGroup = this.fb.group({});
  ngOnInit(): void {

    if (this.formStructure().length > 0) {

      let formGroup: Record<string, any> = {};
      this.formStructure().forEach((control) => {
        let controlValidators: Validators[] = [];

        if (control.validations) {
          ``;
          control.validations.forEach(
            (validation: {
              name: string;
              validator: string;
              message: string;
            }) => {
              if (validation.validator === 'required')
                controlValidators.push(Validators.required);
              if (validation.validator === 'email')
                controlValidators.push(Validators.email);
              // Add more built-in validators as needed
            }
          );
        }

        formGroup[control.name] = [control.value || '', controlValidators];
      });

      this.dynamicForm = this.fb.group(formGroup);
    }
  }
  constructor() {
   
  }

  getErrorMessage(control: any) {
    const formControl = this.dynamicForm.get(control.name);

    if (!formControl) {
      return '';
    }

    for (let validation of control.validations) {
      if (formControl.hasError(validation.name)) {
        return validation.message;
      }
    }

    return '';
  }

  onSubmit() {
    if (!this.dynamicForm.valid) {
      this.dynamicForm.markAllAsTouched();
      return;
    }
    console.log(this.dynamicForm.value);
  }
}