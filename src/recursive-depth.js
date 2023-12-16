class DepthCalculator {
  calculateDepth(arr) {
    return Array.isArray(arr) ? arr.reduce((max, el) => Math.max(max, this.calculateDepth(el)), 0) + 1 : 0;
  }
}

module.exports = {
  DepthCalculator
};
