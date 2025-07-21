import { Component } from '@angular/core';

@Component({
  selector: 'app-zone',
  standalone: true,
  template: `
    <h1>Zone d'intervention</h1>
    <p>Nous intervenons rapidement à domicile ou sur votre lieu de travail dans les villes suivantes :</p>
    <ul>
      <li>Gien</li>
      <li>Montargis</li>
      <li>Viglain</li>
      <li>Sully-sur-Loire</li>
      <li>Lorris</li>
      <li>Amilly</li>
      <li>Ouzouer-sur-Loire</li>
      <li>Dampierre-en-Burly</li>
      <li>Poilly-lez-Gien</li>
      <li>Et les environs…</li>
    </ul>
    <p>Notre équipe se déplace avec tout l’équipement nécessaire pour vous dépanner où que vous soyez dans la région.</p>
  `
})
export class ZoneComponent {} 