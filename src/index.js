// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let result = {};

        if (currency <= 0) {
            return result;
        }
        if (currency >= 10000) {
            return {error: "You are rich, my friend! We don't have so much coins for exchange"};
        } else {
            let half = Math.floor(currency / 50);
            currency -= 50 * half;
            let quarter = Math.floor(currency / 25);
            currency -= 25 * quarter;
            let dime = Math.floor(currency / 10);
            currency -= 10 * dime;
            let nickel = Math.floor(currency / 5); 
            currency -= 5 * nickel;
            let penny = currency;
            
            if (half > 0) {
                result.H = half;
            }
            if (quarter > 0) {
                result.Q = quarter;
            }
            if (dime > 0) {
                result.D = dime;
            }
            if (nickel > 0) {
                result.N = nickel;
            }
            if (penny > 0) {
                result.P = penny;
            }

            return result;
            }
}
