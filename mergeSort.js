var merge = function(arr, l, m, r) {

  var R = [], L = [];
  var i = 0, j = 0, k = l;
    while ( i < (m - l + 1) ) {
    L[i++] = arr[k++];
  }
  
  while ( j < (r - m) ) {
    R[j++] = arr[k++];
  }

  i = 0, j = 0, k = l;
  while (i < L.length && j < R.length) {
    if (L[i] <= R[j]) {
      arr[k++] = L[i++];
    }
    else {
      arr[k++] = R[j++];
    }
  }

  while (i <  L.length) {
    arr[k++] = L[i++];
  }
  while (j <  R.length) {
    arr[k++] = R[j++];
  }
}

var sort = function(arr, l, r) {
  if (l < r) {
    var m = Math.floor( (l + r) / 2 );

    sort(arr, l, m);
    sort(arr, m + 1, r);

    merge(arr, l, m, r);
  }
}

var mergeSort = function(arr) {
  sort(arr, 0, arr.length - 1);
};



