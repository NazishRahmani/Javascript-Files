// let a = new Promise((resolve, reject) => {
//   let one = true;
//   if (one) {
//     resolve();
//   }
//   reject();
// });

// a.then(() => {
//   console.log("Promise resolved");
// }).catch(() => {
//   console.log("Promise rejected");
// });

function storingData(data) {
  return new Promise((success, failure) => {
    let speed = Math.floor(Math.random() * 20);
    if (speed >= 10) {
      success();
    } else {
      failure();
    }
  });
}

storingData("stu 1")
  .then(() => {
    console.log("1 done");
    return storingData("stu 2");
  })
  .then(() => {
    console.log("2 done");
    return storingData("stu 3");
  })
  .then(() => {
    console.log("3 done");
  })
  .catch((e) => {
    console.log("Network error");
  });

