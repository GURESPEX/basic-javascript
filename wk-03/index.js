function generateDiamondPyramid(base_size) {
  let pyramid = [];
  if (base_size % 2 === 1) {
    // Create pyramid
    for (let i = 0; i < Math.ceil(base_size / 2); i++) {
      let blank_size = Math.floor(base_size / 2) - i;
      let block_size = Math.ceil(base_size / 2) - blank_size + i;
      let layer = [];
      let blanks = Array(blank_size).fill(" ");
      let blocks = Array(block_size).fill("*");
      layer = [...blanks, ...blocks];
      pyramid.push(layer);
    }
    // Display
    for (let layer of pyramid) {
      console.log(layer.join(""));
    }
  } else {
    console.log("Please enter odd number.");
  }
}

generateDiamondPyramid(9);
