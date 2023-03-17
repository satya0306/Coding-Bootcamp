// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.

function searchInsertPosition(nums, target){
    if(nums[0]>target) return 0;
    for(let i=0; i<nums.length;i++){
        if(nums[i] === target) return i;
        if(nums[i] && nums[i+1]){
            if(nums[i] < target && nums[i+1] > target){
                return i+1
            }
        } else {
            return i+1
        }
    }
}

searchInsertPosition([1,3,4,5,8,9],10) // 64/65 cases passed 

// it can also be implemented using binary search

function binarySerachMethod(nums, target){
    let lo = 0; 
    let hi = nums.length; // hi = 6
    while(lo < hi){ // 0<6, 0 < 3
        let mid = lo + Math.floor((hi - lo) / 2); // mid = 0 + 3 = 3 , mid = 0 + 1 = 1
        if(target > nums[mid]){ // 3 > nums[3] , 3 > 5 --> fail, 3
            lo = mid + 1;
        } else {
            hi = mid // hi = 3
        }
    }
    return lo;
}

binarySerachMethod([1,3,4,5,8,9],3)