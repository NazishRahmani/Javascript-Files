function storingData(data, resolve, reject) {
  let speed = Math.floor(Math.random() * 20);
  return new Promise((resolve, reject) => {
    if (speed <= 10) {
      resolve();
    } else {
      reject();
    }
  });
}

storingData("a")
  .then(() => {
    console.log("a done");
  })

  .catch((err) => {
    console.log(err);
  });
