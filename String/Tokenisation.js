function tokenisation(str, char) {
    if(str.length == 0) {
        return null;
    }
    let tokens = [];
    let word = '';
    for (let i = 0; i <= str.length; i++) {
        if(str[i] == char || i == str.length) {
            tokens.push(word);
            word = '';
        }
        else {
            word += str[i];
        }
    }
    return tokens
}

console.log(tokenisation('This is string', ' '));