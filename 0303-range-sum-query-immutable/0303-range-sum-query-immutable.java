class NumArray {

    int[] preSum;

    public NumArray(int[] nums) {
        int n = nums.length;
        preSum = new int[n];
        int sum = 0;
        
        // Calculate the prefix sum 
        for (int i = 0; i < n; i++) {
            sum += nums[i];
            preSum[i] = sum;
        }
    }
    
    public int sumRange(int left, int right) {
        if (left-1 < 0) {
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