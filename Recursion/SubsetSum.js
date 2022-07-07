function subsetSum(arr, X) {
    let n = arr.length;
    function _helper(arr, i, X) {
        if(i == n) {
            if(X == 0) {
                return 1;
            }
            return 0;
        }
    
        let inc = _helper(arr, i+1, X - arr[i]);
        let exc = _helper(arr, i+1, X);

        return inc + exc
    }

    return _helper(arr, 0, X);
}

console.log(subsetSum([1, 2, 3, 4, 5], 10))