package at.yil.algorithms;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Controller {
    private Sorter currentSorter;
    private List<Sorter> availableSorters = new ArrayList<>();
    private int[] arrayToSort = DataGenerator.generateDataArray(1000, 0, 1000);

    public void run() {
        Scanner scanner = new Scanner(System.in);
        boolean isGoing = true;
        BubbleSort bubbleSort = new BubbleSort("BubbleSort");
        InsertionSort insertionSort = new InsertionSort("InsertionSort");
        SelectionSort selectionSort = new SelectionSort("SelectionSort");
        this.availableSorters.add(bubbleSort);
        this.availableSorters.add(insertionSort);
        this.availableSorters.add(selectionSort);
        this.currentSorter = bubbleSort;
        while (isGoing) {
            System.out.println("Enter a number to make the following actions:");
            System.out.println("1 - Choose a sorting algorithm");
            System.out.println("2 - Execute a sorting operation");
            System.out.println("3 - Create random list of length n");
            int selectionNumber = scanner.nextInt();
            switch (selectionNumber) {
                case 1:
                    changeSorter();
                    break;
                case 2:
                    sortArray(this.currentSorter, this.arrayToSort);
                    break;
                case 3:
                    createRandomArray();
                    break;
                default:
                    System.out.println("The selection is not valid. Please write down a correct number.");
                    break;
            }
        }
    }

    public void sortArray(Sorter sorter, int[] array) {
        long start = System.nanoTime();
        int[] sortedArray = sorter.sort(array);
        long end = System.nanoTime();
        DataGenerator.printArray(sortedArray);
        System.out.println(sorter.getName() + ": " + (end - start) / 1_000_000.00 + " ms");
    }

    public void changeSorter() {
        while (true) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("You can choose between the following sorters:");
            for (int i = 0; i < this.availableSorters.size(); i++) {
                System.out.println((i + 1) + ": " + this.availableSorters.get(i).getName());
            }
            System.out.println("Please choose an algorithm by typing its index.");
            int selectionNumber = scanner.nextInt();
            if (selectionNumber < 1 || selectionNumber > this.availableSorters.size()) {
                System.out.println("The given index is not valid. Please try again.");
            } else {
                setCurrentSorter(this.availableSorters.get(selectionNumber - 1));
                System.out.println("Algorithm has been changed to Sorter #" + selectionNumber + " -"
                        + this.currentSorter.getName());
                break;
            }
        }
    }

    public void createRandomArray() {
        boolean isGoing = true;
        while (isGoing) {
            System.out.println("You can choose to generate the random array by the following options:");
            System.out.println("1 - Create a random array of length n");
            System.out.println("2 - Create a random array of length n with numbers between specified min and max");
            Scanner scanner = new Scanner(System.in);
            int selectionNumber = scanner.nextInt();
            switch (selectionNumber) {
                case 1:
                    System.out.println("Please specify the length of the array");
                    int lengthOfArray = scanner.nextInt();
                    if (lengthOfArray < 1) {
                        System.out.println("Please choose a length of at least 1s");
                    } else {
                        this.arrayToSort = DataGenerator.generateDataArray(lengthOfArray);
                        isGoing = false;
                    }
                    break;
                case 2:
                    System.out.println("Please specify the length of the array");
                    lengthOfArray = scanner.nextInt();
                    if (lengthOfArray < 1) {
                        System.out.println("Please choose a length of at least 1");
                        break;
                    }

                    System.out.println("Please specify the minimum value");
                    int minOfArray = scanner.nextInt();

                    System.out.println("Please specify the maximum value");
                    int maxOfArray = scanner.nextInt();
                    if (minOfArray > maxOfArray) {
                        System.out.println("Maximum has to be greater than or equal minimum valu");
                        break;
                    }

                    this.arrayToSort = DataGenerator.generateDataArray(lengthOfArray, minOfArray, maxOfArray);
                    isGoing = false;
                    break;
                default:
                    System.out.println("Please choose a valid option.");
                    break;
            }
        }
    }

    public Sorter getCurrentSorter() {
        return this.currentSorter;
    }

    public void setCurrentSorter(Sorter sorter) {
        this.currentSorter = sorter;
    }

    public void setArrayToSort(int[] newArray) {
        this.arrayToSort = newArray;
    }

    public int[] getArrayToSort() {
        return this.arrayToSort;
    }
}