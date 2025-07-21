import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  template: `
    <h1>Nos Services</h1>
    <ul>
      <li><strong>Entretien moteur</strong> : Diagnostic, réparation, surchauffe, casse moteur…</li>
      <li><strong>Transmission</strong> : Intervention sur boîte de vitesses et système de transmission, bruits suspects, décalages…</li>
      <li><strong>Freinage</strong> : Remplacement des plaquettes et disques, vérification complète du système pour votre sécurité</li>
      <li><strong>Dépannage urgent</strong> : Intervention rapide sur place pour tout type de panne (mécanique, électrique, batterie…)</li>
      <li><strong>Devis gratuit</strong> : Transparence totale, aucun frais caché</li>
    </ul>
    <p>Notre camion atelier est équipé pour toutes les interventions à domicile ou sur votre lieu de travail.</p>
  `
})
export class ServicesComponent {} 