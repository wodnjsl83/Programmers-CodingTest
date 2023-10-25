function solution(num_list) {
    let answer = [];
    let a = 0;
    let b = 0;
    let c = num_list.length
    
    for(let i=0; i<c; i++){
        if(num_list[i]% 2 === 0){
            a++;
        } else b++;
        answer = [a,b];
    }
    return answer;
}