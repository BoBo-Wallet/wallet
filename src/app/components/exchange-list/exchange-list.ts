import { Component, Input } from '@angular/core'
import { DashboardExchangeService } from '../../services/dashboard-exchange/dashboard-exchange.service'

@Component({
  selector: 'exchange-list',
  templateUrl: 'exchange-list.html',
  styleUrls: ['./exchange-list.scss']
})
export class ExchangeListComponent {
  constructor(private dashboardExchangeService: DashboardExchangeService) {}
  @Input()
  public exchangeList: Array<string> = ['changelly', 'transak']

  public displayRawData: boolean = false

  public async openPage(pageName: string): Promise<void> {
    this.dashboardExchangeService.goToPage(pageName)
  }
}
