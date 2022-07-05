function housing(arr, sum) {
    let result = [];
    let i = 0;
    let calSum = arr[i];

    for (let j = 0; j < arr.length;) {
        if(calSum < sum) {
            j++;
            calSum += arr[j];
        }
        else if(calSum > sum) {
            i++;
            calSum -= arr[i-1];
        }
        else {
            result.push([i, j]);
            i++;
            j++;
            calSum += arr[j];
            calSum -= arr[i-1];
        }
    }

    return result;
}

console.log(housing([1, 3, 2, 1, 4, 1, 3, 2, 1, 1, 2], 8))