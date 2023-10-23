function solution(n, k) {
    var answer = '';
    
    const a = n * 12000;   
    const b = k * 2000;
    const c = Math.floor(n/10) * 2000;
    answer = a + b - c;
    return answer;
}  
