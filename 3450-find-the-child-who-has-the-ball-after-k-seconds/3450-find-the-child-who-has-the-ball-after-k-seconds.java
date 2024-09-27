class Solution {
    public int numberOfChild(int n, int k) {
        int secPerRound = n-1;
        int rounds = k / secPerRound;
        int index = k % secPerRound;

        if (rounds % 2 == 0) {
            return index;
        } else {
            return n-1-index;
        }
    }
}