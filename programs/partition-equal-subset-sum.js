var canPartition = function(nums) {
  var sum = 0, dp = [[0]];
  nums.forEach(function (num, index) {
    dp[index + 1] = [0];
    sum += num;
  });

  if (sum % 2) return false;
  sum /= 2;

  var flag = false;
  for (var i = 1; i <= nums.length; ++i) {
    var exist = { 0: true };
    flag = false;
    for (var j = 0; j < dp[i - 1].length; ++j) {
      if (dp[i - 1][j] === sum || dp[i - 1][j] + nums[i - 1] === sum) {
        flag = true;
        break;
      } else {
        if (!exist[dp[i - 1][j]]) {
          exist[dp[i - 1][j]] = true;
          dp[i].push(dp[i - 1][j]);
        }
        if (!exist[dp[i - 1][j] + nums[i - 1]]) {
          exist[dp[i - 1][j] + nums[i - 1]] = true;
          dp[i].push(dp[i - 1][j] + nums[i - 1]);
        }
      }
    }
    if (flag) break;
  }

  return flag;
};

console.log(canPartition([1,2,5]));
console.log(canPartition([1, 5, 11, 5]));
console.log(canPartition([1, 2, 3, 5]));
console.log(canPartition([3,3,3,4,5]));
console.log(canPartition([74,95,89,56,83,77,58,40,8,74,37,64,89,85,51,35,5,35,79,99,95,94,38,78,39,49,36,1,39,68,41,25,12,36,24,98,34,19,9,89,48,30,47,42,49,53,18,99,52,86,59,28,56,99,34,1,11,43,75,13,29,84,92,14,13,38,14,85,16,24,20,31,96,30,88,95,90,69,73,42,47,23,67,56,85,10,97,59,98,19,10,10,25,39,1,14,9,4,76]));