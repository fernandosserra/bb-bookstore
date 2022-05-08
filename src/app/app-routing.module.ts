import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './shared/components/bookstore-app/bookstore-app.component';
import { ContatoComponent } from './shared/components/contato/contato.component';
import { SobreComponent } from './shared/components/sobre/sobre.component';

const routes: Routes = [
  {path: '', component: BookstoreAppComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'produtos', component: BookstoreAppComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
