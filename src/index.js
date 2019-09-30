module.exports = function zeros(expression) {
  let expressionM = expression.split('*');
  let counter = {
    2: 0,
    5: 0
  };
  let n = 0;

  expressionM.forEach(e => {
    if (e.indexOf("!!") >= 0) {
      let N = e.substring(0, e.indexOf("!!"));
      if ((e.substring(0, e.indexOf("!!")) % 2) != 1) {
        var i = 0;
      }
      else {
        var i = 1;
      }
      for (; i <= N; i = i + 2) {
        let k = i;
        while (k % 5 == 0 && k > 0) {
          counter[5] = counter[5] + 1;
          k = k / 5;
        }
        k = i;
        while (k % 2 == 0 && k > 0) {
          counter[2] = counter[2] + 1;
          k = k / 2;
        }
      }
    }
    else {
      let N = e.substring(0, e.indexOf("!"));
      for (let i = 0; i <= N; i++) {
        let k = i;
        while (k % 5 == 0 && k > 0) {
          counter[5] = counter[5] + 1;
          k = k / 5;
        }
        k = i;
        while (k % 2 == 0 && k > 0) {
          counter[2] = counter[2] + 1;
          k = k / 2;
        }
      }
    }
  });
  
  if (counter[5] >= counter[2]) {
    n = n + counter[2];
  }
  if (counter[5] < counter[2]) {
    n = n + counter[5];
  }

  return n;
}