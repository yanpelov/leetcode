var romanToInt = function (s) {
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (s.length - i > 1) {
            var next = s.charAt(i + 1)
        }
        switch (s.charAt(i)) {
            case 'I':
                if (next === 'V' || next === 'X') {
                    sum -= 1
                } else {
                    sum += 1
                }
                break
            case 'V':
                sum += 5
                break
            case 'X':
                if (next === 'L' || next === 'C') {
                    sum -= 10
                } else {
                    sum += 10
                }
                break
            case 'L':
                sum += 50
                break;
            case 'C':
                if (next === 'D' || next === 'M') {
                    sum -= 100
                } else {
                    sum += 100
                }
                break
            case 'D':
                sum += 500
                break;
            case 'M':
                sum += 1000
                break;

        }
    }

    return sum;

};

var isValid = function (s) {
    let stack = [];
    if (s.length % 2 !== 0) {
        return false;
    }
    for (i = 0; i < s.length; i++) {
        var curr = s.charCodeAt(i);
        switch (curr) {
            case 40:
                stack.push(curr);
                break;
            case 41:
                if (stack.pop() + 1 !== curr) {
                    return false;
                }
                break;
            case 123:
                stack.push(curr);
                break;
            case 125:
                if (stack.pop() + 2 !== curr) {
                    return false;
                }
                break;
            case 91:
                stack.push(curr);
                break;
            case 93:
                if (stack.pop() + 2 !== curr) {
                    return false;
                }
                break;
        }

    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

var mergeLists = function (l1, l2) {

    var currl1 = l1;
    var currl2 = l2;
    var currl3 = null;
    var l3 = [];

    while (currl1 || currl2) {
        if (currl1 && currl2) {
            if (currl1.val == currl2.val) {
                if (currl3) {
                    currl3.next = new ListNode(currl1.val, new ListNode(currl2.val));
                } else {
                    currl3 = new ListNode(currl1.val, new ListNode(currl2.val));
                }

            }

            else if(currl1.val > currl2.val)
            {
                if (currl3) {
                    currl3.next = new ListNode(currl1.val, new ListNode(currl2.val));
                } else {
                    currl3 = new ListNode(currl1.val, new ListNode(currl2.val));
                }
            }

            else{
                if (currl3) {
                    currl3.next = new ListNode(currl2.val, new ListNode(currl1.val));
                } else {
                    currl3 = new ListNode(currl2.val, new ListNode(currl1.val));
                }
            }            

        }
        l3.push(currl3);
        currl3= currl3.next;
        if (currl1) {
            console.log(currl1.val);
            currl1 = currl1.next;
        }

        if (currl2) {
            console.log(currl2.val);
            currl2 = currl2.next;
        }
    }

    return l3;
};

var mergeTwoLists = function () {


    var node1 = new ListNode(4);
    var node2 = new ListNode(2, node1);
    var l1 = new ListNode(1, node2);

     var node4 = new ListNode(4);
     var node5 = new ListNode(3,node4);
    //var node5 = new ListNode(3);

    var l2 = new ListNode(1, node5);

    var merged = mergeLists(l1, l2);
}




//console.log(isValid('(('))
//console.log(isValid('()'))
//console.log(romanToInt("CDXC"))
console.log(mergeTwoLists())