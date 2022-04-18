// 19. 删除链表的倒数第 N 个结点
// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
// 题目要求一次遍历解决问题

// 假设设定了双指针 p 和 q 的话，当 q 指向末尾的 NULL，
// p 与 q 之间相隔的元素个数为 n 时，那么删除掉 p 的下一个指针就完成了要求。

// Solution -> 快慢指针： 
// 设置虚拟节点 dummyHead 指向 head
// 设定双指针 p 和 q，初始都指向虚拟节点 dummyHead
// 移动 q，直到 p 与 q 之间相隔的元素个数为 n
// 同时移动 p 与 q，直到 q 指向的为 NULL
// 将 p 的下一个节点指向下下个节点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var dummy = new ListNode(-1);
  dummy.next = head;
  var pre = dummy;
  var slow = head;
  var fast = head;
  for(var i=0;i<n;i++){
      fast = fast.next;
  }
  while(fast!=null){
      pre = pre.next;
      slow = slow.next;
      fast = fast.next;
  }
  pre.next = slow.next;
  return dummy.next;
};