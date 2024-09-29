class Solution {
    public String getFreqString(String str) {
        int[] freq = new int[26];

        for(char c : str.toCharArray()) {
            freq[c-'a']++;
        }

        StringBuilder freqString = new StringBuilder("");
        char c = 'a';
        for(int i : freq) {
            freqString.append(c);
            freqString.append(i);
        }

        return freqString.toString();
    }

    public List<List<String>> groupAnagrams(String[] strs) {
        if(strs.length == 0 || strs == null) {
            return new ArrayList();
        }

        HashMap<String, List<String>> map = new HashMap();

        for(String str : strs) {
            String freqString = getFreqString(str);

            if(map.containsKey(freqString)) {
                map.get(freqString).add(str);
            } else {
                List<String> strList = new ArrayList();
                strList.add(str);
                map.put(freqString, strList);
            }
        }

        return new ArrayList(map.values());
    }
}