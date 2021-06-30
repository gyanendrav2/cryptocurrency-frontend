import { API } from "../util/api"
import { endpoints } from "../util/endpoints"

export const fetcher = (url) => API.get(url).then((res) => res.data)

export const priceChartAPI = async (filter: string) => {
  try {
    const result = await API.get(endpoints.exchangePriceSeriesXCMEUR + filter)
    return result
  } catch (err) {
    return err
  }
}
export const marketCapXCMAPIcall = async () => {
  try {
    const result = await API.get(endpoints.marketcapXCM)
    return result
  } catch (err) {
    return err
  }
}
export const xcmSupplyAPIcall = async () => {
  try {
    const result = await API.get(`${endpoints.marketInfoSymbol}XCM`)
    return result
  } catch (err) {
    return err
  }
}
export const priceVariationAPIcall = async () => {
  try {
    const result = await API.get(endpoints.exchangePricesXCMEUR)
    return result
  } catch (err) {
    return err
  }
}
export const vaultAmountAPIcall = async () => {
  try {
    const result = await API.get(endpoints.xcmLockedPlatform)
    return result
  } catch (err) {
    return err
  }
}

export const lockedWalletAPIcall = async () => {
  try {
    const result = await API.get(endpoints.xcmLockedWallet)
    return result
  } catch (err) {
    return err
  }
}
