import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CadastroComponent } from "./cadastro/cadastro.component";
import { ContaAppComponent } from "./conta.component";
import { LonginComponent } from "./login/longin.component";

const contaRouterConfig: Routes = [
    {
        path: '', component: ContaAppComponent,
        children: [
            { path: 'cadastro', component: CadastroComponent},
            { path: 'login', component: LonginComponent}
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(contaRouterConfig)
    ],
    exports: [RouterModule]
})

export class ContaRoutingModule{}