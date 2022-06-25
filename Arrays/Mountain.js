// Time complexity O(2N)

function highest_mountain(arr) {
    let highest_count = 0;
    let count = 0;
    for (let i = 1; i < arr.length - 1;) { 
        if(arr[i] > arr[i+1] && arr[i] > arr[i-1]) {
            count = 1
            let j = i;
            while(j >= 1 && arr[j] > arr[j-1]) {
                count++;
                j--;
            }

            while(i<=n-2 && arr[i] > arr[i+1]) {
                count++
                i++;
            }
            
            if(highest_count < count) {
                highest_count = count;
            }
        }
        else {
            i++
        }
    }
    return highest_count
}

console.log(highest_mountain([5, 6, 1, 2, 3, 4, 5, 4, 3, 2, 0, 1, 2, 3, -2, 4]))