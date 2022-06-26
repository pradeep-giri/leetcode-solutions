// Without using Division
// Time Complexity - O(N)
function productArray(arr) {
    let leftProductArr = [];
    let rightProductArr = [];
    let output = [];

    let productleft = 1;
    let productRight = 1;

    for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
        productleft *= arr[i];
        productRight *= arr[j];
        leftProductArr.push(productleft);
        rightProductArr.unshift(productRight);
    }

    for (let i = 0; i < arr.length; i++) {
        if(i == 0) {
            output.push(rightProductArr[0]);
        }
        else if(i == arr.length - 1) {
            output.push(leftProductArr[i-1])
        }
        else {
            output.push(leftProductArr[i-1] * rightProductArr[i+1])
        }
    }

    return output
}

console.log(productArray([1, 2, 3, 4, 5]))