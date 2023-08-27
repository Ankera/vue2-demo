// 空间换时间 way2 (Hash)  按hash表存储
const twoSum = (nums, target) => {
    nums = [0, ...nums]
    // 1. 构造哈希表
    const map = new Map(); // 存储方式 {need, index}

    // 2. 遍历数组
    for (let i = 0; i < nums.length; i++) {
        // 2.1 如果找到 target - nums[i] 的值
        if (map.has(nums[i])) {
            return [map.get(nums[i]), nums[i]];
        } else {
            // 2.2 如果没找到则进行设置
            map.set(target - nums[i], nums[i]);//把i需要的那个数的hash表的位置填上i =>对应上面get(nums[i])
        }
    }
};
var numbers = [3,2,4]
console.log(twoSum(numbers, 6))
