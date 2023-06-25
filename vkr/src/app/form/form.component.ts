import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUsers} from "../model/userData";
import {MessageService} from "primeng/api";
import {FormService} from "../service/form.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  name!: string;
  surname!: string;
  email!: string;
  phone!: string;
  message!: string;

  constructor(private messageService: MessageService, private formService: FormService) {
  }

  send() {
    const userData: IUsers = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      phone: this.phone,
      message: this.message,
    }
    this.formService.sendUserData(userData).subscribe()

  }
}
