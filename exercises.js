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
    if (!l1 && !l2) {
        return null;
    }

    var currl1 = l1;
    var currl2 = l2;
    var currl3 = new ListNode(null);

    let head = currl3;

    while (currl1 && currl2) {
        if (currl1.val <= currl2.val) {
            currl3.val = currl1.val;
            currl1 = currl1.next;
        } else {
            currl3.val = currl2.val;
            currl2 = currl2.next;
        }

        if (currl1 || currl2) {
            currl3.next = new ListNode(null)
            currl3 = currl3.next;
        }

    }

    while (currl1) {
        currl3.val = currl1.val;
        currl1 = currl1.next;

        if (currl1) {
            currl3.next = new ListNode(null)
            currl3 = currl3.next;
        }
    }
    while (currl2) {
        currl3.val = currl2.val;
        currl2 = currl2.next;

        if (currl2) {
            currl3.next = new ListNode(null)
            currl3 = currl3.next;
        }
    }


    return head;
};

var mergeTwoLists = function () {


    //   var l1 = new ListNode(2, new ListNode(2, new ListNode(3)));
    //  var l2 = new ListNode(1, new ListNode(2, new ListNode(5)));

    var l1 = new ListNode(1, new ListNode(8, new ListNode(9)));
    var l2 = new ListNode(1, new ListNode(2, new ListNode(4)));

    var merged = mergeLists(l1, l2);
    let curr = merged;

    if (!curr) {
        console.log(null);
    } else {
        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
    }
}

var nums1 = [1, 5, 0, 0, 0];
var nums2 = [2, 3, 4];

var mergeSortedArrs = function (nums1, nums2, m, n) {
    for (i = m, j = 0; i < (m + n), j < n; i++, j++) {
        nums1[i] = nums2[j];
    }

    return nums1.sort(function (a, b) {
        return a - b;
    })
}


var linkCircle = function () {
    var head = new ListNode(1, new ListNode(8, new ListNode(9)));
    head.next.next.next = head.next;
    if (!head || !head.next) {
        return false;
    }

    let zav = head;
    let arnav = head.next.next;


    while (arnav !== zav) {
        if (!arnav || !arnav.next) {
            return false;
        }
        zav = zav.next;
        arnav = arnav.next.next;

    }
    return true;
}


var MinStack = function () {
    class ListNode {
        constructor(value, next) {
            this.value = value;
            this.next = next;
        }

    }
    var head = null;

};

MinStack.prototype.push = function (x) {
    if (this.head) {
        this.head = new ListNode(x, this.head);
    } else {

        this.head = new ListNode(x, null);
    }
};

MinStack.prototype.pop = function () {
    this.head = this.head.next;
};

MinStack.prototype.top = function () {
    return this.head.val;
};

MinStack.prototype.getMin = function () {
    var curr = this.head;
    var min = this.head.val;
    curr = curr.next;
    while (curr) {
        if (curr.val < min) {
            min = curr.val;
        }
        curr = curr.next;
    }

    return min;
};

var majority = function () {
    var len = nums.length;

    if (len == 1) {
        return nums[0];
    }

    nums.sort(function (a, b) {
        return a - b;
    });

    var major = 0;

    if (len % 2 == 0) {
        major = len / 2;
    } else {
        major = Math.floor(len / 2);
    }

    var count = 0;

    for (let i = 0; i < len - 1; i++) {

        if (nums[i] == nums[i + 1]) {
            count++;
        } else {
            count = 0;
        }

        if (count == major) {
            return nums[i];
        }
    }
}
/*
var rotateArr = function (nums, k) {
    var newA = []
    for (i = 0; i < nums.length; i++) {

        newA[(i + k) % nums.length] = nums[i]

    }
    return newA;
}*/

var rotateArrSwap = function (nums, k) {
    var swap = null;

    for (j = 0; j < k; j++) {
        for (i = nums.length - 1; i > 0; i--) {

            swap = nums[i];
            nums[i] = nums[i - 1];
            nums[i - 1] = swap;
        }
    }

    return nums;
}

let nums = [1,2,3,4,5,6,7];
console.log(rotateArrSwap(nums, 3));
//console.log(rotateArr(nums, 1));

//let nums = [-1,1,-1];
//console.log(majority(nums));
//console.log(isValid('(('))
//console.log(isValid('()'))
//console.log(romanToInt("CDXC"))
//mergeTwoLists();
//mergeSortedArrs(nums1, nums2, m, n);
//console.log(linkCircle());