
let str = "212020";

let n = str.length;

// Initialize count
let count = 0;
let result = countWays(str, n)

function countDecoding(digits, n)
    {
        // console.log(digits , n);
        // console.log(count,"count");
        // base cases
        if (n == 0 || n == 1)
        {
            // console.log(n,"if n==0|| n==1");
            return 1;
        }else if ( digits[0] == '0'){
            return 0;
        }
        // else{
        //     count++;
        // }

        // If the last digit is not 0, then
        // last digit must add to
        // the number of words
        if (digits[n - 1] > '0')
        {
            // console.log(digits[n - 1],"digits[n - 1] > '0'");
            count = countDecoding(digits, n - 1);
        }
        // If the last two digits form a number
        // smaller than or equal to 26,
        // then consider last two digits and recur
        if ((digits[n - 2] == '1')
            || (digits[n - 2] == '2'
                && digits[n - 1] < '7'))
        {
            // console.log(digits[n - 2],digits[n - 1],"digits[n - 2]");
            count += countDecoding(digits, n - 2);
        }
        return count;  
    }
    // Given a digit sequence of length n,
    // returns count of possible decodings by
    // replacing 1 with A, 2 with B, ... 26 with Z
    function countWays(digits, n)
    {
        if (n == 0 || (n == 1 && digits[0] == '0'))
        {
            return 0;
        }
        return countDecoding(digits, n);
    }
    console.log(result);