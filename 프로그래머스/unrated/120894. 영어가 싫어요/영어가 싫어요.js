function solution(numbers) {

    let a  = ["zero", "one", "two", "three","four","five","six","seven","eight","nine"]
    
    a.forEach((str,idx) => {
        numbers = numbers.replaceAll(str,idx);
    })
    
    return Number(numbers);

}