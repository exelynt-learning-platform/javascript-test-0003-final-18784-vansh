for (let b = 1; b <= 6; b++) {
  let c = '';
  let d = b % 2 === 1 ? 1 : 0;
  
  for (let e = 0; e < b; e++) {
    c += ((d + e) % 2) + (e < b - 1 ? ' ' : '');
  }
  console.log(c);
}
