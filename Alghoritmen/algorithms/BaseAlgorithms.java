package at.yil.algorithms;

public class BaseAlgorithms {
    public static int[] revert(int[] data) {
        int[] dataReversed = new int[data.length];
        for (int i = 0; i < data.length; i++) {
            dataReversed[i] = data[data.length - 1 - i];
        }
        return dataReversed;
    }

    public static int max(int[] data) {
        int max = data[0];
        for (int i = 1; i < data.length; i++) {
            if (data[i] > max) {
                max = data[i];
            }
        }
        return max;
    }

    public static int min(int[] data) {
        int min = data[0];
        for (int i = 1; i < data.length; i++) {
            if (data[i] < min) {
                min = data[i];
            }
        }
        return min;
    }
}
