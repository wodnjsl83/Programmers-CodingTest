const solution = sides => (sides[2] === sides[0] + sides[1] || sides[1] > sides[0] + sides[2]) ? 2 : 1;
