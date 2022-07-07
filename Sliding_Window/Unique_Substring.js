function uniqueSubstring(str) {
    let window_main = '';
    let window_local = '';
    let map = new Map();

    let i = 0, j = 0;

    while(j < str.length) {
        if(!map.has(str[j])) {
            map.set(str[j], j);
            window_local += str[j];
            j++;
        }
        else {
            let idx = map.get(str[j])
            i = idx+1;
            window_local = '';
        }
 
        if(window_local.length > window_main.length) {
            window_main = window_local;
        }
    }
     
    return window_main
}

console.log(uniqueSubstring("pradeepgiri"))