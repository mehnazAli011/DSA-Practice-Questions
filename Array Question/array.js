// // Q 1.left and right sum difference
// Given a 0-indexed integer array nums, find a 0-indexed integer array answer where:

// answer.length == nums.length.
// answer[i] = |leftSum[i] - rightSum[i]|.
// Where:

// leftSum[i] is the sum of elements to the left of the index i in the array nums. If there is no such element, leftSum[i] = 0.
// rightSum[i] is the sum of elements to the right of the index i in the array nums. If there is no such element, rightSum[i] = 0.
// Return the array answer.

// Example 1:

// Input: nums = [10,4,8,3]
// Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
// Example 2:

// Input: nums = [1]
// Output: [0]
// Explanation: The array leftSum is [0] and the array rightSum is [0].
// The array answer is [|0 - 0|] = [0].
//Brute Appraoch
function leftAndRightSumDiff(nums) {
  let leftSum = 0;
  let rightSum = 0;
  let leftArr = [0];
  let rightArr = [];
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    leftArr.push(leftSum);
  }

  for (let i = nums.length - 1; i >= 1; i--) {
    rightSum += nums[i];
    rightArr[i - 1] = rightSum;
  }
  rightArr.push(0);
  for (let j = 0; j < nums.length; j++) {
    result.push(Math.abs(leftArr[j] - rightArr[j]));
  }
  return result;
}
console.log(leftAndRightSumDiff([10, 4, 8, 3]));
console.log(leftAndRightSumDiff([1]));

function leftAndRightSumDiff(nums) {
  const left = [0];
  const right = [0];
  const ans = [];
  //left sum
  for (let i = 0; i < nums.length - 1; i++) {
    left.push(nums[i] + left[i]);
  }
  //right sun
  for (let j = nums.length - 1; j > 0; j--) {
    const pop = right.pop();
    ans.unshift(Math.abs(left[j] - pop));
    right.push(nums[j] + pop);
  }
  ans.unshift(right.pop());

  return ans;
}
console.log(leftAndRightSumDiff([10, 4, 8, 3]));
console.log(leftAndRightSumDiff([1]));

// //Better Approach
function leftAndRightSumDiff(nums) {
  let left = 0;
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const rightSum = nums.slice(i + 1).reduce((a, b) => a + b, 0);
    result.push(Math.abs(left - rightSum));
    left += nums[i];
  }
  return result;
}
console.log(leftAndRightSumDiff([10, 4, 8, 3]));
console.log(leftAndRightSumDiff([1]));

//Q 2 Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
function runningSum(nums) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
}
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
//Time complexity:-O(n)
function runningSum(nums) {
  nums.reduce((a, b, c, arr) => (arr[c] += a));
  return nums;
}
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));

//Another Approach
function runningSum(nums) {
  let result = [];
  nums.reduce((a, b) => {
    a += b;
    return result.push(a);
  }, 0);
  return result;
}
console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1, 1]));
console.log(runningSum([3, 1, 2, 10, 1]));
// ========================================================================================
// Q 3Number of the good Pair |
// You are given 2 integer arrays nums1 and nums2 of lengths n and m respectively. You are also given a positive integer k.

// A pair (i, j) is called good if nums1[i] is divisible by nums2[j] * k (0 <= i <= n - 1, 0 <= j <= m - 1).

// Return the total number of good pairs.

// Example 1:

// Input: nums1 = [1,3,4], nums2 = [1,3,4], k = 1

// Output: 5

// Explanation:

// The 5 good pairs are (0, 0), (1, 0), (1, 1), (2, 0), and (2, 2).
// Example 2:

// Input: nums1 = [1,2,4,12], nums2 = [2,4], k = 3

// Output: 2

// Explanation:

// The 2 good pairs are (3, 0) and (3, 1).

//Brute Approach
function countGoodPair(nums1, nums2) {
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] % (nums2[j] * k) === 0) result.push([i, j]);
    }
  }
  return result.length;
}
console.log(countGoodPair([1, 3, 4], [1, 3, 4], (k = 1)));
console.log(countGoodPair([1, 2, 4, 12], [2, 4], (k = 3)));

//Other Appraoch
function countGoodPair(nums1, nums2, k) {
  let count = 0;
  nums1.forEach((elm1) => {
    nums2.forEach((elm2) => {
      if (elm1 % (elm2 * k) === 0) {
        count++;
      }
    });
  });
  return count;
}
console.log(countGoodPair([1, 3, 4], [1, 3, 4], 1)); //5
console.log(countGoodPair([1, 2, 4, 12], [2, 4], 3)); //2

// ======================================================================================
//Q 5 Find last and first postion elmement in sorted arrray.
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
// If target is not found in the array, return [-1, -1].
// You must write an algorithm with O(log n) runtime complexity.
// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]

//Brute Appraoch
function sreachRange(nums, target) {
  if (nums.length === 0 || !nums.includes(target)) {
    return [-1, -1];
  }
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      res.push(i);
    }
  }
  return res;
}
console.log(sreachRange([5, 7, 7, 8, 8, 10], 8));
console.log(sreachRange([5, 7, 7, 8, 8, 10], 9));

//Optimal Approach
function sreachRange(nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }
  let first = -1;
  let last = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      first = i;
      break;
    }
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === target) {
      last = i;
      break;
    }
  }
  return [first, last];
}
console.log(sreachRange([5, 7, 7, 8, 8, 10], 8));
console.log(sreachRange([5, 7, 7, 8, 8, 10], 9));
console.log(sreachRange([], 0));
// Time complexity:O(n**2)
// ======================================================================================
// Q Find minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.
// Example 2:

// Input: nums = [4,5,6,7,0,1,2]
// Output: 0
// Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
// Example 3:

// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times.
//Brute Approach
function findMinimunElm(nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[0];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j]) {
        temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
      }
    }
  }
  return nums[0];
}
console.log(findMinimunElm([3, 4, 5, 1, 2]));
console.log(findMinimunElm([4, 5, 6, 7, 0, 1, 2]));
console.log(findMinimunElm([11, 13, 15, 17]));
//Time complexity:O(n**2)

// function findMinimunElm(nums) {
//   return Math.min(...nums);
// }
// console.log(findMinimunElm([3, 4, 5, 1, 2]));
// console.log(findMinimunElm([4, 5, 6, 7, 0, 1, 2]));
// console.log(findMinimunElm([11, 13, 15, 17]));
// //Binary sreach
function findMinimunElm(nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = Infinity;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[left] <= nums[mid]) {
      ans = Math.min(nums[left], ans);
      left = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      right = mid - 1;
    }
  }
  return ans;
}
console.log(findMinimunElm([3, 4, 5, 1, 2]));
console.log(findMinimunElm([4, 5, 6, 7, 0, 1, 2]));
console.log(findMinimunElm([11, 13, 15, 17]));
//Time  complexity:O(log n)
// =========================================================================================
//Q 7 Number of Employees Who met the Target
// There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

// The company requires each employee to work for at least target hours.

// You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

// Return the integer denoting the number of employees who worked at least target hours.

// Example 1:

// Input: hours = [0,1,2,3,4], target = 2
// Output: 3
// Explanation: The company wants each employee to work for at least 2 hours.
// - Employee 0 worked for 0 hours and didn't meet the target.
// - Employee 1 worked for 1 hours and didn't meet the target.
// - Employee 2 worked for 2 hours and met the target.
// - Employee 3 worked for 3 hours and met the target.
// - Employee 4 worked for 4 hours and met the target.
// There are 3 employees who met the target.
// Example 2:

// Input: hours = [5,1,4,2,2], target = 6
// Output: 0
// Explanation: The company wants each employee to work for at least 6 hours.
// There are 0 employees who met the target.
//Brute Approach
// function numberOfEmployeesWhoMetTarget(hours, target) {
//   let count = 0;
//   for (let i = 0; i < hours.length; i++) {
//     if (target <= hours[i]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
// console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
//Time complexity: O(n)
function numberOfEmployeesWhoMetTarget(hours, target) {
  return hours.filter((elm) => elm >= target).length;
}
console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
//Time complexity: O(n)
// ======================================================================================
//Q Kids with the greatest number of candies
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.

// Example 1:

// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// Example 2:

// Input: candies = [4,2,1,1,2], extraCandies = 1
// Output: [true,false,false,false,false]
// Explanation: There is only 1 extra candy.
// Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.
// Example 3:

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]
//Brute Approach
function kidsWithCandies(candies, extraCandies) {
  let max = Math.max(...candies);
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      candies[i] = true;
    } else {
      candies[i] = false;
    }
  }
  return candies;
}
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
//Time complexity:O(n)

//With  method
function kidsWithCandies(candies, extraCandies) {
  let max = Math.max(...candies);
  return candies.map((num) => num + extraCandies >= max);
}
console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
//=========================================================================================
//Q find  peak Element
// A peak element is an element that is strictly greater than its neighbors.

// Given a 0-indexed integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

// You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

// You must write an algorithm that runs in O(log n) time.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: 2
// Explanation: 3 is a peak element and your function should return the index number 2.
// Example 2:

// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

function findPeak(nums) {
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i - 1] < nums[i] && nums[i] > nums[i + 1]) {
      return i;
    }
  }
  return -1;
}
console.log(findPeak([1, 2, 3, 1]));
console.log(findPeak([1, 2, 1, 3, 5, 6, 4]));
//Time complexity:O(n)

function findPeak(nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
console.log(findPeak([1, 2, 3, 1]));
console.log(findPeak([1, 2, 1, 3, 5, 6, 4]));
//Time complexity:O(n)
// =====================================================================================
//Q 2 Count Hills and Valleys in an Array
// You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

// Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

// Return the number of hills and valleys in nums.

// Example 1:

// Input: nums = [2,4,1,1,6,5]
// Output: 3
// Explanation:
// At index 0: There is no non-equal neighbor of 2 on the left, so index 0 is neither a hill nor a valley.
// At index 1: The closest non-equal neighbors of 4 are 2 and 1. Since 4 > 2 and 4 > 1, index 1 is a hill.
// At index 2: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 2 is a valley.
// At index 3: The closest non-equal neighbors of 1 are 4 and 6. Since 1 < 4 and 1 < 6, index 3 is a valley, but note that it is part of the same valley as index 2.
// At index 4: The closest non-equal neighbors of 6 are 1 and 5. Since 6 > 1 and 6 > 5, index 4 is a hill.
// At index 5: There is no non-equal neighbor of 5 on the right, so index 5 is neither a hill nor a valley.
// There are 3 hills and valleys so we return 3.
// Example 2:

// Input: nums = [6,6,5,5,4,1]
// Output: 0
// Explanation:
// At index 0: There is no non-equal neighbor of 6 on the left, so index 0 is neither a hill nor a valley.
// At index 1: There is no non-equal neighbor of 6 on the left, so index 1 is neither a hill nor a valley.
// At index 2: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 2 is neither a hill nor a valley.
// At index 3: The closest non-equal neighbors of 5 are 6 and 4. Since 5 < 6 and 5 > 4, index 3 is neither a hill nor a valley.
// At index 4: The closest non-equal neighbors of 4 are 5 and 1. Since 4 < 5 and 4 > 1, index 4 is neither a hill nor a valley.
// At index 5: There is no non-equal neighbor of 1 on the right, so index 5 is neither a hill nor a valley.
// There are 0 hills and valleys so we return 0.

function countHillValley(nums) {
  let count = 0;
  // Filter out consecutive equal numbers
  let filtered = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      filtered.push(nums[i]);
    }
  }
  for (let i = 1; i < filtered.length - 1; i++) {
    if (
      (filtered[i - 1] < filtered[i] && filtered[i] > filtered[i + 1]) || //Hill
      (filtered[i - 1] > filtered[i] && filtered[i] < filtered[i + 1]) //Vallyes
    ) {
      count++;
    }
  }
  return count;
}
console.log(countHillValley([2, 4, 1, 1, 6, 5]));
console.log(countHillValley([6, 6, 5, 5, 4, 1]));
//Time complexity:O(n**2)

//Better Approach
function countHillValley(nums) {
  let result = 0,
    start = 0;
  for (let end = 1; end < nums.length; end++) {
    if (nums[start] !== nums[end]) {
      if (
        (nums[start - 1] < nums[start] && nums[start] > nums[end]) ||
        (nums[start - 1] > nums[start] && nums[start] < nums[end])
      )
        result++;
      start = end;
    }
  }

  return result;
}
console.log(countHillValley([2, 4, 1, 1, 6, 5]));
console.log(countHillValley([6, 6, 5, 5, 4, 1]));
//Time complexity:O(n)

// ====================================================================================
//Q Find indices With Index and Value Difference |
// You are given a 0-indexed integer array nums having length n, an integer indexDifference, and an integer valueDifference.

// Your task is to find two indices i and j, both in the range [0, n - 1], that satisfy the following conditions:

// abs(i - j) >= indexDifference, and
// abs(nums[i] - nums[j]) >= valueDifference
// Return an integer array answer, where answer = [i, j] if there are two such indices, and answer = [-1, -1] otherwise. If there are multiple choices for the two indices, return any of them.

// Note: i and j may be equal.

// Example 1:

// Input: nums = [5,1,4,1], indexDifference = 2, valueDifference = 4
// Output: [0,3]
// Explanation: In this example, i = 0 and j = 3 can be selected.
// abs(0 - 3) >= 2 and abs(nums[0] - nums[3]) >= 4.
// Hence, a valid answer is [0,3].
// [3,0] is also a valid answer.
// Example 2:

// Input: nums = [2,1], indexDifference = 0, valueDifference = 0
// Output: [0,0]
// Explanation: In this example, i = 0 and j = 0 can be selected.
// abs(0 - 0) >= 0 and abs(nums[0] - nums[0]) >= 0.
// Hence, a valid answer is [0,0].
// Other valid answers are [0,1], [1,0], and [1,1].
// Example 3:

// Input: nums = [2,1], indexDifference = 0, valueDifference = 0
// Output: [-1,-1]
// Explanation: In this example, it can be shown that it is impossible to find two indices that satisfy both conditions.
// Hence, [-1,-1] is returned.

function findIndices(nums, indexDifference, valueDifference) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (
        Math.abs(i - j) >= indexDifference &&
        Math.abs(nums[i] - nums[j]) >= valueDifference
      )
        return [i, j];
    }
  }
  return [-1, -1];
}
console.log(findIndices([5, 1, 4, 1], 2, 4));
console.log(findIndices([2, 1], 0, 0));
console.log(findIndices([1, 2, 3], 2, 4));
console.log(findIndices([0], 0, 0));

// ====================================================================================
//Q Number of senior Citizens

// You are given a 0-indexed array of strings details. Each element of details provides information about a given passenger compressed into a string of length 15. The system is such that:

// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.
// Return the number of passengers who are strictly more than 60 years old.

// Example 1:

// Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
// Output: 2
// Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.
// Example 2:

// Input: details = ["1313579440F2036","2921522980M5644"]
// Output: 0
// Explanation: None of the passengers are older than 60.

function countSeniors(details) {
  let count = 0;
  for (let i = 0; i < details.length; i++) {
    if (details[i].slice(-4, -2) >= 60) {
      count++;
    }
  }
  return count;
}
console.log(
  countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010"])
);
console.log(countSeniors(["1313579440F2036", "2921522980M5644"]));

//             <--------------------------------------------------->

//Q Number of unequal Triplets in Array

// You are given a 0-indexed array of positive integers nums. Find the number of triplets (i, j, k) that meet the following conditions:

// 0 <= i < j < k < nums.length
// nums[i], nums[j], and nums[k] are pairwise distinct.
// In other words, nums[i] != nums[j], nums[i] != nums[k], and nums[j] != nums[k].
// Return the number of triplets that meet the conditions.

// Example 1:

// Input: nums = [4,4,2,4,3]
// Output: 3
// Explanation: The following triplets meet the conditions:
// - (0, 2, 4) because 4 != 2 != 3
// - (1, 2, 4) because 4 != 2 != 3
// - (2, 3, 4) because 2 != 4 != 3
// Since there are 3 triplets, we return 3.
// Note that (2, 0, 4) is not a valid triplet because 2 > 0.
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: 0
// Explanation: No triplets meet the conditions so we return 0.

function unequalTriplet(nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      for (let k = j; k < nums.length; k++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          res.push([i, j, k]);
        }
      }
    }
  }
  return res;
}
console.log(unequalTriplet([4, 4, 2, 4, 3]));
console.log(unequalTriplet([1, 1, 1, 1, 1]));
//Time complexity:-O(n**2)

//             <--------------------------------------------------->
//Q count Square Sum Triples
// A square triple (a,b,c) is a triple where a, b, and c are integers and a2 + b2 = c2.

// Given an integer n, return the number of square triples such that 1 <= a, b, c <= n.

// Example 1:

// Input: n = 5
// Output: 2
// Explanation: The square triples are (3,4,5) and (4,3,5).
// Example 2:

// Input: n = 10
// Output: 4
// Explanation: The square triples are (3,4,5), (4,3,5), (6,8,10), and (8,6,10).

//Brute Approach
function countTriples(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      for (let k = 1; k <= n; k++) {
        if (i ** 2 + j ** 2 === k ** 2) {
          count++;
        }
      }
    }
  }
  return count;
}
console.log(countTriples(5));
console.log(countTriples(10));
//Time complexity:O(n**3)

//Better Approach
function countTriples(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (Number.isInteger(Math.sqrt(i * i + j * j))) {
        if (Math.sqrt(i * i + j * j) <= n) {
          count++;
        }
      }
    }
  }
  return count;
}
console.log(countTriples(5));
console.log(countTriples(10));
//Time complexity:O(n**2)

// ==================================================================================
//Q Find the intger Added to Array |
// You are given two arrays of equal length, nums1 and nums2.

// Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.

// As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

// Return the integer x.

// Example 1:

// Input: nums1 = [2,6,4], nums2 = [9,7,5]

// Output: 3

// Explanation:

// The integer added to each element of nums1 is 3.

// Example 2:

// Input: nums1 = [10], nums2 = [5]

// Output: -5

// Explanation:

// The integer added to each element of nums1 is -5.

// Example 3:

// Input: nums1 = [1,1,1,1], nums2 = [1,1,1,1]

// Output: 0

// Explanation:

// The integer added to each element of nums1 is 0.
//Brute Approach
function addInteger(nums1, nums2) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < nums1.length; i++) {
    sum1 = nums1[i];
    sum2 = nums2[i];
  }

  let x = (sum2 - sum1) / nums1.length;
  return x;
}
console.log(addInteger([2, 6, 4], [9, 7, 5]));
console.log(addInteger([10], [5]));
console.log(addInteger([1, 1, 1, 1], [1, 1, 1, 1]));
//Time complexity:O(n)

//with method
function addInteger(nums1, nums2) {
  let sum1 = nums1.reduce((a, b) => a + b, 0);
  let sum2 = nums2.reduce((a, b) => a + b, 0);
  let x = (sum2 - sum1) / nums1.length;
  return x;
}
console.log(addInteger([2, 6, 4], [9, 7, 5]));
console.log(addInteger([10], [5]));
console.log(addInteger([1, 1, 1, 1], [1, 1, 1, 1]));

//with method
function addInteger(nums1, nums2) {
  return Math.max(...nums2) - Math.max(...nums1);
}
console.log(addInteger([2, 6, 4], [9, 7, 5]));
console.log(addInteger([10], [5]));
console.log(addInteger([1, 1, 1, 1], [1, 1, 1, 1]));

// ==================================================================================
//  Q Harshad Number
// An integer divisible by the sum of its digits is said to be a Harshad number. You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.

// Example 1:

// Input: x = 18

// Output: 9

// Explanation:

// The sum of digits of x is 9. 18 is divisible by 9. So 18 is a Harshad number and the answer is 9.

// Example 2:

// Input: x = 23

// Output: -1

// Explanation:

// The sum of digits of x is 5. 23 is not divisible by 5. So 23 is not a Harshad number and the answer is -1.
//Brute Approch
function sumOfTheDigitsOfHarshadNumb(x) {
  let n = x;
  let sum = 0;
  while (n > 0) {
    lastDigit = n % 10;
    sum += lastDigit;
    n = Math.floor(n / 10);
  }
  return x % sum == 0 ? sum : -1;
}
console.log(sumOfTheDigitsOfHarshadNumb(18));
console.log(sumOfTheDigitsOfHarshadNumb(23));

function sumOfTheDigitsOfHarshadNumb(x) {
  let arr = x.toString().split("");
  console.log(arr);

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return x % sum == 0 ? sum : -1;
}
console.log(sumOfTheDigitsOfHarshadNumb(18));
console.log(sumOfTheDigitsOfHarshadNumb(23));
// ============================================================================
// Q SubArray Sum Equlas K

// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Example 1:

// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:

// Input: nums = [1,2,3], k = 3
// Output: 2

//Brute Approach
function subarraySum(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) {
        count++;
      }
    }
  }
  return count;
}
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 2, 1, 2, 1], 3));
//time complexity:O(n**2)

//Better Approach
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const sumMap = new Map();
  sumMap.set(0, 1); // Initialize with sum 0 to handle the case where the subarray starts from index 0

  for (let num of nums) {
    sum += num;

    // Check if there exists a prefix sum that when subtracted from the current sum equals k
    if (sumMap.has(sum - k)) {
      count += sumMap.get(sum - k);
    }

    // Update the sumMap with the current sum
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }

  return count;
}
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 2, 1, 2, 1], 3));
console.log(subarraySum([1], 0));
// time complexity:O(n)

//Optimal Approach
function subarraySum(nums, k) {
  let count = 0;
  let left = 0;
  let right = 0;
  let sum = nums[0];
  while (right < nums.length) {
    while (left <= right && sum > k) {
      sum -= nums[left];
      left++;
    }
    if (sum === k) {
      count++;
    }
    right++;
    if (right < nums.length) sum += nums[right];
  }
  return count;
}
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 2, 1, 2, 1], 3));
console.log(subarraySum([1], 0));
// time complexity:O(2n)

//              <------------------------------------------------>

//Q subarray product less then k

// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0

// //Brute Approach
function subArrayProduct(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let product = 1;
    for (let j = i; j < nums.length; j++) {
      product *= nums[j];
      if (product < k) {
        count++;
      }
    }
  }
  return count;
}
console.log(subArrayProduct([10, 5, 2, 6], 100));
console.log(subArrayProduct([1, 2, 3], 0));
// //Time complexity:O(n**2)

function subArrayProduct(nums, k) {
  let count = 0;
  let product = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (left <= right && product >= k) {
      product /= nums[left];
      left++;
    }

    // Count the number of subarrays ending at 'right' which have a product > k
    count += right - left + 1;
  }

  return count;
}
console.log(subArrayProduct([10, 5, 2, 6], 100));
console.log(subArrayProduct([1, 2, 3], 0));
//time complexity:O(n)

//              <------------------------------------------------>

//Q can place Flowers

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// Example 1:

// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2
// Output: false

function canPlaceFlowers(flowerbed, n) {
  if (n === 0) {
    return true;
  }
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) && // Check left boundary
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      // Check right boundary
      {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  return count >= n;
}
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
//           <-------------------------------------------------->
//Q Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
// Example 2:

// Input: nums = [5], k = 9
// Output: 0

//Brute Approach
// function subarraySumDivibleByK(nums, k) {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;
//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j];
//       if (sum % k === 0) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(subarraySumDivibleByK([4, 5, 0, -2, -3, 1], 5));
// console.log(subarraySumDivibleByK([5], 9));
//time complexity:O(n**2)

function subarraySumDivibleByK(nums, k) {
  let freq = new Array(k).fill(0); //
  freq[0] = 1;

  let sum = 0;
  // The count of wanted subarrays, whose Sum%k= zero
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    let remainder = sum % k;

    if (remainder < 0) remainder += k;

    count += freq[remainder];
    freq[remainder]++;
  }

  return count;
}
console.log(subarraySumDivibleByK([4, 5, 0, -2, -3, 1], 5));
console.log(subarraySumDivibleByK([5], 9));
//time complexity:O(n)
//           <-------------------------------------------------->
//Q Count the Number of vowel String in Range

// You are given a 0-indexed array of string words and two integers left and right.

// A string is called a vowel string if it starts with a vowel character and ends with a vowel character where vowel characters are 'a', 'e', 'i', 'o', and 'u'.

// Return the number of vowel strings words[i] where i belongs to the inclusive range [left, right].

// Example 1:

// Input: words = ["are","amy","u"], left = 0, right = 2
// Output: 2
// Explanation:
// - "are" is a vowel string because it starts with 'a' and ends with 'e'.
// - "amy" is not a vowel string because it does not end with a vowel.
// - "u" is a vowel string because it starts with 'u' and ends with 'u'.
// The number of vowel strings in the mentioned range is 2.
// Example 2:

// Input: words = ["hey","aeo","mu","ooo","artro"], left = 1, right = 4
// Output: 3
// Explanation:
// - "aeo" is a vowel string because it starts with 'a' and ends with 'o'.
// - "mu" is not a vowel string because it does not start with a vowel.
// - "ooo" is a vowel string because it starts with 'o' and ends with 'o'.
// - "artro" is a vowel string because it starts with 'a' and ends with 'o'.
// The number of vowel strings in the mentioned range is 3.

function countVowels(words, left, right) {
  let count = 0;
  let vowels = "aieou";
  for (let i = left; i <= right; i++) {
    let x = vowels.includes(words[i][0]) && vowels.includes(words[i].at(-1));
    if (x === true) {
      count++;
    }
  }
  return count;
}
console.log(countVowels(["are", "amy", "u"], 0, 2));
console.log(countVowels(["hey", "aeo", "mu", "ooo", "artro"], 1, 4));
//time complexity:O(n)

//           <-------------------------------------------------->
//Q Binary subarrays with sum

// Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

// A subarray is a contiguous part of the array.

// Example 1:

// Input: nums = [1,0,1,0,1], goal = 2
// Output: 4
// Explanation: The 4 subarrays are bolded and underlined below:
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// [1,0,1,0,1]
// Example 2:

// Input: nums = [0,0,0,0,0], goal = 0
// Output: 15

// brute Approach
function numSubarraysWithSum(nums, goal) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum === goal) {
        count++;
      }
    }
  }
  return count;
}
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
//time complexity:O(n**2)

//Better Approach
function numSubarraysWithSum(nums, goal) {
  let count = 0;
  let sum = 0;
  let prefixSum = new Map();
  prefixSum.set(0, 1);
  for (let num of nums) {
    sum += num;
    if (prefixSum.has(sum - goal)) {
      count += prefixSum.get(sum - goal);
    }
    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }
  return count;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
//time complexity:O(n)
//space complexity:O(n)

//optimal Approach
function numSubarraysWithSum(nums, goal) {
  let count = 0;
  let l = 0;
  let sum = 0;
  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum > goal) {
      sum -= nums[l];
      l++;
    }
    if (sum === goal) {
      count++;
    }

    let temp = l;
    while (temp < r && nums[temp] === 0) {
      count++;
      temp++;
    }
  }
  return count;
}
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
//time complexity:O(n)
//time complexity:O(n)

//    <-------------------------------------------------------->

//Q  longest substring wihtout repeating characters

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

//optimal approach
function longestSubString(s) {
  let l = 0;
  let r = 0;
  let maxLength = 0;
  let hash = {};
  while (r < s.length) {
    if (hash[s[r]] !== -1) {
      if (hash[s[r]] >= l) {
        l = hash[s[r]] + 1;
      }
    }
    len = r - l + 1;
    maxLength = Math.max(maxLength, len);
    hash[s[r]] = r;
    r++;
  }
  return maxLength;
}
console.log(longestSubString("abcabcbb"));
console.log(longestSubString("bbbbb"));
console.log(longestSubString("pwwkew"));
//time complexity:O(n)
