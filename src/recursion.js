/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  if (n < 0) {
    return null
  } else if (n === 0) {
    return 1
  } else {
    return n * factorial(n - 1)
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0
  } else {
    return array[array.length - 1] + sum(array.slice(0, array.length - 1))
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  array = array.flat(Infinity)
  if (Array.isArray(array) === false || array.length === 0) {
    return 0
  } else {
    return array[array.length - 1] + arraySum(array.slice(0, array.length - 1))
  }
};

// 4. Check if a number is even.
var isEven = function(n) {
  if (n === 0 || n === 2 || n === -2) {
    return true
  } else if (n === 1) {
    return false
  } else if (n > 0) {
    return isEven(n - 2)
  } else if (n < 0) {
    return isEven(n + 2)
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 1) {
    return 0
  } else if (n === -1) {
    return 0
  } else if (n === 0) {
    return 0
  } else if (n > 1) {
    return n - 1 + sumBelow(n - 1)
  } else if (n < -1) {
    return n + 1 + sumBelow(n + 1)
  }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// 2,5 =
var range = function(x, y) {
  var integers = []
  if (y > x) {
    if (y > x + 1) {
      integers.push(x + 1)
      return integers.concat(range(x + 1, y))
    }
  } else if (x > y) {
    if (x > y + 1) {
      integers.push(x - 1)
      return integers.concat(range(x - 1, y))
    }
  }
  return integers
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1
  } else if (exp > 0 && (exp % 2 === 0)) {
    return (base ** 2) * exponent((base ** 2), (exp / 2) - 1)
  } else if (exp > 0) {
    return base * exponent(base, exp - 1)
  } else if (exp < 0) {
    return ((base * exponent(base, (exp * -1) - 1)) ** -1)
  }
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 1 || n / 2 === 1) {
    return true
  } else if (n === 0 || n % 2 !== 0) {
    return false
  } else {
    return powerOfTwo(n / 2)
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length === 0) {
    return ''
  } else {
    return string[string.length - 1] + reverse(string.slice(0, (string.length - 1)))
  }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  var array = string.toLowerCase().split(' ')
  var clean = array.join('')
  var index = clean.length - 1
  var end = clean[clean.length - 1]
  var slice = clean.slice(1, index)
  var length = slice.length
  if (length === 1 || length === 0) {
    if (clean[0] === clean[index]) {
      return true
    } else {
      return false
    }
  } if (clean[0] !== clean[index]) {
    return false
  } else {
    return palindrome(slice)
  }
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0 && x === 0) {
    return NaN
  } else if (y === x) {
    return 0
  } else if (x < y && x > 0) {
    return x
  } else if (x > y && x < 0) {
    return x
  } else {
    if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
      return modulo(x - y, y)
    } else if (x < 0 && y > 0) {
      if (0 - x > y) {
        return modulo(x + y, y)
      } else {
        return x
      }
    } else if (x > 0 && y < 0) {
      if (x > (0 - y)) {
        return modulo(x + y, y)
      } else {
        return x
      }
    }
  }
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0
  } else if (x === 1) {
    return y
  } else if (y === 1) {
    return x
  } else if (x === -1) {
    return 0 - y
  } else if (y === 1) {
    return 0 - x
  } else if (y > 0) {
    return x + multiply(x, y - 1)
  } else if (y < 0) {
    return (0 - x) + multiply (x, y + 1)
  }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN
  } else if (x === 0) {
    return 0
  } else if (y === 1) {
    return x
  } else if (x === y) {
    return 1
  } else if (x < y) {
    if (x > 0) {
      return 0
    } else if (x < 0) {
      if (y > 0) {
        if ((0 - x) === y) {
          return -1
        } else if ((0 - x) < y) {
          return 0
        } else if ((0 - x) > y) {
          return (0 - 1) + divide(x + y, y)
        }
      } else if (y < 0) {
        return 1 + divide(x - y, y)
      }
    }
  } else if (x > y) {
    if (x > 0 && y > 0) {
      if (x - y > y) {
        return 1 + divide(x - y, y)
      } else {
        return 1
      }
    } else if (x > 0) {
      if (x === (0 - y)) {
        return (0 - 1)
      } else if (x > (0 - y)) {
        return (0 - 1) + divide(x + y, y)
      } else {
        if ((0 - x - x) > y) {
          return 0
        } else {
          return -1
        }
      }
    } else {
      if ((0 - x - x > y)) {
        return 0
      } else {
        return 1
      }
    }
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0 || x === 0 || y === 0) {
    return null
  } else if (x === y) {
    return x;
  } else if (x > y) {
    return gcd(x - y, y);
  } else {
    return gcd(x, y - x);
  }
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) {
    return true
  } else if (str1[0] !== str2[0]) {
    return false
  } else if (str1[0] === str2[0]) {
    return compareStr(str1.slice(1), str2.slice(1))
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var output = []
  if (str.length === 0) {
    return output;
  } else if (str.length === 1) {
    output.push(str)
    return output
  } else {
    output.push(str[0])
    return output.concat(createArray(str.slice(1)))
  }
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  var reversed = []
  if (array.length === 0) {
    return reversed
  } else if (array.length === 1) {
    reversed.push(array[0])
    return reversed
  } else {
    reversed.push(array[array.length - 1])
    return reversed.concat(reverseArr(array.slice(0, array.length - 1)))
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var list = []
  if (length === 0) {
    return list
  } else if (length === 1) {
    list.push(value);
    return list
  } else {
    list.push(value)
    return list.concat(buildList(value, length - 1))
  }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var arr = []
  if (n === 0) {
    return arr
  } else if (n === 1) {
    arr.push(n.toString())
    return arr
  } else {
    if (n % 3 === 0 && n % 5 === 0) {
      arr.push('FizzBuzz')
      return fizzBuzz(n - 1).concat(arr)
    } else if (n % 3 === 0) {
      arr.push('Fizz')
      return fizzBuzz(n - 1).concat(arr)
    } else if (n % 5 === 0) {
      arr.push('Buzz')
      return fizzBuzz(n - 1).concat(arr)
    } else {
      arr.push(n.toString())
      return fizzBuzz(n - 1).concat(arr)
    }
  }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  if (array.length === 0) {
    return 0
  } else if (array.length === 1) {
    if (isNaN(value) === true && isNaN(array[0]) === true) {
      return 1
    } else if (array[0] === value) {
      return 1
    } else {
      return 0
    }
  } else {
    if (isNaN(value) === true && isNaN(array[0]) === true) {
      return 1 + countOccurrence(array.slice(1), value)
    } else if (array[0] === value) {
      return 1 + countOccurrence(array.slice(1), value)
    } else {
      return 0 + countOccurrence(array.slice(1), value)
    }
  }
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var mapped = []
  if (array.length === 0) {
    return mapped
  } else if (array.length === 1) {
    mapped.push(callback(array[0]))
    return mapped
  } else if (mapped.length < array.length) {
    mapped.push(callback(array[0]))
    return mapped.concat(rMap(array.slice(1), callback))
  }
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;
  for (var k in obj) {
    if (k === key) {
      count++
      if (typeof obj[k] === 'object') {
        count += countKeysInObj(obj[k], key)
      }
    } else {
      if (typeof obj[k] === 'object') {
        count += countKeysInObj(obj[k], key)
      }
    }
  }
  return count
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;
  for (var key in obj) {
    if (obj[key] === value) {
      count++
    } else if (typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value)
    }
  }
  return count
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var key in obj) {
    if (key === oldKey) {
      if (typeof obj[key] === 'object') {
        obj[key] = replaceKeysInObj(obj[key], oldKey, newKey)
      }
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    } else {
      if (typeof obj[key] === 'object') {
        obj[key] = replaceKeysInObj(obj[key], oldKey, newKey)
      }
    }
  }
  return obj
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  var nums = [];
  if (n === 0) {
    return nums
  } else if (n === 1) {
    nums.push(n)
  }
  return nums
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var caps = [];
  if (array.length === 0) {
    return caps;
  } else {
    caps.push(array[0].toUpperCase())
    return caps.concat(capitalizeWords(array.slice(1)));
  }
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  var capped = [];
  if (array.length === 0) {
    return capped;
  } else {
    capped.push(array[0][0].toUpperCase() + array[0].slice(1));
    return capped.concat(capitalizeFirst(array.slice(1)));
  }
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var count = 0;
  for (var key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      count += obj[key]
    } else if (typeof obj[key] === 'object') {
      count += nestedEvenSum(obj[key]);
    }
  }
  return count
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var flattened = [];
  if (array.length === 0) {
    return flattened
  } else if (Array.isArray(array[0]) === false) {
    flattened.push(array[0])
    return flattened.concat(flatten(array.slice(1)))
  } else if (Array.isArray(array[0]) === true) {
    flattened = flatten(array[0])
    return flattened.concat(flatten(array.slice(1)))
  }
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  var obj = obj || {}
  if (str.length > 0) {
    if (obj[str[0]] === undefined) {
      obj[str[0]] = 1;
      obj = Object.assign(obj, letterTally(str.slice(1), obj));
    } else {
      obj[str[0]]++;
      obj = Object.assign(obj, letterTally(str.slice(1), obj));
    }
  }
  return obj
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var compressed = [];
  if (list.length > 0) {
    if (list[0] !== list[1]) {
      compressed.push(list[0]);
    }
    compressed = compressed.concat(compress(list.slice(1)));
  }
  return compressed
};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  if (array.length > 0) {
   array[0].push(aug)
   array = array.slice(0,1).concat(augmentElements(array.slice(1), aug));
 }
 return array;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  var minimized = [];
  if (array.length > 0) {
    if (array[0] !== 0 || array[1] !== 0) {
      minimized.push(array[0])
    }
    minimized = minimized.concat(minimizeZeroes(array.slice(1)));
  }
  return minimized;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  var alts = [];
  var x = Math.abs(array[0]);
  var y = Math.abs(array[1]);
  if (array.length >= 2) {
    alts.push(x);
    alts.push(-y);
    alts = alts.concat(alternateSign(array.slice(2)));
  } else if (array.length === 1) {
    alts.push(x);
  }
  return alts;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numStr = ''
  if (str.length > 0) {
    if (isNaN(parseInt(str[0]))) {
      numStr += str[0];
    } else {
      if (parseInt(str[0]) === 0) {
        numStr += 'zero';
      } else if (parseInt(str[0]) === 1) {
        numStr += 'one';
      } else if (parseInt(str[0]) === 2) {
        numStr += 'two';
      } else if (parseInt(str[0]) === 3) {
        numStr += 'three';
      } else if (parseInt(str[0]) === 4) {
        numStr += 'four';
      } else if (parseInt(str[0]) === 5) {
        numStr += 'five';
      } else if (parseInt(str[0]) === 6) {
        numStr += 'six';
      } else if (parseInt(str[0]) === 7) {
        numStr += 'seven';
      } else if (parseInt(str[0]) === 8) {
        numStr += 'eight';
      } else if (parseInt(str[0]) === 9) {
        numStr += 'nine';
      }
    }
    numStr += numToText(str.slice(1));
  }
  return numStr;
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
  var capped = tag.toUpperCase();
  var count = [];
  node = node || document.body
  if (node.tagName === capped) {
    count.push(node);
  }
  node.childNodes.forEach(function(child) {
    count = count.concat(tagCount(tag, child));
  });
  return count.length - 1;
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
  var mid = Math.ceil(array.length / 2);
  var index = (mid - 1);
  if (target > array[array.length - 1] || target < array[0]) {
    return null
  } else if (array[index] === target) {
    return index
  } else if (array[index] > target) {
    return binarySearch(array.slice(0,index), target);
  } else if (array[index] < target) {
    if (binarySearch(array.slice(mid), target) === null) {
      return null
    } else {
      return (mid + binarySearch(array.slice(mid), target))
    }
  }
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
