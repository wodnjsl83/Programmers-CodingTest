function solution(n) {
        let a = 6
        for(let i = 0; i<n; i++){
            if(a%n !== 0){
                a += 6;
            }
        }
    return a/6;
}