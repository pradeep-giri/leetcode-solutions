function ladders(n) {
    if(n < 0) {
        return 0;
    }
    if(n == 0) {
        return 1;
    }

    let res = ladders(n-1) + ladders(n-2) + ladders(n-3);

    return res;
}

console.log(ladders(4));