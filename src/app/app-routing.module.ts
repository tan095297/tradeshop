import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewProductComponent } from './components/pages/new-product/new-product.component';
import { ProductComponent } from './components/pages/product/product.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';


const routes: Routes = [
    // { path: "", component: MainComponent },
     { path: "product",  component: ProductComponent },
    // { path: "product/detail/:id", component: ProductDetailComponent },
    { path: "product/new", component: NewProductComponent },
    // { path: "product/edit/:id", component: EditProductComponent }
    {path : "login",component:LoginComponent},
    {path : "register",component:RegisterComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
