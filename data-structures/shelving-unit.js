class ShelvingUnit {
  constructor(cellRows) {
    this.cellRows = cellRows;
  }

  allocateCell(productId, productInfo, quantity) {
    for (const [rowIndex, row] of this.cellRows.entries()) {
      for (const [cellIndex, cell] of row.entries()) {
        const res = cell.store(productId, productInfo, quantity);
        if (res) {
          return `${rowIndex},${cellIndex}`;
        }
      }
    }

    return false;
  }

  getMaxCellSize() {
    return 10;
  }
}

module.exports = ShelvingUnit;