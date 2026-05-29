// Problem — Best Time to Buy and Sell Stock
// Given an array of prices where prices[i] is the price of a stock on day i,
// return the maximum profit you can achieve from a single buy and sell.
// If no profit is possible, return 0.
// You must buy before you sell.

// Example 1:
// Input:  prices = [7, 1, 5, 3, 6, 4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5.

// Example 2:
// Input:  prices = [7, 6, 4, 3, 1]
// Output: 0
// Explanation: Prices only decrease, no transaction is done, profit = 0.

// Example 3:
// Input:  prices = [1, 2]
// Output: 1

// Constraints:
// 1 <= prices.length <= 105
// 0 <= prices[i] <= 104

// Input: array of int

// Output: int

// Edge cases: [1], [1, 1], [3,2,1], by definition ints can't be negative.

// Approach / Pseudo code:
// naïve approach would be to check max diff for every int
// set the pointer at pos 0, find the highest peak after that. record pos of highest peak. find diff and compare with result
// if pointer moved after pos of highest peak, find the next highest
// if no peak found, break the loop

// function findCurrMax(prices: number[], leftPos: number): number {
//   // [7, 1, 5, 3, 6, 4]

//   let highest = 0;
//   // i = 1, i < 6, i = i + 1;
//   // i = leftPos + 1 can cause issues, design better approach
//   for (let i = leftPos + 1; i < prices.length; i++) {
//     highest = Math.max(highest, prices[i]);
//   }
//   return highest;
// }

// function maxProfit(prices: number[]): number {
//   if (prices.length === 1) return 0;
//   let result = 0;
//   // [7, 1, 5, 3, 6, 4]
//   let leftPos = 0; // 0
//   let currMaxPos = 0; // 0
//   // Mehedi: since we want to get max profit, we should check both min buy and max sell // this comment doesn't help. left pos is check for current day, maxPos is check for best price in future. i calcute profits for every day, moving maxSell if its already past.
//   // I assume some divide and concure method can be applied, so to find maxSell on the right and minBuy on the left and have a special condition to double check if maximum profit is already found.
//   // I could cash the result of left and right min max for specific piece of an array. do some dynamic programing
//   // Mehedi: you could explore but that would be an overkill most probably. I'd want you to think in a simpler way.

//   // while within the window
//   while (leftPos < prices.length) {
//     //(0 < 6)
//     // current maximum stock price has past
//     if (leftPos >= currMaxPos) {
//       // 0 === 0
//       // find when next maximum price will be in future
//       currMaxPos = findCurrMax(prices, leftPos); //findCurrMax(prices ,0) = 4.
//       // if the price is only declining
//       // break the loop
//       // Mehedi: should we break the loop or wait for next possibilities? // i want an early escape when no selling day available in future, like [3,2,1]. i hadn't tested it yet.
//       // This might not be the reliable way if there are no more valid sell days. i agree. i can return undefined instead of zero.
//       if (currMaxPos === 0) {
//         // no
//         break;
//       }
//     }
//     // calculate profit between today and max price in future
//     let diff = prices[currMaxPos] - prices[leftPos]; //
//     result = Math.max(result, diff);
//     leftPos++;
//   }
//   return result;
// }
//

export function maxProfit(prices: number[]): number {
  let profit = 0;
  let minBuy = prices[0];

  for (let i = 1; i < prices.length; i++) {
    /**
     * [Claude]
     *     minBuy = Math.min(minBuy, prices[i]);
     *     profit = Math.max(profit, prices[i] - minBuy);
     */
    const currPrice = prices[i];
    if (currPrice < minBuy) {
      minBuy = currPrice;
    } else {
      profit = Math.max(profit, currPrice - minBuy);
    }
  }

  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0
console.log(maxProfit([1, 2])); // 1
console.log(maxProfit([2, 5, 1, 3])); // 3
