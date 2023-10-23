function solution(str1, str2) {
    if (str1.includes(str2)) {
        return 1;
    } else if (str1 !== str2) {
        return 2;
    } else if (str2 !== str1) {
        return 2;
    }
}