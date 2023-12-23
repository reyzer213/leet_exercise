/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numIndices = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;

        if (numIndices.hasOwnProperty(complement)) {
            return [numIndices[complement], i];
        }

        numIndices[num] = i;
    }
};

// Example usage:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output will be [0, 1] since nums[0] + nums[1] = 2 + 7 = 9
