import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = this.fb.group({
    from_name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  sendEmailLoading = false

  constructor(private title: Title, private fb: FormBuilder ,private toastr: ToastrService) {
    this.title.setTitle('Ehsan | Contact')

  }


  sendEmail() {
    this.contactForm.disable();
    this.sendEmailLoading = true;
    emailjs.init('5N0UTAoNz-z8zU8ww')
    emailjs.send('service_i7808mu', 'template_s0freph', this.contactForm.value).then(res => {
      this.sendEmailLoading = false;
      this.contactForm.enable();
      this.contactForm.reset();
      this.toastr.success('Message sent successfully.');


    }, error => {
      this.sendEmailLoading = false;

    });
  }

  get from_name() {
    return this.contactForm.controls.from_name
  }



}
