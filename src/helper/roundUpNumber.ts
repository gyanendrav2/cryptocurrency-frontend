export const roundUpNumber = (num: number) => {
  const m = Number((Math.abs(num) * 100).toPrecision(6))
  return (Math.round(m) / 100) * Math.sign(num)
}
