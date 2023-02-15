// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

function TwoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        if(target === nums[i]){
            return i;
        } else {
            for(let j = i+1; j < nums.length; j++){
                if(target === nums[i] + nums[j]){
                    console.log(i,j)
                    return [i,j];
                } 
            }
        }
    }
}

TwoSum([2,7,11,15], 9)
