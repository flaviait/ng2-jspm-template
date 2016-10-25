import {Component} from "@angular/core";

// Translation is not updated when language is changed in static module atm. : https://github.com/ocombe/ng2-translate/issues/232

@Component({
  selector: "lazy-test",
  template: `
    <p>{{ 'lazyTest.text' | translate }}</p>
  `
})
export class LazyTestComponent {
}