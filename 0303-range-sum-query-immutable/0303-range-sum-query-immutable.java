class NumArray {

    int[] arr;

    public NumArray(int[] nums) {
        arr = nums;
    }
    
    public int sumRange(int left, int right) {
        int n = arr.length;
        int[] preSum = new int[n];
        int sum = 0;
        int ans = 0;
        
        // Calculate the prefix sum 
        for (int i = 0; i < n; i++) {
            sum += arr[i];
            preSum[i] = sum;
        }

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