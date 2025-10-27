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
    const result = Number(nums[0]) + Number(nums[1]);
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
      if (n < 2) return false;
      for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
      }
    return true;
  });

  return primes.join(", ");
}

  return "";
}
