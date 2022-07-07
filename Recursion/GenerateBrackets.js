function generateBracket(N) {
    let result = [];
    let open = 0;
    let close = 0;
    let output = '';

    function _helper(output, N, open, close, i) {
        // Base Case
        if(i == 2*N) {
            result.push(output)
            return
        }

        // Open
        if(open < N) {
            _helper(output + '(', N, open+1, close, i+1)
        }

        // Close
        if(close < open) {
            _helper(output + ')', N, open, close+1, i+1);
        }
        
    }

    _helper(output, N, open, close, 0);

    return result;
}

console.log(generateBracket(3))