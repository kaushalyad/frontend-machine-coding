// export const sum = (a, b) => {
//   return a + b;
// };

// const obj = {
//   name: "kaushal",
//   items: ["mohan", "sanchan"]
// }

// const ans = { ...obj, name: "pushpa", items: [...(obj.items.map((item, idx) => idx === 0 ? "changed" : item)), "sanhcv"] };
// console.log(ans);

// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
//   Promise.resolve().then(() => {
//     console.log('Promise 1');
//   }).then(() => {
//     console.log('Promise 2');
//   });
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 3');
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
//   return Promise.resolve();
// }).then(() => {
//   console.log('Promise 4');
// });

// console.log('End');

const obj = {
  count: 0,
  increment: function () {
    setTimeout(() => {
      this.count++;
      console.log(this.count);
    }, 300);
  }
};
console.log(obj.increment());