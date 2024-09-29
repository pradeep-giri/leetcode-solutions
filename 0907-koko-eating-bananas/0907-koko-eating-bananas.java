class Solution {
    public int maxHigh(int[] piles) {
        int maxPile = Integer.MIN_VALUE;
        for(int i = 0; i < piles.length; i++) {
            maxPile = Math.max(maxPile, piles[i]);
        }

        return maxPile;
    }

    public int eatingSpeed(int[] piles, int hourly) {
        int totalHour = 0;
        for(int i = 0; i < piles.length; i++) {
            totalHour += Math.ceil((double)piles[i] / (double)hourly);
        }
        return totalHour;
    }

    public int minEatingSpeed(int[] piles, int h) {
        int low = 1; int high = maxHigh(piles);

        while(low <= high) {
            int mid = (low + high) / 2;
            int totalHour = eatingSpeed(piles, mid);

            if(totalHour <= h) {
                high = mid-1;
            } else {
                low = mid+1;
            }
        }

        return low;
    }
}