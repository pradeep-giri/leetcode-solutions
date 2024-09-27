class Solution {
    public int lengthOfLongestSubstring(String s) {
        int n = s.length();

        HashMap<Character, Integer> map = new HashMap();

        int i = 0;
        int maxLen = 0;

        for(int j = 0; j < n; j++) {
            if(map.containsKey(s.charAt(j))) {
                if(map.get(s.charAt(j)) >= i) {
                    i = map.get(s.charAt(j)) + 1;
                }
            }
            map.put(s.charAt(j), j);
            maxLen = Math.max(maxLen, j-i+1);
        }

        return maxLen;
    }
}