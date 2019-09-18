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
// const prices = TODO

// sum: (numbers: [number]) -> number
// const sum = TODO

// selectTaxable: (items: [{taxable: boolean}]) -> [{taxable: boolean}]
// const selectTaxable = TODO

// applyTax: (prices: [number], tax: number) -> [number]
// const applyTax = TODO

// baseSum: TODO
const baseSum = items => sum(prices(items))

// taxSum: TODO
const taxSum = (items, tax) => sum(applyTax(prices(selectTaxable(items)), tax))

// calculateTotalDeclarative: TODO
const calculateTotalDeclarative = (items, tax) =>
  baseSum(items) + taxSum(items, tax)

export default {
  prices,
  sum,
  selectTaxable,
  applyTax,
  baseSum,
  taxSum,
  calculateTotalDeclarative
}
