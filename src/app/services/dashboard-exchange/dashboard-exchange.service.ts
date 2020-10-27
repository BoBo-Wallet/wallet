import { Injectable } from '@angular/core'
import { Router } from '@angular/router'
import { ErrorCategory, handleErrorSentry } from '../../services/sentry-error-handler/sentry-error-handler'
@Injectable({
  providedIn: 'root'
})
export class DashboardExchangeService {
  constructor(private readonly router: Router) {}

  public async goToPage(pageName: string): Promise<void> {
    console.log('openPage clicked!' + pageName)

    if (pageName == 'changelly') this.router.navigateByUrl('/tabs/exchange').catch(handleErrorSentry(ErrorCategory.NAVIGATION))
    if (pageName == 'transak') alert('Transak clicked!')
  }
}
