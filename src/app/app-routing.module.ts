import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Configuring routers and redirecting to widget module
if any unknown URL or path found can have a  404 page if required */
const routes: Routes = [
  { path: '', redirectTo: 'widget', pathMatch: 'full' },
  {
    path: 'widget',
    loadChildren: () =>
      import('./widget/widget.module').then(m => m.WidgetModule),
  },
  { path: '**', redirectTo: 'widget' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
