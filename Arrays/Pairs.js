// // Time Complexity = O(n^2)
// function pairs(numArr, S) {
//     for (let i = 0; i < numArr.length - 1; i++) {
//         for (let j = i + 1; j < numArr.length; j++) {
//             if(numArr[i] + numArr[j] == S) {
//                 return [numArr[i], numArr[j]]
//             }
//         }
//     }
//     return null;
// }

/////////////////////////////////////////////////////////////
// // TIme Complexity - O(nlogn)

// function bst(arr, num) { // O(logn)
//     let start = 0;
//     let end = arr.length - 1;
//     while(start <= end) {
//         let mid = Math.floor((end + start) / 2);
//         if (num < arr[mid]) {
//             end = mid - 1;
//         }
//         else if (num > arr[mid]) {
//             start = mid + 1;
//         }
//         else {
//             return true;
//         }
//     }
//     return false;
// }

// function pairs(numArr, S) {
//     sortedArr = numArr.sort((a,b) => a-b); // O(nlogn)
//     for (let i = 0; i < sortedArr.length; i++) { // O(NlogN) -> (Loop O(N) + bst O(logN)
//         let num = S - sortedArr[i];
//         let arr = sortedArr.slice(i+1)
//         if(bst(arr, num)) {
//             return [sortedArr[i], num]
//         }
//     }
//     return null;
// }

/////////////////////////////////////////////////////////
// Time Complexity - O(N)

function pairs(numArr, Sum) {
    let s = new Set();

    for (let i = 0; i < numArr.length; i++) {
        let num = Sum - numArr[i];
        if(s.has(num)) {
            return [numArr[i], num];
        }
        s.add(numArr[i])
    }
    return null;
}

console.log(pairs([10,5,2,3,-6,9,11], 4))