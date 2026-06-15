import { Component } from '@angular/core';
import { signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  imports: [],
  templateUrl: './signal-demo.component.html',
  styleUrl: './signal-demo.component.css'
})
export class SignalDemoComponent {

  count = signal(0);


  doubleCount = computed(() => {
    return this.count() * 2;
  });


  constructor() { 
    effect(() => {
      console.log(this.count());
    });
  }

  increment() {
    this.count.update(
      value => value+1
    )
  }
























}