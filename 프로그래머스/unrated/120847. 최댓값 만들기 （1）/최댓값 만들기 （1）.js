function solution(numbers){
    let a = numbers[0];
    let b = numbers[1];
    for(let i = 0; i<numbers.length; i++){
        if(numbers[i] > a){
            b = a;
            a = numbers[i]
        }else if(numbers[i] > b && numbers[i] !== a){
            b = numbers[i]
        }
    }
    return a * b
}