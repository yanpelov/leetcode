
var romanToInt = function(s) {
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if(s.length - i > 1)
        {
            var next =  s.charAt(i+1)
        }
        switch(s.charAt(i))
        {
           case 'I': 
                if(next === 'V' || next === 'X')
                {   
                    sum-=1
                }
                else
                {
                    sum+=1
                }
                break
           case 'V': 
                sum+=5
                break
           case 'X': 
                if(next === 'L' || next === 'C')
                {   
                    sum-=10
                }
                else
                {
                    sum+=10
                }
                break
           case 'L': 
                sum+=50
                break;
           case 'C': 
                if(next === 'D' || next === 'M')
                {   
                    sum-=100
                }
                else
                {
                    sum+=100
                }
                break
           case 'D': 
                sum+=500
                break; 
            case 'M': 
                 sum+=1000
                break;               
                
        }
      }

      return sum;
      
};

console.log(romanToInt("CDXC"))

