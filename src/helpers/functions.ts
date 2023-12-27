export function formatPrice(price: number | string): string {
  if (typeof price !== 'string' && typeof price !== 'number') {
    return '--'
  }

  if (typeof price === 'string') {
    const check = Number.parseFloat(price)

    if (isNaN(check)) return '--'
  }

  const CURRENCY_FORMATTER = Intl.NumberFormat(`en-NG`, {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 2,
    notation: 'standard'
  })

  const amount =
    typeof price === 'string'
      ? CURRENCY_FORMATTER.format(Number.parseFloat(price))
      : CURRENCY_FORMATTER.format(price)

  return amount
}
