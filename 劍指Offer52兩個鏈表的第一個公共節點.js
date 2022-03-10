// 劍指Offer no.52 兩個鏈表的第一個公共節點
// 输入两个链表，找出它们的第一个公共节点。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Q: [4,1,8,4,5] [5,0,1,8,4,5] 為什麼相交節點是：8，而不是1？
 * 鏈表的公共節點是存的內存地址相同，而不是val相同
 * 不僅是值要相同，存在計算機裡的地址也要一樣。1只是值一樣，存的地址不一樣
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 var getIntersectionNode = function(headA, headB) {
  if(headA == null || headB == null) return null;
  let n1 = headA;
  let n2 = headB;
  while(n1!=n2){
      n1 = (n1===null) ? headB : n1.next;
      n2 = (n2===null) ? headA : n2.next;
  }   
  return n1
};

