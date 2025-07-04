function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

const output = [];

for (let i = 100; i >= 1; i--) {
  if (isPrime(i)) continue;

  if (i % 15 === 0) {
    output.push("FooBar");
  } else if (i % 3 === 0) {
    output.push("Foo");
  } else if (i % 5 === 0) {
    output.push("Bar");
  } else {
    output.push(i.toString());
  }
}

console.log(output.join(" "));
