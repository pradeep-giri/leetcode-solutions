class Solution {
    public int leastBricks(List<List<Integer>> wall) {
        HashMap<Integer, Integer> map = new HashMap();
        int rows = wall.size();

        for(int i = 0; i < rows; i++) {
            int brickCount = wall.get(i).size();
            int preSum = 0;
            for (int j = 0; j < brickCount - 1; j++) {
                preSum += wall.get(i).get(j);
                map.put(preSum, map.getOrDefault(preSum, 0) + 1);
            }
        }

        int gap = 0;
        for (Integer value : map.values()) {
            gap = Math.max(gap, value);
        }

        return rows-gap;
    }
}