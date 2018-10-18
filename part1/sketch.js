
function setup() 
{
  createCanvas(400, 400)
  background(200)
}

function draw() 
{
  var x 
  var y = 10
  var count = 19
  
  for (var c = 0; c < count; c = c + 1)
  {
    x = 10
    for (var i = 0; i < count; i = i + 1) 
    {
      rect(x, y, 10, 10)
      x = x + 20
    }
    y = y + 20
  }
    
}