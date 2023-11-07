function solution(n) {
    const a = n.toString().split('').map(Number);
    const b = a.sort((a,b) => b - a);
    const c = parseInt(b.join(''));
    return c;
}