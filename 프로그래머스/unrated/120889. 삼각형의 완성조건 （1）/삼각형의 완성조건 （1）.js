function solution(sides) {
    const a = sides[2];
    const b = sides[0] + sides[1];
    const c = sides[1];
    const d = sides[0] + sides[2];
    
    if (a === b){
        return 2;
    } else if (c > d){
        return 2;
    } else if (a < b){
        return 1;
    }
}