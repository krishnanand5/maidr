// display x and y information under bar plot
var x = document.getElementById("x");
var y = document.getElementById("y");

// variables for manipulation of bars
var currBar = -1;

// manipulate bars using left and right arrows
window.addEventListener("keydown", function(e) {
  if (e.which === 39) {
    if (currBar == -1) {
      currBar += 1;
      this.document.getElementById(bars[currBar]).style.fill = "rgb(3,200,9)";
      x.innerHTML = "x-value: " + x_values[currBar];
      y.innerHTML = "y-value: " + y_values[currBar];
    } else if (currBar > -1 && currBar < _numBars - 1) {
      currBar += 1;
      this.document.getElementById(bars[currBar]).style.fill = "rgb(3,200,9)";
      this.document.getElementById(bars[currBar - 1]).style.fill = "rgb(89,89,89)";
      x.innerHTML = "x-value: " + x_values[currBar];
      y.innerHTML = "y-value: " + y_values[currBar];
    } 
  }

  if (e.which === 37) {
    if (currBar > 0 && currBar < _numBars) {
      currBar -= 1;
      this.document.getElementById(bars[currBar]).style.fill = "rgb(3,200,9)";
      this.document.getElementById(bars[currBar + 1]).style.fill = "rgb(89,89,89)";
      x.innerHTML = "x-value: " + x_values[currBar];
      y.innerHTML = "y-value: " + y_values[currBar];
    } 
  }
});