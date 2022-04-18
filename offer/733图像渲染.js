// 733. 图像渲染
// 有一幅以二维整数数组表示的图画，每一个整数表示该图画的像素值大小，数值在 0 到 65535 之间。
// 给你一个坐标 (sr, sc) 表示图像渲染开始的像素值（行 ，列）和一个新的颜色值 newColor，让你重新上色这幅图像。
// 为了完成上色工作，从初始坐标开始，记录初始坐标的上下左右四个方向上像素值与初始坐标相同的相连像素点，接着再记录这四个方向上符合条件的像素点与他们对应四个方向上像素值与初始坐标相同的相连像素点，
// ……，重复该过程。将所有有记录的像素点的颜色值改为新的颜色值。
// 最后返回经过上色渲染后的图像。

//BFS 對列
var floodFill = function(image, sr, sc, newColor) {
  const row = image.length, col = image[0].length
  const oldColor = image[sr][sc]
  //如果新老颜色相同则无需填充更改
  if (oldColor == newColor) return image
  //创建bfs的队列
  const bfs = [[sr, sc]]
  //当bfs栈全部弹出时染色结束
  while (bfs.length) {
      //弹出现在所在的点，并将其染色
      const [i, j] = bfs.shift()
      image[i][j] = newColor
      //向现有点的四个方向分别判断颜色是否相同，相同则将同色点加入bfs栈，在下一轮进行bfs操作
      if (i - 1 >= 0 && image[i - 1][j] == oldColor) bfs.push([i - 1, j])
      if (i + 1 < row && image[i + 1][j] == oldColor) bfs.push([i + 1, j])
      if (j - 1 >= 0 && image[i][j - 1] == oldColor) bfs.push([i, j - 1])
      if (j + 1 < col && image[i][j + 1] == oldColor) bfs.push([i, j + 1])
  }
  /*
  换一个写法
  while (bfs.length) {
      const [i, j] = bfs.shift()
      if(i < 0 || i >= row || j < 0 || j >= col || image[i][j] != oldColor) continue
      image[i][j] = newColor
      bfs.push([i - 1, j]) 
      bfs.push([i + 1, j]) 
      bfs.push([i, j - 1]) 
      bfs.push([i, j + 1]) 
  }
  */
  return image;
};

// DFS遞歸
var floodFill = function(image, sr, sc, newColor) {
  const row = image.length, col = image[0].length
  const oldColor = image[sr][sc]
  //如果新老颜色相同则无需填充更改
  if (oldColor == newColor) return image
  //开启dfs递归
  const dfs = (i, j) => {
      //判断边界条件，若越界或不同色，则直接返回上一轮递归
      if (i < 0 || i >= row || j < 0 || j >= col || image[i][j] != oldColor) return
      image[i][j] = newColor
      //分别向四个方向dfs深度优先遍历
      dfs(i - 1, j)   
      dfs(i + 1, j) 
      dfs(i, j - 1) 
      dfs(i, j + 1) 
  }
  dfs(sr, sc)
  return image
};