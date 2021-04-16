const x = [5, 6, 10];

function sum(a, i = 0, res = 0) {
  if (i<a.length) {
    return sum(a, i+1, res + a[i])
  }
  return res;
}

console.log(sum(x))