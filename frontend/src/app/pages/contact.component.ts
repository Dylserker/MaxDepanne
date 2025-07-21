import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Contact</h1>
    <p>Appelez-nous au <a href='tel:+33616072536'>06 16 07 25 36</a> ou utilisez le formulaire ci-dessous :</p>
    <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
      <label>Nom :<br><input name="nom" ngModel required></label><br><br>
      <label>Email :<br><input name="email" type="email" ngModel required></label><br><br>
      <label>Message :<br><textarea name="message" ngModel required></textarea></label><br><br>
      <button type="submit">Envoyer</button>
    </form>
    <div style="margin-top:1em">
      <a href="https://www.facebook.com" target="_blank">Facebook</a> |
      <a href="https://www.instagram.com" target="_blank">Instagram</a>
    </div>
  `
})
export class ContactComponent {
  onSubmit() {
    alert('Message envoyé !');
  }
} 