class Solution {
    public int noOfDaysToLoadShip(int[] weights, int capacity) {
        int load = 0;
        int days = 1;

        for(int i = 0; i < weights.length; i++) {
            if(load + weights[i] > capacity) {
                days = days + 1;
                load = weights[i];
            } else {
                load += weights[i];
            }
        }

        return days;
    }

    public int shipWithinDays(int[] weights, int days) {
        int n = weights.length;
        int s = Arrays.stream(weights).max().getAsInt();
        int e = Arrays.stream(weights).sum();

        while(s<=e) {
            int m = (s+e)/2;
            int noOfDays = noOfDaysToLoadShip(weights, m);

            if (noOfDays > days) {
                s = m+1;
            } else {
                e = m-1;
            }
        }

        return s;
    }
}