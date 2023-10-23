function solution(code) {
  let result = '';
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (char === '1') {
      mode = 1 - mode;
    } else if ((mode === 0 && i % 2 === 0) || (mode === 1 && i % 2 === 1)) {
      result += char;
    }
  }

  return result || 'EMPTY';
}
