// TIme Complexity - O(N)

function longest_band(arr) {
    let largest = 0;
    let set = new Set(arr);
    for (let i = 0; i < arr.length; i++) {
        if(!set.has(arr[i] - 1)) {
            let count = 1;
            let next_no = arr[i] + 1;

            while(set.has(next_no)) {
                next_no++;
                count++;
            }

            if(largest < count) {
                largest = count;
            }
        }
    }

    return largest;
}

console.log(longest_band([1, 9, 3, 0, 18, 5, 2, 4, 10, 7, 12, 6]))