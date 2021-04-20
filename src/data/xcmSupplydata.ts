import CapIcon from "../components/icons/capIcon"
import CirculateIcon from "../components/icons/circulateIcon"
import LockedIcon from "../components/icons/lockedIcon"
import MaximumIcon from "../components/icons/maximumIcon"
import VaultIcon from "../components/icons/vaultIcon"

export const xcmSupplyData = [
  { icon: MaximumIcon, name: "Maximum supply", price: "330.000.000", priceChange: "" },
  { icon: CirculateIcon, name: "Circulating supply", price: "279.743.569", priceChange: "" },
  { icon: CapIcon, name: "Market cap", price: "$19.717.342", priceChange: "1.99" },
]
export const xcmOtherStats = [
  { icon: LockedIcon, name: "Amount locked in tiers", price: "-", priceChange: "" },
  { icon: VaultIcon, name: "Amount vaulted", price: "-", priceChange: "" },
]
