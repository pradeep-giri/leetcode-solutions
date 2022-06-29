function space20(str) {
    let rep = '%20';
    for(let i = 0; i < str.length; i++) {
        if(str[i] == ' ') {
            str = str.replace(str[i], rep);
        }
    }
    return str;
}

console.log(space20('hello world,  how are you?'))