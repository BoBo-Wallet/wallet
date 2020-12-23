import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { TransakProvider } from '../../services/transak/transak'
import { ErrorCategory, handleErrorSentry } from '../../services/sentry-error-handler/sentry-error-handler'
@Injectable({
  providedIn: 'root'
})
export class DashboardExchangeService {
  constructor(private readonly router: Router, public transakProvider: TransakProvider) {}

  public async goToPage(pageName: string): Promise<void> {
    if (pageName == 'changelly') this.router.navigateByUrl('/tabs/exchange').catch(handleErrorSentry(ErrorCategory.NAVIGATION))
    if (pageName == 'bifi') this.router.navigateByUrl('/tabs/defi').catch(handleErrorSentry(ErrorCategory.NAVIGATION))
    if (pageName == 'transak') {
      this.transakProvider.createOrder('ETH', '')
    }
  }
}
