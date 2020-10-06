import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ng-solar";

  links = ["Configurator", "Offer"];
  activeLink = this.links[0];
}
