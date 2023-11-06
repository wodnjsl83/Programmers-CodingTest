function solution(my_string, n) {
    var answer = '';
    for(let i = 0; i < my_string.length; i++){
       const c = my_string[i].repeat(n);
       answer += c;
    }
    return answer;
}