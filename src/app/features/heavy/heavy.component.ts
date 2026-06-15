import { Component } from '@angular/core';
import { HeavyContentComponent } from '../heavy-content/heavy-content.component';

@Component({
  selector: 'app-heavy',
  imports: [HeavyContentComponent],
  templateUrl: './heavy.component.html',
  styleUrl: './heavy.component.css'
})
export class HeavyComponent {

}
