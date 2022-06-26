// // TIme Complexity - O(N^2)
// function maximum_subarray_sum(arr) {
//     let maximum_sum = 0;

//     for(let i = 0; i < arr.length; i++) {
//         let sum = arr[i];
//         let j = i+1;

//         while(j < arr.length) {
//             sum += arr[j];
//             maximum_sum = Math.max(maximum_sum, sum);
//             j++;
//         }
//     }

//     if(maximum_sum < 0) {
//         return 0;
//     }

//     return maximum_sum;
// }

// TIme Complexity - O(N)
function maximum_subarray_sum(arr) {
    let maximum_sum = -Infinity;
    let current_sum = 0;

    // Iterate through each number, make a decision
    for(let i = 0; i < arr.length; i++) {
        // Check if my current number is BIG or should i take my previous accumulated number
        current_sum = Math.max(arr[i], current_sum + arr[i])
        // Check the max sum
        maximum_sum = Math.max(maximum_sum, current_sum);
    }

    if (maximum_sum < 0) {
        return 0
    }

    return maximum_sum;
}

console.log(maximum_subarray_sum([-2, -3]))
// console.log(maximum_subarray_sum([-1, 2, 3, 4, -2, 6, -8, 3]))