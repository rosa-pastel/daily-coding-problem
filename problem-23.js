/*
Problem:
You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

For example, given the following board:

[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.
*/
console.log(
  walkOnBoard(
    [
      [0, 0, 0, 0],
      [1, 1, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [3, 0],
    [0, 0]
  )
); // 7

function steps(board, start) {
  let m = start[0];
  let n = start[1];
  let allMoves = [
    [m - 1, n],
    [m, n - 1],
    [m + 1, n],
    [m, n + 1],
  ];
  let steps = allMoves.filter((move) => {
    m = move[0];
    n = move[1];
    return (
      m >= 0 &&
      n >= 0 &&
      board.length > m &&
      board[m].length > n &&
      board[m][n] === 0
    );
  });
  return steps;
}

function walkOnBoard(board, start, end) {
  const queue = [{ coord: start, stepCount: 0 }];
  let step;
  let stepCount;
  while (queue.length > 0) {
    step = queue[0].coord;
    stepCount = queue[0].stepCount;
    if (step[0] === end[0] && step[1] === end[1]) return stepCount;
    steps(board, step).map((step) =>
      queue.push({ coord: step, stepCount: stepCount + 1 })
    );
    queue.shift();
  }
  return null;
}
