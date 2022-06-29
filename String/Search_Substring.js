function stringSearch(bigStr, smallStr) {
    let output = [];
    let j = 0;

    for(let i = 0; i < bigStr.length; i++) {
        if(j == smallStr.length) {
            output.push(i - j);
            j = 0;
        }
        if(bigStr[i] == smallStr[j] && j < smallStr.length) {
            j++;
        }
    }

    if(output.length == 0) {
        return -1;
    }

    return output;
}

console.log(stringSearch("I liked the movie, acting in movie was great!", "liked"))