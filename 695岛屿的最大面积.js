// 695. 岛屿的最大面积
// 给你一个大小为 m x n 的二进制矩阵 grid 。
// 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直的四个方向上相邻。
// 你可以假设 grid 的四个边缘都被 0（代表水）包围着。
// 岛屿的面积是岛上值为 1 的单元格的数目。
// 计算并返回 grid 中最大的岛屿面积。如果没有岛屿，则返回面积为 0 。

// Solution: DFS(深度优先搜索)
// 遍历grid得到每个位置岛屿🏝面积的最大值，返回一个max
// 搜索函数-递归实现
// 判断边界，若不在边界内，返回0岛屿🏝;否则为1，递归计算上下左右是否为1，cnt计数岛屿🏝面积
// 判断完每个位置需要将其置0(grid[i][j]=0)

var maxAreaOfIsland = function(grid) {
  let x = grid.length, y = grid[0].length
  let max = 0
  for(let i=0;i<x;i++){
      for(let j =0;j<y;j++){
          if(grid[i][j]==1){
              max = Math.max(max,cntArea(grid,i,j,x,y))
          }
      }
  }
  return max

};
let cntArea = (grid, i, j, x, y) =>{
  if(i<0 || i>=x || j<0 || j>=y || grid[i][j]==0) return 0    
  let cnt = 1
  grid[i][j] = 0
  cnt += cntArea(grid, i+1, j, x, y)
  cnt += cntArea(grid, i-1, j, x, y)
  cnt += cntArea(grid, i, j+1, x, y)
  cnt += cntArea(grid, i, j-1, x, y)
  return cnt
}