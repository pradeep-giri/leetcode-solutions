function rotatedSearch(arr, key) {
    let s = 0;
    let e = arr.length - 1;

    while(s <= e) {
        let mid = Math.floor((s + e) / 2);

        if(arr[mid] == key) {
            return mid;
        }

        if(arr[s] <= arr[mid]) {
            if (key >= arr[s] && key <= arr[mid]) {
                e = mid - 1;
            }
            else {
                s = mid + 1;
            }
        }
        else {
            if (key >= arr[mid] && key <= arr[e]) {
                s = mid + 1;
            }
            else {
                e = mid - 1;
            }
        }
    }
}

console.log(rotatedSearch([4, 5, 6, 7, 0, 1, 2, 3], 7));