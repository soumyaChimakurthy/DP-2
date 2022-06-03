//Time complexity O(n)
// Space complexity O(n)
let minCost = function () {
    const costs = [[]];
    // Edge case
    if (!costs || costs.length < 1) {
        return 0;
    }
    for (let i = 1; i < costs.length; i++) {
        costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
        costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
        costs[i][2] += Math.min(costs[i - 1][1], costs[i - 1][0]);
    }

    return Math.min(costs[costs.length - 1][0], Math.min(costs[costs.length - 1][1], costs[costs.length - 1][2]))
}
