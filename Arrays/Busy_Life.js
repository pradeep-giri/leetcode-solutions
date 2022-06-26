function busyLife(arr) {
    arr.sort((a, b) => a[1]-b[1]);
    let count = 1;
    let i = 0;

    for(let j = 1; j < arr.length; j++) {
        if(arr[i][1] <= arr[j][0]) {
            count++;
            i = j;
        }
    }

    return count;
}

console.log(busyLife([[7, 9], [0, 10], [4, 6], [8, 9], [4, 10], [5, 7]]))