import { Component } from '@angular/core'

@Component({
  selector: 'app-about',
  template: `
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <ui-card>
          <ui-card-header>
            <i class="icon-control-play"></i>
            &nbsp; About
          </ui-card-header>
          <ui-card-content>Colmena <%= this.changeCase.pascal(moduleName) %> About</ui-card-content>
        </ui-card>
      </div>
    </div>
  `,
})
export class AboutComponent {}
