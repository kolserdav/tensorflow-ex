// @ts-check
import * as tf from "@tensorflow/tfjs";

tf.setBackend("webgl");

function runTask() {
  const arr = new Array(1920).fill(
    new Array(1080)
      .fill(0)
      .map((_) =>
        new Array(3).fill(0).map((_) => Math.floor(Math.random() * 255))
      )
  );

  let _arr = [...arr];
  _arr[0][0][0] = 2;
  const a = tf.util.arraysEqual(arr, _arr);

  console.log(a, _arr[0][0], arr[0][0]);
}

let start = new Date().getTime();
for (let i = 0; i < 10; i++) {
  runTask();
}
console.log(new Date().getTime() - start);
