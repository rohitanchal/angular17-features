import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}


@Component({
  selector: 'app-standalone-demo',
  imports: [],
  templateUrl: './standalone-demo.component.html',
  styleUrl: './standalone-demo.component.css'
})
export class StandaloneDemoComponent {

  isLoggedIn = true;

  users: User[] = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Jim', email: 'jim@example.com' },
  ];

  status = 'success';

}
