import { Component, Input } from '@angular/core'

@Component({
  selector: 'bifi-item',
  templateUrl: 'bifi-item.html',
  styleUrls: ['./bifi-item.scss']
})
export class BifiItemComponent {
  @Input()
  public pool: any

  @Input()
  public radioList: boolean = false
}
