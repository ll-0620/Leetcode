function Find(target, array) {
  let m = array.length;
  if (m == 0) return false;
  let n = array[0].length;
  if (n == 0) return false;
  let r = 0, c = n - 1;
  while (r < m && c >= 0) {
    if (target == array[r][c]) {
      return true;
    } else if (target > array[r][c]) {
      ++r;
    } else {
      --c;
    }
  }
  return false;
}