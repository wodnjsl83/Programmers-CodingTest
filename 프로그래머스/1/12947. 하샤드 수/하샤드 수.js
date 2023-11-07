function solution(x) {
    let a = x.toString().split('').map(Number);
    const b = a.reduce((acc,current) => acc + current, 0);
    const c = parseInt(a.join(''))
    if(c % b === 0){
        return true;
    }else if(c % b !== 0){
        return false;
    }
}