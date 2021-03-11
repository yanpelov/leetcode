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

var rotateArr = function (nums, k) {
    var newA = []
    for (i = 0; i < nums.length; i++) {

        newA[(i + k) % nums.length] = nums[i]

    }
    return newA;
}
var rev = function (nums, s, e) {
    var tmp = null;
    while (s < e) {
        tmp = nums[s];
        nums[s] = nums[e];
        nums[e] = tmp;
        s++;
        e--;
    }
}
/*var rotateArr = function (nums,k){
    rev(nums, 0, nums.length - 1);
    rev(nums, 0, k - 1);
    rev(nums,k,nums.length - 1);
    return nums;
} */
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

var isHappy = function (n) {

    var sum = 0;
    var str = n.toString();
    //var myarr = new Map();

    while (sum !== 1) {
        sum = 0;
        for (let i = 0; i < str.length; i++) {
            sum += Math.pow(str[i], 2)
        }

        if (sum == 4)
            return false;

        str = sum.toString();
        /*console.log(str);
        if(myarr[str]!=true)
             myarr[str] = true;
        else return false;*/
    }
    return true;
}

var cntPrimes = function (n) {
    var cnt = 0;
    for (i = n - 1; i > 1; i--) {
        var top = Math.floor(Math.sqrt(i));
        for (j = 2; j <= top; j++) {
            if (i % j == 0) {
                break;
            }
        }

        if (j == top + 1) {
            cnt++;
        }
    }
    return cnt;
}
//egg abb e-a =5-1,e+a =6; g-b =7-2, 9; g-b = 7-2,9    4 + 5 + 5

//foo bar    f-b = 6-2, 8; o-a 15-1, 16; 15-18=-3, 33 foo abr
//abc ddf


//circle paper
var isMorphic = function (s, t) {
    return isMorphicHelper(s, t) && isMorphicHelper(t, s);
}

var isMorphicHelper = function (s, t) {
    let myMap = {};
    for (i = 0; i < s.length; i++) {
        if (!myMap[s.charAt(i)]) {
            myMap[s.charAt(i)] = t.charAt(i);
        } else {
            if (myMap[s.charAt(i)] !== t.charAt(i))
                return false;
        }
    }

    return true;
}


class Tree {
    constructor(value, left, right) {
        this.value = value;

        this.left = left;
        this.right = right;
    }
}

let char = "\t";
let orig = 5;
var printTree = function (t, lvl) {

    let replace = char.repeat(lvl);
    if (t.value) {
        console.log(replace + t.value);
    }

    if (t.left) {
        printTree(t.left, lvl - 1);
        if (t.right) printTree(t.right, lvl + 1);
    } else if (t.right) {
        printTree(t.right, lvl + 1);
    }

}

/*var printTree = function(t,lvl){
    
    if(t.value)
    {
        if(t.left)
        {
            console.log(t.left.v);

            if(t.right)
            {
                console.log(t.right.v)
            }
        }
    }
    let replace = char.repeat(lvl);
    if(t.value){
        console.log(replace + t.value);
    } 

    if(t.left){
        printTree(t.left, lvl-1);
    if (t.right) printTree(t.right, lvl+1);
    }

    else if (t.right){
         printTree(t.right, lvl+1);
    }

}*/
/*   
4,2,1,3,7,6,9
769213
7
96213
9
6
2
31
3
1

        4
    2          7    
1       3   6      9


        4
    7           2
9       6   3       1
        
*/

function invertTree(root) {
    const stack = [root];

    while (stack.length) {
        const n = stack.pop();
        if (n != null) {
            [n.left, n.right] = [n.right, n.left];
            stack.push(n.left, n.right);
        }
    }

    return root;
}

/*var invertTree = function(root){

    if(!root)
    {
        return;
    }

    if(root.left || root.right)
    {
        let tmp = root.left;
        root.left = root.right;
        root.right = tmp;

        if(root.left)
        {
            invertTree(root.left);
        }

        if(root.right)
        {
            invertTree(root.right);
        }
    }

}*/

var treeTest = function () {

    var root = new Tree(4,
        new Tree(2,
            new Tree(1, null, null),
            new Tree(3, null, null)
        ),
        new Tree(7,
            new Tree(6, null, null),
            new Tree(9, null, null)));
    printTree(root, 5);
    invertTree(root);
    console.log("\n----\n");
    printTree(root, 5);


}


//treeTest();

/*var isAnagram = function(s,t){
    sLen = s.length;
    tLen = t.length;

    if(sLen!=tLen)
    return false;

    let sum = 0;
    for(let i =0; i<sLen;i++)
    {
        sum += s.charCodeAt(i) - t.charCodeAt(i);
    }

    if(sum!=0)
    {
        return false;
    }

    return true;
}*/

var isAnagram = function (s, t) {

    let map = {};

    if (s.length != t.length) return false;

    for (let i = 0; i < s.length; i++) {

        if (map[s[i]] > 0) {
            map[s[i]]++;
        } else {
            map[s.charCodeAt(i)] = 1;
        }
    }

    for (let i = 0; i < t.length; i++) {
        map[t.charCodeAt(i)]--;
        if (isNaN(map[t.charCodeAt(i)]) || map[t.charCodeAt(i)] < 0) return false;
    }
    return true;
}

/*

<<<<<<< HEAD
var findDisappearedNumbers = function(nums) {
    for(i=0;i<nums.length;i++)
    {
        let keep = nums[i];
        nums[i] = nums[keep-1];
        nums[keep-1] = keep;  
    }
};

findDisappearedNumbers([4,3,2,7,8,2,3,1]);*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let stack = [];
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            stack.push(s[i]);
        } else {
            let len = stack.length;
            for (let y = 0; y < len; y++) {
                newStr += stack.pop();
            }
            newStr += ' ';
        }
    }
    let len = stack.length;
    if (len > 0) {
        for (let y = 0; y < len; y++) {
            newStr += stack.pop();
        }
    }

    return newStr;
};

reverseWords("Let's take LeetCode contest");

var toBinary = function (a) {

    let str = '';
    while (a != 0) {
        if (a & 1) {
            let one = 1;
            str += one.toString();
        } else {
            let zero = 0;
            str += zero.toString();
        }
        a = a >> 1;

    }
    console.log(str);
}

toBinary(5);


var sumInts = function (a, b) {

    while (b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }

    return a;
}

//console.log(sumInts(-5,7));


let findMissing = function (nums) {

    nums.sort(function (a, b) {
        return a - b
    });

    for (let i = 1; i <= nums.length; i++) {
        delete nums[i];
    }

    return nums;
    /*   let map = {};

       for(let i = 1; i <= nums.length; i++){
           map[i] = 1;
       }

       for(let i = 0; i < nums.length; i++){

               delete map[nums[i]];
           
       }

       return Object.keys(map);*/
}

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

findMissing(nums);



let flower = function (flowerbed, n) {
    let cnt = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 1) {
            i++;
        } else {
            if (flowerbed[i + 1] === 0) {
                if (i === 0) {
                    cnt++;
                    i++;
                } else {
                    if (flowerbed[i - 1] === 1) {
                    } else {
                        cnt++;
                        i++;
                    }
                }
            } else {
                if (flowerbed[i + 1] == 1) {
                    i++;
                } else {
                    if(flowerbed[i-1] === 0 || i == 0)
                    {
                      cnt++;
                      i++;
                    }
                }
            }
        }
    }
    if (cnt >= n) {
        return true;
    } else {
        return false;
    }
}

flower([0], 2)