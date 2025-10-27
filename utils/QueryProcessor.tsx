export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "S";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "shaikhae";
  }

  if (query.includes("largest")) {
    const matches = query.match(/-?\d+/g);
    if (!matches) return "";
    const numbers = matches.map(Number);
    const largest = Math.max(...numbers);
    return String(largest);
  }

  if (query.includes("plus")) {
    const nums = query.match(/\d+/g);
    if (!nums || nums.length < 2) return "";
    const result = nums.map(Number).reduce((a, b) => a + b, 0);
    return String(result);
  }

  if (query.includes("both a square and a cube")) {
  const matches = query.match(/\d+/g);
  if (!matches) return "";
  const numbers = matches.map(Number);
  const results = numbers.filter(n => {
    const root = Math.round(Math.pow(n, 1 / 6));
    return Math.pow(root, 6) === n;
  });
  return results.join(", ");
  }

  if (query.includes("times") || query.includes("multiplied by")) {
    const nums = query.match(/\d+/g);
    if (!nums || nums.length < 2) return "";
    return String(Number(nums[0]) * Number(nums[1]));
  }

  if (query.includes("minus")) {
    const nums = query.match(/\d+/g);
    if (!nums || nums.length < 2) return "";
    return String(Number(nums[0]) - Number(nums[1]));
  }

  if (query.includes("prime")) {
    const matches = query.match(/\d+/g);
    if (!matches) return "";
    const numbers = matches.map(Number);

    const primes = numbers.filter(n => {
      if (n <= 1) return false;            
      if (n === 2) return true;            
      if (n % 2 === 0) return false;      
      for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;   
      }  
      return true;
    });

    return primes.join(", ");
  }

  if (query.includes("to the power of")) {
    const nums = query.match(/\d+/g);
    if (!nums || nums.length < 2) return "";
    const base = Number(nums[0]);
    const exponent = Number(nums[1]);
    const result = Math.pow(base, exponent);
    return String(result);
  }

  if (query.includes("scrabble score")) {
    const wordMatch = query.match(/[a-zA-Z]+/g);
    if (!wordMatch) return "";
    const word = wordMatch[wordMatch.length - 1].toLowerCase();
    const scores: { [key: string]: number } = {
      a: 1, b: 3, c: 3, d: 2, e: 1,
      f: 4, g: 2, h: 4, i: 1, j: 8,
      k: 5, l: 1, m: 3, n: 1, o: 1,
      p: 3, q: 10, r: 1, s: 1, t: 1,
      u: 1, v: 4, w: 4, x: 8, y: 4,
      z: 10
    };

  
    let total = 0;
    for (const letter of word) {
      total += scores[letter] || 0;
    }

    return String(total);
  }

  return "";
}
