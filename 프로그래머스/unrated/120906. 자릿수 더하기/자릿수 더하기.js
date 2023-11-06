function solution(n) {
    let a = 0;
    let b = n.toString();
    for(let i = 0; i<b.length; i++){
        //parseInt도 가능
        a += Number(b[i])
    }
    return a;
}