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
    if(stack.length!==0)
    {
        return false;
    }
    return true;
};

isValid('((')