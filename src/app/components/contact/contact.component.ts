import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {}

  sendEmail(): void {
    emailjs
      .send(
        'service_o4gshd5',
        'template_rhen1m4',
        {
          from_name: this.emailForm.controls.name.value,
          message: this.emailForm.controls.message.value,
          email: this.emailForm.controls.email.value,
        },
        'Jo6qgjhm9U94Oad5V'
      )
      .then(() => {
        this.matSnackBar.open('El correo ha sido enviado', 'Cerrar');
      })
      .catch(() => {
        this.matSnackBar.open('El correo no ha podido ser enviado', 'Cerrar');
      });
  }
}
