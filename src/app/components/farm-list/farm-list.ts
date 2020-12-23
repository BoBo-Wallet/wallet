import { Component, Input } from '@angular/core'
import { DashboardExchangeService } from '../../services/dashboard-exchange/dashboard-exchange.service'

@Component({
  selector: 'farm-list',
  templateUrl: 'farm-list.html',
  styleUrls: ['./farm-list.scss']
})
export class FarmListComponent {
  @Input()
  public rewardList: Array<string> = ['bifi']

  public displayRawData: boolean = false
  constructor(private dashboardExchangeService: DashboardExchangeService) {}

  public async goToPage(pageName: string): Promise<void> {
    this.dashboardExchangeService.goToPage(pageName)
  }
}
