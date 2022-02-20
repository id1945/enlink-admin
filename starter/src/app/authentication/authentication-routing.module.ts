import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Login1Component } from './login-1/login-1.component';
import { Login2Component } from './login-2/login-2.component';
import { Login3Component } from './login-3/login-3.component';
import { SignUp1Component } from './sign-up-1/sign-up-1.component';
import { SignUp2Component } from './sign-up-2/sign-up-2.component';
import { SignUp3Component } from './sign-up-3/sign-up-3.component';
import { Error1Component } from './error-1/error-1.component';
import { Error2Component } from './error-2/error-2.component';

const routes: Routes = [
    {
        path: 'login-1',
        component: Login1Component,
        data: {
            title: 'Login 1'
        }
    },
    {
        path: 'login-2',
        component: Login2Component,
        data: {
            title: 'Login 2'
        }
    },
    {
        path: 'login-3',
        component: Login3Component,
        data: {
            title: 'Login 3'
        }
    },
    {
        path: 'sign-up-1',
        component: SignUp1Component,
        data: {
            title: 'Sign Up 1'
        }
    },
    {
        path: 'sign-up-2',
        component: SignUp2Component,
        data: {
            title: 'Sign Up 2'
        }
    },
    {
        path: 'sign-up-3',
        component: SignUp3Component,
        data: {
            title: 'Sign Up 2'
        }
    },
    {
        path: 'error-1',
        component: Error1Component,
        data: {
            title: 'Error 1'
        }
    },
    {
        path: 'error-2',
        component: Error2Component,
        data: {
            title: 'Error 2'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
