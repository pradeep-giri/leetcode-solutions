function lowerBound(arr, key) {
    let s = 0;
    let e = arr.length - 1;
    let ans = -1;

    while(s <= e) {
        let mid = Math.floor((s + e) / 2);
        if(arr[mid] == key) {
            ans = mid;
            e = mid - 1;
        }
        else if (arr[mid] > key) {
            e = mid - 1;
        }
        else {
            s = mid + 1;
        }
    }

    return ans;
}

function uperBound(arr, key) {
    let s = 0;
    let e = arr.length - 1;
    let ans = -1;

    while(s <= e) {
        let mid = Math.floor((s + e) / 2);
        if(arr[mid] == key) {
            ans = mid;
            s = mid + 1;
        }
        else if (arr[mid] > key) {
            e = mid - 1;
        }
        else {
            s = mid + 1;
        }
    }

    return ans;
}

const freqCount = (arr, key) => {
    let lower = lowerBound(arr, key);
    let upper = uperBound(arr, key);

    return upper - lower + 1;
}

console.log(freqCount([0, 1, 1, 2, 3, 3, 3, 3, 4, 5, 5, 5, 10], 3))