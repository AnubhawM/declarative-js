// numbers: [number]
const numbers = [1, 2, 3]

// pricedItem: {price: number, taxable: boolean}
const pricedItem = { price: 10, taxable: false }

// pricedItems: [{price: number, taxable: boolean}]
const pricedItems = [pricedItem, pricedItem]

// calculateTotalImperative: (items: [{price: number, taxable: boolean}], tax: number) -> number
const calculateTotalImperative = (items, tax) => {
  let result = 0
  for (let item of items) {
    const { price, taxable } = item
    if (taxable) {
      result += price * Math.abs(tax)
    }
    result += price
  }
  return result
}

// prices: (items: [{price: number}]) -> [number]
const prices = items => {
  return items.map(ret => ret.price)
}

// sum: (numbers: [number]) -> number
const sum = numbers => {
  return numbers.reduce((a, b) => a + b, 0)
}

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
const selectTaxable = items => {
  return items.filter(items => items.taxable)
}

// applyTax: (prices: [number], tax: number) -> [number]
const applyTax = (prices, tax) => {
  return prices.map(a => a * tax)
}

// baseSum: (items: [number]) -> number
const baseSum = items => sum(prices(items))

// taxSum: (items: [{taxable: boolean}], tax: number) -> number
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax))

// calculateTotalDeclarative: (items: [number], tax: number) -> number
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, Math.abs(tax))

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
}
