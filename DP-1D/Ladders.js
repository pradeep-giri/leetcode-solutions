// // Top-Down - O(N*K)
// function ladders(N, K) {
//     let arr = [];

//     function _helper(N, K, arr) {
//         // Base Case
//         if(N == 0) {
//             return 1;
//         }
//         if(N < 0) {
//             return 0;
//         }
//         // Rec Case
//         if(arr[N]) {
//             return arr[N]
//         }
//         let ans = 0;
//         for (let i = 1; i <= K; i++) {
//             ans += _helper(N-i, K, arr)
//         }
        
//         return arr[N] = ans
//     }
//     return _helper(N, K, arr)
// }

// Bottom Up - 
function ladders(N, K) {
    let arr = [];
    
    arr[0] = 1;

    for (let i = 1; i <= N; i++) {
        let ans = 0;
        for (let jump = 1; jump <= K; jump++) {
            if(i-jump >= 0) {
                ans += arr[i-jump]
            }
        }
        arr[i] = ans
    }

    return arr[N]
}

console.log(ladders(4, 3))