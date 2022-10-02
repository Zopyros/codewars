

// Instructions 

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.



// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

// My Solution 


function squareArea(A){
    let radius = (4*A)/(2*Math.PI)
     radius = radius**2
    return Number(radius.toFixed(2))
  }
  
  