function solution(numbers) {
    var answer = [];
    for(let a = 0; a <= numbers.length; a++){
        for(let b = a+1; b <= numbers.length; b++){
            answer.push(numbers[a]+ numbers[b])
        }
    }
    return answer.filter((v,i) => answer.indexOf(v) === i).sort((a,b) => a-b)
}
