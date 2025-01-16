package at.yil.algorithms;

public class BubbleSort implements Sorter {
    private String name;

    public BubbleSort(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public int[] sort(int[] array) {
        for (int i = 0; i < array.length; i++) {
            for (int j = 0; j < array.length - i - 1; j++) {
                if (array[j + 1] < array[j]) {
                    int temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                }
            }
        }
        return array;
    }
}
