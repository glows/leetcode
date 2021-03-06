var nums = [13,2,0,-14,-20,19,8,-5,-13,-3,20,15,20,5,13,14,-17,-7,12,-6,0,20,-19,-1,-15,-2,8,-2,-9,13,0,-3,-18,-9,-9,-19,17,-14,-19,-4,-16,2,0,9,5,-7,-4,20,18,9,0,12,-1,10,-17,-11,16,-13,-14,-3,0,2,-18,2,8,20,-15,3,-13,-12,-2,-19,11,11,-10,1,1,-10,-2,12,0,17,-19,-7,8,-19,-17,5,-5,-10,8,0,-12,4,19,2,0,12,14,-9,15,7,0,-16,-5,16,-12,0,2,-16,14,18,12,13,5,0,5,6],
    target = -59;

var threeSumClosest = function (nums, target) {
  var result, diff, tmp, left, right;
  nums.sort(function (a, b) {
    return parseInt(a) < parseInt(b) ? -1 : 1;
  });
  for (var i = 0, l = nums.length; (i < l - 2 && diff !== 0); ++i) {
    for (left = i + 1, right = l - 1; (left < right && diff !== 0);) {
      tmp = nums[i] + nums[left] + nums[right];
      if (diff) {
        if (tmp > target) {
          if (tmp - target <= diff) {
            result = tmp;
            diff = tmp - target;
          }
          while (nums[right - 1] === nums[right]) --right;
          --right;
        } else if (tmp < target) {
          if (target - tmp <= diff) {
            result = tmp;
            diff = target - tmp;
          }
          while (nums[left + 1] === nums[left]) ++left;
          ++left;
        } else {
          result = target;
          diff = 0;
        }
      } else {
        result = tmp;
        diff = Math.abs(target - result);
      }
    }
  }
  return result;
};

console.log(threeSumClosest(nums, target));
