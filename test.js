function mode(arr) {
    var obj = {};
  for(i = 0; i < arr.length; i++) {
      if(obj[arr[i]]) {
          obj[arr[i]] += 1;
      } else {
          obj[arr[i]] = 1;
      }
      var newArray = [];
      
    }
    console.log(obj);
  }
  
  mode([1, 2, 3, 4, 4]);