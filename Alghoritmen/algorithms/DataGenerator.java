package at.yil.algorithms;

import java.util.Random;

public class DataGenerator {
    public static int[] generateDataArray(int size) {
        int[] data = new int[size];
        Random random = new Random();
        for (int i = 0; i < size; i++) {
            data[i] = random.nextInt();
        }
        return data;
    }

    public static int[] generateDataArray(int size, int min, int max) {
        int[] data = new int[size];
        Random random = new Random();
        for (int i = 0; i < size; i++) {
            data[i] = random.nextInt(min, max + 1);
        }
        return data;
    }

    public static void printArray(int[] data) {
        for (int i = 0; i < data.length; i++) {
            System.out.print(data[i] + " ");
        }
        System.out.println();
    }
}
