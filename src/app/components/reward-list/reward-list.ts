import { Component, Input } from '@angular/core'

@Component({
  selector: 'reward-list',
  templateUrl: 'reward-list.html',
  styleUrls: ['./reward-list.scss']
})
export class RewardListComponent {
  @Input()
  public rewardList: Array<string> = ['rewards', 'offers', 'refferals', 'shopping']

  public displayRawData: boolean = false
}
