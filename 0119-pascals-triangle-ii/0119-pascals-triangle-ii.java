class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> prev = new ArrayList();
        prev.add(1);

        for(int r = 1; r <= rowIndex; r++) {
            List<Integer> curr = new ArrayList();
            curr.add(1);

            for(int i = 1; i < prev.size(); i++) {
                curr.add(prev.get(i-1) + prev.get(i));
            }

            curr.add(1);
            prev = curr;
        }

        return prev;
    }
}