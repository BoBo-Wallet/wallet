import { Injectable } from '@angular/core'
// import { SettingsKey, StorageProvider } from '../storage/storage'
// import { generateGUID } from '../../utils/utils'
import { HttpClient } from '@angular/common/http'
import { pools } from './constants'

//Need to make these Dyamic based on buil command
let apiKey: string = 'ea39e4a1-c97d-49fa-a8ca-464be0aad487'
let environment: string = 'STAGING'
let transakBgColor: string = 'f36a3d'
let url: string = 'https://api.beefy.finance'

export enum Status {
  ORDER_CREATED = 'ORDER_CREATED',
  WAITING = 'ORDER_FAILED',
  CONFORMING = 'ORDER_CREATED',
  EXCHANGING = 'EXCHANGING',
  SENDING = 'SENDING',
  FINISHED = 'FINISHED',
  FAILED = 'FAILED'
}

@Injectable({
  providedIn: 'root'
})
export class BeefFinanceProvider {
  public apiKey: string
  public environment: string
  public defaultCryptoCurrency: string
  public walletAddress: string
  public themeColor: string
  public fiatCurrency: string
  public fiatAmount: string
  public hostURL: string
  public partnerOrderId: string
  public partnerCustomerId: string
  public status: string
  public baseURL: string

  constructor(public http: HttpClient) {
    this.apiKey = apiKey
    this.environment = environment
    this.hostURL = window.location.origin
    this.themeColor = transakBgColor
    this.baseURL = url
    //Need to get this from user selection
    //When the feature is ready
    this.fiatCurrency = 'INR'
  }
  public async getApy(): Promise<any> {
    return await this.http.get<any>(this.baseURL + '/apy').toPromise()
  }
  public async getPools(): Promise<any> {
    let apys = await this.getApy()
    let updatedPools = handleApy(pools, apys)
    return updatedPools
  }
}
const handleApy = (pools, apys) => {
  let newPools = [...pools]
  return newPools.filter(pool => {
    pool.defaultApy = (apys[pool.id] * 100).toFixed(3)
    pool.daily = calcDaily(null, pool.defaultApy)
    pool.yeild1kyearly = 1000 + ((pool.defaultApy * 1000) / 100).toFixed(2)
    pool.yeild1kdaily = 1000 + (pool.daily * 1000) / 100
    // pool.defaultApy = (pool.defaultApy * 100).toFixed(3)
    return pool
  })
}

export const calcDaily = (apy, fallbackApy) => {
  if (!apy) {
    apy = fallbackApy
  }

  const g = fallbackApy / 365
  if (isNaN(g)) {
    return '-'
  }

  return `${g.toFixed(2)}`
}
