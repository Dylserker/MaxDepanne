import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <h1>Max Dépannage à Gien</h1>
    <p><strong>Entretien et réparation de votre voiture à domicile, sans vous déplacer !</strong></p>
    <ul>
      <li>Intervention rapide et professionnelle</li>
      <li>Techniciens qualifiés</li>
      <li>Devis gratuit et détaillé avant chaque intervention</li>
      <li>Disponibilité 24h/24</li>
      <li>Zone d'intervention : Gien, Montargis, Sully-sur-Loire, Lorris, Amilly, et alentours</li>
    </ul>
    <p>Contactez-nous pour un service fiable, transparent et efficace !</p>
  `
})
export class HomeComponent {} 