import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfiguratorComponent } from "./components/configurator/configurator.component";
import { OfferComponent } from "./components/offer/offer.component";

const routes: Routes = [
  {
    path: "configurator",
    component: ConfiguratorComponent,
  },
  {
    path: "offer",
    component: OfferComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
