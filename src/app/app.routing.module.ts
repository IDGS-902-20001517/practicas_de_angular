
import{RouterModule, Routes} from "@angular/router";
import{NgModule} from "@angular/core";
import { CinepolisComponent } from "./utl/formularios/cinepolis/cinepolis/cinepolis.component";
import { Ditancia2pComponent } from "./utl/formularios/distancia/ditancia2p/ditancia2p.component";
import { ResistenciasComponent } from "./utl/formularios/resistencias/resistencias/resistencias.component";
const routes:Routes=[
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'Cine', component: CinepolisComponent},
    {path: 'Distancia', component:Ditancia2pComponent},
    {path: 'Resistencia', component: ResistenciasComponent}
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    }
)
export class AppRoutingModule{}