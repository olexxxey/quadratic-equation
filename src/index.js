module.exports = function solveEquation(equation) {
  const a = parseInt(equation.match(/^(.*)(?= \* x\^2)/g)[0]);
  const b = parseInt(equation.match(/(?<=x\^2 )(.*)(?= \* x)/g)[0].replace(/ /g, ''));
  const c = parseInt(equation.match(/(?<= x )(.*)$/g)[0].replace(/ /g, ''));
  const result = Math.round((-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a));
  const result2 = Math.round((-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a));

  return [result, result2].sort((a, b) => a-b);
}


