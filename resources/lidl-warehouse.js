const ShelvingUnit = require('../data-structures/shelving-unit');
const Cell = require('../data-structures/cell');
const Warehouse = require('../data-structures/warehouse');

const products = require('../data-store/products');

const createWarehouse = () => {
  const cellRows = Array.from({length: 10}).map(row => {
    return Array.from({length: 10}).map(column => {
      let supportedTypes = []
      if (column == 9) {
        supportedTypes.push("hazardous");
      }
      if (row >= 7 && column >= 7) {
        supportedTypes.push("cooling");
      }
  
      const cell = new Cell(10, supportedTypes);
      if (row === 1) {
        if (column === 1) {
          const key = "bread";
          cell.store(key, products[key], 3)
        } else if (column === 9) {
          const key = "bleach"
          cell.store(key, products[key], 8)
        }
      } else if (row === 3 && column === 3) {
        const key = "bamba"
        cell.store(key, products[key], 5)
      }

      return cell;
    });
  });
  
  const shelvingUnit = new ShelvingUnit(cellRows);

  return new Warehouse(shelvingUnit);
}


module.exports = createWarehouse;