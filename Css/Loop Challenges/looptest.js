for (var i=1; i<=20; i++) 
if (i%2 !== 0) {
    console.log(i)
}

for(var i=-3.5; i<=4; i+=1.5) {
    console.log(i);
}

for(var i=100; i>=0; i-=3) {
    console.log(i);
}

for(var i=1; i<=5050; i++) {
    console.log(i);
}

for(var i=12 ; i<479001600; i--) {
    
    console.log(i);
}

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
    return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }
  let n = 12;
  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);