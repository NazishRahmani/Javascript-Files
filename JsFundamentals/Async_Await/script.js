

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

async function processData() {
  try {
    await storingData("stu 1");
    console.log("1 done");
    await storingData("stu 2");
    console.log("2 done");
    await storingData("stu 3");
    console.log("3 done");
  } catch {
    console.log("Network error");
  }
}

processData();

async function myDisplay() {
  let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("I love You !!");
    }, 3000);
  });
  let result = await myPromise;
  console.log(result);
}

myDisplay();
console.log('hello nazish')