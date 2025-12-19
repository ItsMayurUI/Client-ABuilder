import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formModel = {
    name: '',
    phone: '',
    email: '',
    type: '',
    message: ''
  };

  onSubmit() {
  if (!this.formModel.name || !this.formModel.phone) {
    alert('Please fill your name and phone.');
    return;
  }

  const phoneNumber = '918830723292'; // 🔴 builder WhatsApp number (no +)

  const message =
    `New enquiry from website:\n\n` +
    `👤 Name: ${this.formModel.name}\n` +
    `📞 Phone: ${this.formModel.phone}\n` +
    `📧 Email: ${this.formModel.email || 'N/A'}\n` +
    `🏠 Looking for: ${this.formModel.type || 'Not specified'}\n\n` +
    `📝 Message:\n${this.formModel.message || 'No message'}`;

  const whatsappUrl =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // ✅ OPEN WHATSAPP
  window.open(whatsappUrl, '_blank');

  // ✅ RESET FORM
  this.formModel = {
    name: '',
    phone: '',
    email: '',
    type: '',
    message: ''
  };
}

}
