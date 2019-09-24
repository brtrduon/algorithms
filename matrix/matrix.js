//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.initRowsAndCols(str);
  }

  initRowsAndCols(str) {
    this.myRows = str.split("\n").map(e => {
      return e.split(" ").map(f => {
        return parseInt(f);
      })
    });

    this.myCols = [];
    for(let i = 0; i < this.myRows[0].length; ++i) {
      let col = [];
      for (let row of this.myRows) {
        col.push(row[i])
      }
      this.myCols.push(col);
    }
  }

  get rows() {
    return this.myRows;
  }

  get columns() {
    return this.myCols;
  }
}
