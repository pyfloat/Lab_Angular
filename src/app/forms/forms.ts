import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {
  FormDataService,
  KnowledgePayload,
  RegistrationPayload
} from '../form-data.service';

type RegistrationFormModel = FormGroup<{
  name: FormControl<string>;
  tel: FormControl<string>;
  birth: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}>;

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forms.html',
  styleUrls: ['./forms.scss']
})
export class Forms {
  readonly directions = ['Linux', 'Сети', 'Безопасность', 'DevOps'];
  readonly phonePattern = '^(\\+7|8)\\d{10}$';
  readonly maxBirthDate = `${new Date().getFullYear() - 1}-12-31`;
  readonly registrationForm = this.createRegistrationForm();

  knowledgeModel = this.createKnowledgeModel();
  submittedRegistration: RegistrationPayload | null = null;
  submittedKnowledge: KnowledgePayload | null = null;

  constructor(private readonly formDataService: FormDataService) {}

  get nameControl(): FormControl<string> {
    return this.registrationForm.controls.name;
  }

  get telControl(): FormControl<string> {
    return this.registrationForm.controls.tel;
  }

  get birthControl(): FormControl<string> {
    return this.registrationForm.controls.birth;
  }

  get emailControl(): FormControl<string> {
    return this.registrationForm.controls.email;
  }

  get passwordControl(): FormControl<string> {
    return this.registrationForm.controls.password;
  }

  submitRegistration(): void {
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }

    this.submittedRegistration = this.formDataService.saveRegistration(
      this.registrationForm.getRawValue()
    );
    this.registrationForm.reset(this.createRegistrationValue());
  }

  submitKnowledge(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.submittedKnowledge = this.formDataService.saveKnowledge({
      ...this.knowledgeModel
    });

    const emptyModel = this.createKnowledgeModel();
    this.knowledgeModel = emptyModel;
    form.resetForm(emptyModel);
  }

  private createRegistrationForm(): RegistrationFormModel {
    return new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(60)
        ]
      }),
      tel: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(12),
          Validators.pattern(this.phonePattern)
        ]
      }),
      birth: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, this.birthDateValidator]
      }),
      email: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(80),
          Validators.email
        ]
      }),
      password: new FormControl('', {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)
        ]
      })
    });
  }

  private createRegistrationValue(): RegistrationPayload {
    return {
      name: '',
      tel: '',
      birth: '',
      email: '',
      password: ''
    };
  }

  private createKnowledgeModel(): KnowledgePayload {
    return {
      direction: '',
      durationMonths: null,
      goal: ''
    };
  }

  private birthDateValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) {
      return null;
    }

    const parsedDate = new Date(value);
    if (Number.isNaN(parsedDate.getTime())) {
      return { invalidDate: true };
    }

    const currentYear = new Date().getFullYear();
    if (parsedDate.getFullYear() >= currentYear) {
      return { currentYearNotAllowed: true };
    }

    return null;
  }
}
