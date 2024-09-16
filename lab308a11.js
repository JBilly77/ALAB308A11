// counter variable
let counter = 0;

function increment() {
  try {
    counter++;
    increment();
  } catch (e) {
    console.log(counter);
    console.error(e);
  }
}

increment();