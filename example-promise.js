
// Classic method
function getTempCallback (location, callback) {
  callback(undefined, 78);
  callback('Error Msg');
}

getTempCallback('Cologne', function (err, temp) {
  if (err) {
    console.log('error', err);
  } else {
    console.log('success', temp);
  }
});


// now using promises
function getTempPromise (location) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(79);
      reject('Error Message');
    }, 1000);
  });
}

getTempPromise('Cologne').then(function (temp) {
  console.log('promise success', temp);
}, function (err) {
  console.log('promise error', err);
});


// Challenge
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Not a number!');
    }
  });
}

addPromise(2,4).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});
addPromise("4", 3).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});
