// // Time Complexity - O(N^2)
// function rain(arr) {
//     let water_capacity = 0;
//     for (let i = 1; i < arr.length - 1; i++) {
//         if(arr[i] < arr[i-1] || arr[i] < arr[i+1]) {
//             let j = i;
//             let k = i;
//             let prevMax = 0;
//             let forwMax = 0;
//             // Find pre max
//             while(j > 0) {
//                 if(arr[j-1] > prevMax) {
//                     prevMax = arr[j-1]
//                 }
//                 j--;
//             }
//             // Find forword Max
//             while(k < arr.length) {
//                 if(arr[k+1] > forwMax) {
//                     forwMax = arr[k+1]
//                 }
//                 k++;
//             }
//             // Cal the min of both max
//             water_capacity += Math.min(prevMax, forwMax) - arr[i];
//         }
//     }
//     return water_capacity
// }

// Time Complexity - O(3N)
function rain(arr) {
    let water_capacity = 0;
    let lArr = [];
    let rArr = [];
    let tempMax = 0;
    for (let i = 0; i < arr.length; i++) {
        if(tempMax < arr[i]) {
            tempMax = arr[i];
        }
        lArr.push(tempMax);
    }
    tempMax = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
        if(tempMax < arr[i]) {
            tempMax = arr[i];
        }
        rArr.unshift(tempMax);
    }
    for (let i = 0; i < arr.length; i++) {
        water_capacity += (Math.min(lArr[i], rArr[i]) - arr[i]);
    }
    return water_capacity
}

console.log(rain([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))