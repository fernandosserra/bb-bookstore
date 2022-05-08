import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './shared/components/bookstore-app/bookstore-app.component';
import { SobreComponent } from './shared/components/sobre/sobre.component';
import { SuporteComponent } from './shared/suporte/suporte.component';

const routes: Routes = [
  {path: '', component: BookstoreAppComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'produtos', component: BookstoreAppComponent},
  {path: 'suporte', component: SuporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
