const solution = s => s.split(' ').map(v=>[...v].map((x,i) => i%2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')).join(' ')


