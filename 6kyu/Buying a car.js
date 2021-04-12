// Let us begin with an example:

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. 
// He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month.
// Furthermore this percent of loss increases of 0.5 percent at the end of every two months. 
// Our man finds it difficult to make all these calculations.

// Can you help him?

// How many months will it take him to save up enough money to buy the car he wants, 
// and how much money will he have left over?

function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let counterOfmounth = 0;
  let inflation = 0.5;
  let remainder = 0;
  let sumOfAccumulation = 0;
  if (startPriceOld != startPriceNew) {
    while (startPriceOld +  sumOfAccumulation < startPriceNew) {
      counterOfmounth++;
      
      if (counterOfmounth % 2 == 0) {
        percentLossByMonth += inflation;
      }
      
      sumOfAccumulation += savingperMonth;
      
      startPriceNew -= (startPriceNew / 100) * percentLossByMonth;
      startPriceOld -= (startPriceOld / 100) * percentLossByMonth;
    }
    remainder = startPriceOld+sumOfAccumulation - startPriceNew;
  }
  return [counterOfmounth, Math.round(remainder)];
}
console.log(nbMonths(2000, 8000, 1000, 1.5));