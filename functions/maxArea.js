// quadratic solution

function maxArea(height) {
  const length = height.length;
  const areas = new Array(length);

  for (let i = 0; i < length; i++) {
    // console.log(areas);
    let maxAreaAtIndex = 0;
    for (let j = 0; j < length; j++) {
      if (i !== j) {
        let biggerXCoordinate = 0;
        let smallerXCoordinate = 0;
        if (i > j) {
          biggerXCoordinate = i;
          smallerXCoordinate = j;
        } else {
          biggerXCoordinate = j;
          smallerXCoordinate = i;
        }
        const segmentLength = biggerXCoordinate - smallerXCoordinate;

        if (height[i] <= height[j]) {
          let area = height[i] * segmentLength;
          if (area > maxAreaAtIndex) {
            maxAreaAtIndex = area;
          }
        }
        if (height[j] < height[i]) {
          let area = height[j] * segmentLength;
          if (area > maxAreaAtIndex) {
            maxAreaAtIndex = area;
          }
        }
      }
      //   console.log(maxAreaAtIndex);
    }
    areas[i] = maxAreaAtIndex;
  }
  //   console.log(areas);
  max = Math.max(...areas);
  return max;
}

// //linear solution
// function maxArea2(height) {
//   const length = height.length;
//   const hashMap = new Array(length);

//   //create hashMap
//   for (let i = 0; i < length; i++) {
//     const map = {};
//     map.indexFromStart = i;
//     map.indexFromEnd = length - i;
//     map.height = height[i];
//     hashMap[i] = map;
//   }

//   for (let i = 0; i < length; i++) {
//     const item = height[i];

//     //this solution is overly complex

//   }
// }

//linear solution, 2 pointers
function maxArea2(height) {
  let left = 0,
    right = height.length - 1,
    max = 0;
  while (left < right) {
    max = Math.max(Math.min(height[left], height[right]) * (right - left), max);
    if (height[left] < height[right]) left++;
    else if (height[left] > height[right]) right--;
    else left++, right--;
  }
  return max;
}

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));
