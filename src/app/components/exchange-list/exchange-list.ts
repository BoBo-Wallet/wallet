import { Component, Input } from '@angular/core'

@Component({
  selector: 'exchange-list',
  templateUrl: 'exchange-list.html',
  styleUrls: ['./exchange-list.scss']
})
export class ExchangeListComponent {
  @Input()
  public exchangeList: Array<string> = ['changelly', 'transak']

  public displayRawData: boolean = false
}
