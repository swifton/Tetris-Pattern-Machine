function sheet(cols, rows) {
  this.pattern = new Array(cols);
  this.pattern[0] = new Array(rows);
  reset(this.pattern);
}
