let array = [];
for (let i = 0; i < 100000; i++) {
	array.push(i)
}

//冒泡排序
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length - i - 1; j++){
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log('bubbleSort:')
console.time()
bubbleSort(array)
console.timeEnd()

// 選擇排序
function selectionSort(arr) {
	let len = arr.length;
	let minIndex, temp;
	for(let i = 0; i < len - 1; i++) {
		minIndex = i;
		for(var j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIndex];
		arr[minIndex] = temp;
	}
	return arr;
}

console.log('selectSort:')
console.time()
selectionSort(array)
console.timeEnd()

//插入排序
function insertionSort(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++){
    preIndex = i - 1;
    current = arr[i];
    while (preIndex = 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

console.log('insertionSort:')
console.time()
insertionSort(array)
console.timeEnd()

/**
 * 當目標是升序排序，最好情況是序列本來已經是升序排序，
 * 只需比較n-1次，時間複雜度O(n)。
 * 最壞情況是序列本來是降序排序，需比較n(n-1)/2次，時間複雜度O(n^2)。
 * 以平均來說，插入排序的時間複雜度是O(n^2)。
 * 顯然，次方級別的時間複雜度代表著插入排序不適合數據特別多的情況，
 * 一般來說插入排序適合小數據量的排序。
 */

//二分查找
function binary_search(arr, l, r, v) {
  if (l > r) {
    return -1;
  }
  let m = parseInt((l + r) / 2)
  if (arr[m] == v) {
    return m;
  } else if (arr[m] < v) {
    return binary_search(arr, m + 1, r, v);
  } else {
    return binary_search(arr, l, m - 1, v);
  }
}

//快速排序
function qSort(arr) {
	//聲名並初始化左邊的數組和右邊的數組
	let left = [], right = [];
	// 使用數組第一個元素作為基準值
	let base = arr[0];
	//當數組長度只有1或者為空時，直接返回數組，不需要排序
	if (arr.length <= 1) return arr;
	//進行遍歷
	for (let i = 1, len = arr.length; i < len; i++) {
		if (arr[i] <= base) {
			//如果小於基準值，push到左邊的數組
			left.push(arr[i])
		} else {
		//如果大於基準值，push到右邊的數組
			right.push(arr[i]);
		}
	}
	//遞歸並且合併數組元素
	return [...qSort(left), base, ...qSort(right)];
}


console.log('quickSort:')
console.time()
qSort(array)
console.timeEnd()

/**
 * 通過pivot區分左右部分，
 * 然後遞歸的在左右部分繼續取pivot排序，實現快速排序
 * 原地(in-place)分區算法描述:
 * 從數列中挑選一個元素，稱為“基準”（pivot），數組第一個元素的位置作為索引。
 * 遍歷數組，當數組數字小於或者等於基準值，則將索引位置上的數與該數字進行交換，同時索引+1。
 * 將基準值與當前索引位置進行交換。
 * 原地分區算法實現:
 */

// 交換數組元素位置
function swap(array, i, j) {
	let temp = array[i];
	array[i] = array[j];
	array[j] = temp;
}

function partition(array, left, right) {
	let index = left;
	let pivot = array[right];  //取最後一個數字當做基準值，這樣方便遍歷
	for (let i = left; i < right; i++) {
		if (array[i] <= pivot) {
			swap(array, index, i);
			index++;
		}
	}
	swap(array, right, index);
	return index;
}

// 原地分區版快速排序實現:
function quickSort2(array) {
	function swap(array, i, j) {
		let temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	function partition(array, left, right) {
		let index = left;
		let pivot = array[right];	//取最後一個數字當做基準值，這樣方便遍歷
		for (let i = left; i < right; i++) {
			if (array[i] < pivot) {
				swap(array, index, i);
				index++;
			}
		}
		swap(array, right, index);
		return index;
	}
	function sort(array, left, right) {
		if (left > right) {
			return;
		}
		let storeIndex = partition(array, left, right);
		sort(array, left, storeIndex - 1);
		sort(array, storeIndex + 1, right);
	}
	sort(array, 0, array.length - 1);
	return array;
}


console.log('原地分區版快速排序實現:')
console.time()
quickSort2(array)
console.timeEnd()