import { Component } from '@angular/core'
// import { Router } from '@angular/router'
// import { AirGapMarketWallet, ICoinSubProtocol } from '@bobo-wallet/coin-lib'
// import { Observable, ReplaySubject } from 'rxjs'

// import { CryptoToFiatPipe } from '../../pipes/crypto-to-fiat/crypto-to-fiat.pipe'
import { BeefFinanceProvider } from '../../services/beef-finance/beef-finance.provider'
// import { ErrorCategory, handleErrorSentry } from '../../services/sentry-error-handler/sentry-error-handler'

// interface WalletGroup {
//   mainWallet: AirGapMarketWallet
//   subWallets: AirGapMarketWallet[]
// }

@Component({
  selector: 'page-beef-finance',
  templateUrl: 'beef-finance.html',
  styleUrls: ['./beef-finance.scss']
})
export class BeefFinancePage {
  public isVisible = 'hidden'

  public total: number = 0
  public changePercentage: number = 0

  public pools: any = []

  constructor(
    // private readonly router: Router,
    private readonly beefFinanceProvider: BeefFinanceProvider
  ) {
    // If a wallet gets added or removed, recalculate all values
    this.getPools()
  }

  private async getPools() {
    this.pools = await this.beefFinanceProvider.getPools()
    console.log(this.pools)
  }
}
