'use strict';

const memo = new Map();
memo.set(0, 0);             //0番目というキーに0という答えをセット
memo.set(1, 1);
function fib(n) {
    if (memo.has(n)) {      //もしmemoがnをキーとした答えを持っていたら
        return memo.get(n)  //その答えを返す
    }
    const value = fib(n - 1) + fib(n - 2);  //nというキーを持っていなければ計算
    memo.set(n, value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}


/*
function fib(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
    return 1;
    }
    return fib(n - 1) + fib(n - 2);
}
const length = 40;
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}
*/