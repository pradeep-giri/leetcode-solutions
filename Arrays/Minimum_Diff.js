// Time Complexity - O(NlogN)
let min_diff = (arr1, arr2) => {
    arr1.sort((a, b) => a-b);
    arr2.sort((a, b) => a-b);

    let min = Number.MAX_VALUE;
    let i = 0; j = 0;
    let x = arr1[0];
    let y = arr2[0];

    while(i < arr1.length && j < arr2.length) {
        let diff = Math.abs(arr1[i] - arr2[j]);
        if(min > diff) {
            min = diff;
            x = arr1[i];
            y = arr2[j];
        }
        if(arr1[i] < arr2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return [x, y];
}

console.log(min_diff([23, 5, 10, 17, 30], [26, 134, 135, 14, 19]))