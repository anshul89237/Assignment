import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPersonComponent } from './list-person/list-person.component';
import { EditPersonComponent } from './edit-person/edit-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: ListPersonComponent },
  { path: 'edit/:id', component: EditPersonComponent },
  { path: 'delete/:id', component: DeletePersonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
