import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NetworkawarePreloadingStrategy } from './strategies/networkaware-preloading-strategy';
import { OnDemandPreloadingStrategy } from './strategies/ondemand-preloading-strategy';
import { OptInPreloadingStrategy } from './strategies/opt-in-preloading-strategy';

const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    data: {
      preload: true,
    },
  },
  {
    path: 'contacts',
    loadChildren: () =>
      import('./modules/contacts/contacts.module').then(
        (m) => m.ContactsModule
      ),
    data: {
      preload: false,
    },
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./modules/settings/settings.module').then(
        (m) => m.SettingsModule
      ),
    data: {
      preload: true,
    },
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES,
      // ESTRATEGIAS DE PRECARGA DE
      // PRECARGAR TODAS = NO LAZY LOADING
      // {
      //   preloadingStrategy: PreloadAllModules,
      // }
      // PRECARGA OPCIONAL
      // {
      //   preloadingStrategy: OptInPreloadingStrategy,
      // }
      // PRECARGA POR CONNECTIVIDAD
      // {
      //   preloadingStrategy: NetworkawarePreloadingStrategy,
      // }
      // PRECARGA BAJO DEMANDA DE UN EVENTO EN LA APP
      {
        preloadingStrategy: OnDemandPreloadingStrategy,
      }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
