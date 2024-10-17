import { NgModule } from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {Page1Component} from "./components/page1/page1.component";
import {of} from "rxjs";

const routes: Routes = [
  { path: 'app/orchestrator', component: Page1Component },
  {
    path: 'app/app1',
    loadChildren: () =>
      import('mfe1/Module').then((m) => m.Mfe1Module),
  },
  // {
  //   path: 'app/app2',
  //   loadChildren: () =>
  //     import('mfe2/Module').then((m) => m.Mfe2Module),
  // },
  { path: '', redirectTo: 'app/orchestrator', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.getRoutes();
  }

  // Имитация получения маршрутов
  getRoutes() {
    const mock = [{
      path: 'app/app2',
      loadChildren: () =>
        import('mfe2/Module').then((m) => m.Mfe2Module),
    }]



    of(mock).subscribe((r) => this.router.config.unshift(...r));
  }
}
