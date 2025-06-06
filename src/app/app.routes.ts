import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ApologyComponent } from './components/apology/apology.component';
import { IndexPageComponent } from './components/index-page/index-page.component';

export const routes: Routes = [
    {
        path: "",
        component: IndexPageComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "apology",
        component: ApologyComponent
    }
];
