const products = require("../data-store/products");

class Warehouse {
  constructor(shelvingUnit) {
    // We could store multiple shelving units
    this.shelvingUnit = shelvingUnit;

    // We can map the max allocation sizes of each shelving unit
    this.maxAllocationQuantity = this.shelvingUnit.getMaxCellSize();
  }

  allocateCell(productId, quantity) {
    const productInfo = products[productId];
    if (!this.canAttemptAllocation(productInfo, quantity)) {
      return false;
    }

    return this.shelvingUnit.allocateCell(
      productId, productInfo, quantity
    );
  }

  // Do we have the product data?
  // Are we not requesting too much storage space?
  canAttemptAllocation(productInfo, quantity) {
    if (!productInfo) return false;
    if (quantity > this.maxAllocationQuantity) return false;

    return true;
  }
}

module.exports = Warehouse;