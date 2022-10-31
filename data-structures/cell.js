class Cell {
  constructor(maxQuantity, supportedTypes) {
    this.supportedTypes = supportedTypes;
    this.maxQuantity = maxQuantity;

    // Store Data
    this.productId = "";
    this.quantity = 0;
  }

  store(productId, {storageType}, quantity) {
    if (!this.canStoreItemType(storageType)) return false;
    if (!this.canStoreProduct(productId)) return false;
    
    const potentialQuantity = this.quantity + quantity;
    if (potentialQuantity > this.maxQuantity) return false;

    this.productId = productId;
    this.quantity = potentialQuantity;

    return true;
  }

  canStoreProduct(productId) {
    if (!this.productId) return true;
    return this.productId == productId;
  }

  canStoreItemType(storageType) {
    return storageType.every(
      type => this.supportedTypes.includes(type)
    )
  }
}

module.exports = Cell;