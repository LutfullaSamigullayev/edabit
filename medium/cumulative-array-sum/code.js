function cumulativeSum(arr) {
  // Your code here.
  const newarr = arr.map((num, index, arr) => { // arr map qilamiz
    arr[index+1] = num + arr[index+1]
    // num ni o'zidan oldingi indexga qo'shib javobni o'zidan oldingi indexga joylashtirib boramiz
    return num //kelgan num ni newarr ga return qilib boramiz
  })
  return newarr
}

module.exports = cumulativeSum;
