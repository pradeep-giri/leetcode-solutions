class Solution {
    private void swap(int[] nums, int i, int j) {
        int temp = nums[j];
        nums[j] = nums[i];
        nums[i] = temp;
    }

    public int removeElement(int[] nums, int val) {
        int i = 0;
        int j = nums.length - 1;

        while(i <= j) {
            if(nums[i] == val) {
                swap(nums, i, j);
                j--;
            } else {
                i++;
            }
        }
        return i;
    }
}