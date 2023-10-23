function solution(array,n){
    function vr(v){
    return n === v
    }
    const ar = array.filter(vr);
    const answer = ar.length;

return answer;

}



