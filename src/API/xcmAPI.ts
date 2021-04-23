import axios from "axios"

export const priceChartAPI = async (filter: string) => {
  try {
    const result = await axios.get(
      `https://api.coinmetro.com/exchange/price-series/XCMEUR/${filter}`,
    )
    return result
  } catch (err) {
    return err
  }
}

export const circulatingSupplyAPIcall = async () => {
  try {
    const result = await axios.get("https://api.coinmetro.com/circulating-supply/XCM")
    return result
  } catch (err) {
    return err
  }
}
export const maxSupplyAPIcall = async () => {
  try {
    const result = await axios.get("https://api.coinmetro.com/total-supply/XCM")
    return result
  } catch (err) {
    return err
  }
}
export const xcmSupplyAPIcall = async () => {
  try {
    const result = await axios.get("https://api.coinmetro.com/marketInfo?symbol=XCM")
    return result
  } catch (err) {
    return err
  }
}
