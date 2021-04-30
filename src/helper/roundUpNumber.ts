export const roundUpNumber = (num: number) => {
  const m = Number((Math.abs(num) * 100).toPrecision(13))
  return (Math.round(m) / 100) * Math.sign(num)
}
