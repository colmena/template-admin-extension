import { Component } from '@angular/core'

import { <%= this.changeCase.pascal(moduleName) %>Service } from '../<%= this.changeCase.pathCase(moduleName) %>.service'

@Component({
  selector: 'app-items',
  template: `
    <ui-table [config]="config" [items]="items" (action)="handleAction($event)"></ui-table>
  `,
})
export class ItemsComponent {

  public config = {
    class: 'table table-bordered table-stripes',
    columns: [
      { label: 'Name', field: 'name' },
      { label: 'Description', field: 'description' },
    ],
    rowButtons: [
      { typeName: 'log', label: 'Log'}
    ]
  }
  public items = []

  constructor(private service: <%= this.changeCase.pascal(moduleName) %>Service) {}

  ngOnInit() {
    this.service.getItems()
      .subscribe(res => this.items = res)
  }

  handleAction($event) {
    switch ($event.type) {
      case 'log':
        return console.log($event.payload)
      default:
        console.log('Unknown action: ', $event)
    }
  }
}
