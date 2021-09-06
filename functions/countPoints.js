var countPoints = function (points, queries) {
  const answer = Array(queries.length).fill(0);
  for (let i = 0; i < points.length; i++) {
    const x1 = points[i][0];
    const y1 = points[i][1];
    for (let j = 0; j < queries.length; j++) {
      const x2 = queries[j][0];
      const y2 = queries[j][1];
      const r = queries[j][2];
      let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
      if (distance ** 2 <= r ** 2) {
        answer[j]++;
      }
    }
  }
  return answer;
};
console.log(
  countPoints(
    [
      [1, 3],
      [3, 3],
      [5, 3],
      [2, 2],
    ],
    [
      [2, 3, 1],
      [4, 3, 1],
      [1, 1, 2],
    ]
  )
);
