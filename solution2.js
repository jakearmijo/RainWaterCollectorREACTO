function rainCollector(blocks, level = Math.max(...blocks)) {
  if (level < 1) return 0;
  let prevMatch;
  const atThisLevel = blocks.reduce((collected, block, idx) => {
    if (block < level) return collected;
    if (prevMatch) collected += idx - prevMatch - 1;
    prevMatch = idx;
    return collected;
  }, 0);
  return atThisLevel + rainCollector(blocks, level - 1);
}
