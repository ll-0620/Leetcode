// 876. 链表的中间结点
// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。

// solution -> 快慢指针：
// 比较经典的做法是：
// 使用两个指针变量，刚开始都位于链表的第 1 个结点，一个永远一次只走 1 步，
// 一个永远一次只走 2 步，一个在前，一个在后，同时走。
// 这样当快指针走完的时候，慢指针就来到了链表的中间位置。

// 快指针q每次走2步，慢指针p每次走1步，当q走到末尾时p正好走到中间。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var middleNode = function(head) {
  var p = head, q = head;
  while (q != null && q.next != null) {
      q = q.next.next;
      p = p.next;
  }
  return p;    
};