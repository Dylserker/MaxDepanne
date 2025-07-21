import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-avis',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Avis clients</h1>
    <p>Votre avis compte ! Partagez votre expérience avec Max Dépannage :</p>
    <form (ngSubmit)="onSubmit()" #avisForm="ngForm">
      <label>Nom :<br><input name="nom" ngModel required></label><br><br>
      <label>Votre avis :<br><textarea name="avis" ngModel required></textarea></label><br><br>
      <button type="submit">Envoyer</button>
    </form>
    <h2>Ils nous ont fait confiance :</h2>
    <ul>
      <li><em>(Les avis clients s’afficheront ici prochainement…)</em></li>
    </ul>
  `
})
export class AvisComponent {
  onSubmit() {
    alert('Merci pour votre avis !');
  }
} 