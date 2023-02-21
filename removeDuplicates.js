// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same.

function removeDuplicates(nums){
    let results = new Set(nums);
    let res = [...results]
    let lengthToLoop = nums.length - res.length;
    for(let i = 0; i < lengthToLoop; i++){
        res.push('_');
    }
    nums = res;
    return lengthToLoop,nums;
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);