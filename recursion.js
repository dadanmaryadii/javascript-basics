// Examples

function factorial (number) {
  if (number === 1) {
    return number;
  }
  return number * factorial(number - 1);
}

function ladder (start) {
  if (start === 5) {
    console.log(start);
  } else {
    console.log(start);
    ladder(start + 1);
  }
}
