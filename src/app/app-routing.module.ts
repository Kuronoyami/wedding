import { IsiundanganPage } from './isiundangan/isiundangan.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  {
    path: 'isiundangan',
    loadChildren: () =>
      import('./isiundangan/isiundangan.module').then(
        (m) => m.IsiundanganPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomePage },
      { path: 'isiundangan', component: IsiundanganPage },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
