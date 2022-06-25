// Two pointer approcach
function triplet(arr, sum) {
    let result = [];
    sortedArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length - 2; i++) {
        let num = sum - sortedArr[i];
        let tempArr = sortedArr.slice(i+1)
        let start = 0;
        let end = tempArr.length - 1;
        while(start < end) {
            if((tempArr[start] + tempArr[end]) > num) {
                end--;
            }
            else if ((tempArr[start] + tempArr[end]) < num) {
                start++;
            }
            else {
                result.push([sortedArr[i], tempArr[start], tempArr[end]])
                start++;
                end--;
            }
        }
    }
    return result
}

console.log(triplet([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18))