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
    // Grab integers (supports negatives too). Example: "68, 82, 39?"
    const matches = query.match(/-?\d+/g);
    if (!matches) return "";
    const numbers = matches.map(Number);
    const largest = Math.max(...numbers);
    return String(largest); // return type is string
  }

  if (query.includes("plus")) {
    const nums = query.match(/\d+/g);
    if (!nums || nums.length < 2) return "";
    const result = Number(nums[0]) + Number(nums[1]);
    return String(result);
  }

  return "";
}
