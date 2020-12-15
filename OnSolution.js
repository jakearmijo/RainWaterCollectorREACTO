function rainCollector(blocks) {
  const rightMaxes = [];
  let rightMax = 0;
  for (let i = blocks.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, blocks[i]);
    rightMaxes[i] = rightMax;
  }

  const leftMaxes = [];
  let leftMax = 0;
  for (let i = 0; i < blocks.length; i++) {
    leftMax = Math.max(leftMax, blocks[i]);
    leftMaxes[i] = leftMax;
  }

  return blocks.reduce((waterCollected, block, idx) => {
    const leftMax = leftMaxes[idx];
    const rightMax = rightMaxes[idx];
    return waterCollected + Math.min(leftMax, rightMax) - block;
  }, 0);
}

function rainCollector(blocks) {
  const rightMaxes = [];
  let rightMax = 0;
  for (let i = blocks.length - 1; i >= 0; i--) {
    rightMax = Math.max(rightMax, blocks[i]);
    rightMaxes[i] = rightMax;
  }

  let waterCollected = 0;
  let leftMax = 0;
  for (let i = 0; i < blocks.length; i++) {
    leftMax = Math.max(leftMax, blocks[i]);
    const rightMax = rightMaxes[i];
    waterCollected += Math.min(leftMax, rightMax) - blocks[i];
  }

  return waterCollected;
}
