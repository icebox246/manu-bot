const separator = " ;\n  "


function solveEquation(inp) {
  const nums = inp.trim().split(" ").map(e => parseFloat(e));
  const outputs= solveCoefficient(nums);
  let outputText = "Failed to solve!";
  if(outputs) outputText = "```\n{\n  " + outputs.join(separator) + " ; \n}\n```";
  return outputText;
}

function solveCoefficient(cs ) {
  if(cs.length === 2) {
    return [frac(-cs[1] , cs[0])];
  }
  if(cs.length === 3) {
    const [a,b,c] = cs;
    const delta = b * b - 4 * a *c; 
    if (delta < 0) return [""]
    let sqrtDelta = Math.trunc(Math.sqrt(delta));
    let rational = true;
    if(sqrtDelta *sqrtDelta !== delta) {
      rational = false;
    }
    
    if(rational) {
      const x1 = frac(-b - sqrtDelta, 2 * a);
      const x2 = frac(-b + sqrtDelta, 2 * a);
      return [x1,  x2];
    } else {
      const rt = sroot(delta);
      const x1 = "(" +(-b + "-" + rt) +  ")/" + (2 * a);
      const x2 = "(" + (-b + "+" + rt) + ")/" + (2 * a);
      return [x1, x2];
    }
  }
  const first = Math.abs(cs[0]); 
  const last = Math.abs(cs[cs.length -1]);
  for(let top = -last; top <= last; top ++) {
    for(let bott = 1; bott <= first; bott ++) {
      if(top === 0) continue;
      if(calculateValue(cs,top/bott) === 0) {
        const newCoefficients = hornerDivide(cs,top/bott);
        return [frac(top,bott), ...solveCoefficient(newCoefficients)];
      }
    }
  }
  return [""];
}

function calculateValue(cs , x ) {
  let acc =0;
  for(let c of cs) {
    acc += c;
    acc *= x;
  }
  return acc;
}

function hornerDivide(inp, x ) {
  const cs = inp.slice();
  for(let i = 1; i < cs.length; i++) {
    cs[i] += cs[i-1] * x;
  }
  cs.pop();
  return cs;
}

function gcd(a , b ) {
  while(a!== 0 && b !== 0) {
    if(b > a) [a,b]= [b,a];
    a%=b;
  }
  if(b > a) [a,b]= [b,a];
  return a;
}

function frac(top, bottom) {
  const negative = top < 0;
  if(negative) top *= -1;
  const d = gcd(top,bottom);
  top /= d;
  bottom /= d;
  if(negative) top *= -1;
  if ((top > 10000 || bottom > 10000) && bottom != 0) return top / bottom;
  return top + (bottom > 1 ? "/" + bottom : "");
}

function sroot(a) {
  let mi = 0;
  for(let i = 1; i * i < a; i++) {
    if(a % (i * i) === 0) {
      mi = i;
    }
  }
  return (mi > 1 ? mi : "") + "√" + (a / (mi * mi));
}

module.exports = {
  solveEquation
}