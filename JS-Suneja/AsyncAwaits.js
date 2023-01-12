// async in programming
// callbacks, Promises, async, await

// const datas = [
//   { name: "awais", profession: "developer" },
//   { name: "akhib", profession: "developer" },
// ];

// function getDatas() {
//   setTimeout(() => {
//     datas.forEach((data, index) => {
//       console.log(data.name);
//     });
//   }, 1000);
// }

// function creatData(newData, callback) {
//   setTimeout(() => {
//     datas.push(newData);
//     callback();
//   }, 1000);
// }
// creatData({ name: "asif", profession: "developer" }, getDatas);
// console.log(datas);

const datas = [
  { name: "awais", profession: "developer" },
  { name: "akhib", profession: "developer" },
];

function getDatas() {
  setTimeout(() => {
    datas.forEach((data, index) => {
      console.log(data.name);
    });
  }, 1000);
}

function creatData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      datas.push(newData);
      let error = false;
      if (error) {
        resolve();
      } else {
        reject("not well..");
      }
    }, 2000);
  });
}
creatData({ name: "asif", profession: "developer" }).then(getDatas).catch(err => console.log(err));
console.log(datas);
