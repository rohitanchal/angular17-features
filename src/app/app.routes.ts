import { Routes } from '@angular/router';

export const routes: Routes = [


    {
        path: 'standalone',
        loadComponent: ()=> import('./features/standalone-demo/standalone-demo.component').then(c=> c.StandaloneDemoComponent)
    },

    {
        path: 'signal',
        loadComponent: ()=> import('./features/signal-demo/signal-demo.component').then(c=> c.SignalDemoComponent)
    },

    {
        path: 'heavy',
        loadComponent: ()=> import('./features/heavy/heavy.component').then(c=> c.HeavyComponent)
    },

    {
        path: 'user',
        loadComponent: ()=> import('./features/user-card/user-card.component').then(c=> c.UserCardComponent)
    },

    {
        path: 'reactive-form',
        loadComponent:()=> import('./features/forms-demo/forms-demo.component').then(c=> c.FormsDemoComponent)
    },



    {
        path:'',
        redirectTo:'standalone',
        pathMatch:'full'
    }
       



];
