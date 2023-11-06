function solution(n) {
    let a = 0;
    let b = n.toString();
    for(let i = 0; i<b.length; i++){
        a += parseInt(b[i])
    }
    return a;
}