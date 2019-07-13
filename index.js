module.exports =FirstFactorial;

function FirstFactorial(num) {
  this.content = num;

  this.factorial = function () {
    return this.content;
  }
}
