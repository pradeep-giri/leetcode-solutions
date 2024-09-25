class NumArray {

    int[] preSum;

    public NumArray(int[] nums) {      
        // Calculate the prefix sum 
        for (int i = 1; i < nums.length; i++) {
            nums[i] += nums[i-1];
        }
        this.preSum = nums;
    }
    
    public int sumRange(int left, int right) {
        if (left == 0) {
            return preSum[right];
        } else {
            return preSum[right] - preSum[left-1];
        }
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray obj = new NumArray(nums);
 * int param_1 = obj.sumRange(left,right);
 */