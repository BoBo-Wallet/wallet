import { Injectable, Inject } from '@angular/core'
import { Platform } from '@ionic/angular'
import { APP_INFO_PLUGIN } from 'src/app/capacitor-plugins/injection-tokens'
import { AppInfoPlugin } from 'src/app/capacitor-plugins/definitions'

@Injectable({
  providedIn: 'root'
})
export class AppInfoProvider {
  public appName = 'BoBo Wallet'
  public packageName = 'bobo.wallet.in'
  public versionNumber = '0.1-Beta'
  public versionCode: string | number = '*****'

  private isInitialized: boolean = false

  constructor(private readonly platform: Platform, @Inject(APP_INFO_PLUGIN) private readonly appInfo: AppInfoPlugin) {}

  public async updateVersions() {
    if (this.platform.is('hybrid')) {
      await this.platform.ready()
      const appInfo = await this.appInfo.get()

      this.appName = appInfo.appName
      this.packageName = appInfo.packageName
      this.versionNumber = appInfo.versionName
      this.versionCode = appInfo.versionCode
    }

    this.isInitialized = true
  }

  public async getAppName() {
    await this.init()

    return this.appName
  }

  public async getPackageName() {
    await this.init()

    return this.packageName
  }

  public async getVersionNumber() {
    await this.init()

    return this.versionNumber
  }

  public async getVersionCode() {
    await this.init()

    return this.versionCode
  }

  private async init(): Promise<void> {
    if (this.isInitialized) {
      return Promise.resolve()
    }

    return this.updateVersions()
  }
}
