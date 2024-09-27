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
        int low = Arrays.stream(weights).max().getAsInt();
        int high = Arrays.stream(weights).sum();

        while(low <= high) {
            int capacity = (low+high)/2;
            int noOfDays = noOfDaysToLoadShip(weights, capacity);

            if (noOfDays > days) {
                low = capacity+1;
            } else {
                high = capacity-1;
            }
        }

        return low;
    }
}