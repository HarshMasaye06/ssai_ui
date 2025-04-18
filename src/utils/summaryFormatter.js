export function formatSummary(rawSummary) {
  return rawSummary
    .replace(/\\n/g, "\n") // turn literal \n into real line breaks
    .replace(/\n\*/g, "\n-") // turn * into markdown bullet
    .replace(/([0-9]{2}:[0-9]{2}:[0-9]{2}])/g, "**$1**"); // bold timestamps
}
