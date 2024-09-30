class Solution {
    private void backtrack(List<List<Integer>> resultList, List<Integer> tempList, int[] nums) {
        // If we match the length, its an permutation
        if(tempList.size() == nums.length) {
            resultList.add(new ArrayList<>(tempList));
            return;
        }

        for(int num : nums) {
            // Skip if we get same element
            if(tempList.contains(num)) continue;

            // Add the new element
            tempList.add(num);

            // Go back to try another element
            backtrack(resultList, tempList, nums);
            
            // Remove the element
            tempList.remove(tempList.size() - 1);
        }
    }

    public List<List<Integer>> permute(int[] nums) {
        List<List<Integer>> resultList = new ArrayList<>();

        backtrack(resultList, new ArrayList<>(), nums);

        return resultList;
    }
}