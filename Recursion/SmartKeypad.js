function smartKeypad(str) {
    let keypad = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
    let output = '';
    let i = 0, n = str.length;
    let result = [];

    function _helper(str, output, i) {
        // Base Case
        if(i == n) {
            result.push(output)
            return;
        }

        // Rec Case
        let curr_digit = str[i] - '0';
        if(curr_digit == 0 || curr_digit == 1) {
            _helper(str, output, i+1)
        }

        // Keypad
        for(let j = 0; j < keypad[curr_digit].length; j++) {
            _helper(str, output + keypad[curr_digit][j], i+1)
        }
    }
    _helper(str, output, i);

    return result
}

console.log(smartKeypad('234'))