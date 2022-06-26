// // TIme Complexity - O(NlogN)
// function subsorted_array(arr) {
//     let copyArr = [...arr]; 
//     arr.sort((a,b) => a-b);
//     let i = 0;
//     let j = arr.length - 1;

//     while(i < arr.length && arr[i] == copyArr[i]) {
//         i++;
//     }

//     while(j >= 0 && arr[j] == copyArr[j]) {
//         j--;
//     }

//     if(i == arr.length) {
//         return [-1, -1];
//     }

//     return [i, j];
// }

// TIme Complexity - O(N)

function outOfOrder(arr, i) {
    let x = arr[i];
    if(i == 0) {
        return x > arr[1];
    }
    if(i == arr.length - 1) {
        return x < arr[i-1];
    }
    return x > arr[i+1] || x < arr[i-1]
}

function subsorted_array(arr) {
    let smallest = 100;
    let largest = 0;

    for (let i = 0; i < arr.length; i++) {
        let x = arr[i];
        if(outOfOrder(arr, i)) {
            smallest = Math.min(smallest, x);
            largest = Math.max(largest, x);
        }
    }

    if(smallest == arr[arr.length - 1]) {
        return [-1, -1];
    }

    let left = 0;
    while (smallest >= arr[left]) {
        left++;
    }

    let right = arr.length - 1;
    while (largest <= arr[right]) {
        right--;
    }

    return [left, right]
}

console.log(subsorted_array([1, 2, 3, 4, 5, 8, 6, 7, 9, 10, 11]))