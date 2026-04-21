import { Injectable } from '@angular/core';
import { LogService } from './log.service';

export interface RegistrationPayload {
  name: string;
  tel: string;
  birth: string;
  email: string;
  password: string;
}

export interface KnowledgePayload {
  direction: string;
  durationMonths: number | null;
  goal: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  constructor(private readonly logService: LogService) {}

  saveRegistration(payload: RegistrationPayload): RegistrationPayload {
    this.logService.log(`Отправлена регистрация для ${payload.email}`);
    return { ...payload };
  }

  saveKnowledge(payload: KnowledgePayload): KnowledgePayload {
    this.logService.log(`Отправлена форма "Знания" по направлению "${payload.direction}"`);
    return { ...payload };
  }
}
