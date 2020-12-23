import { Component, Input } from '@angular/core'

@Component({
  selector: 'bifi-symbol',
  templateUrl: 'bifi-symbol.html'
})
export class BifiSymbolComponent {
  @Input()
  public readonly symbol: string

  public symbolURL: string = './assets/symbols/generic-coin.svg'

  constructor() {
    /* */
  }

  public ngAfterViewInit() {
    this.loadImage()
  }

  public ngOnChanges() {
    this.loadImage()
  }

  public loadImage() {
    const imageUrl = './assets/images/' + this.symbol.toLowerCase()
    const img = new Image()
    img.onload = () => {
      this.symbolURL = imageUrl
    }
    img.src = imageUrl
  }
}
