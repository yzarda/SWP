import java.util.Random;

public class BubbleSortBenchmark {
    public static void main(String[] args) {
        int n = 1_000_000; // Anzahl der Werte
        int[] array1 = new int[n];
        int[] array2 = new int[n];
        int[] array3 = new int[n];
        
        Random random = new Random();
        
        // Arrays mit Zufallswerten füllen
        for (int i = 0; i < n; i++) {
            array1[i] = random.nextInt(1000); // Zahlen
            array2[i] = random.nextInt(1000); // Zusätzliche gekoppelte Zahlen
            array3[i] = random.nextInt(1000); // Weitere gekoppelte Werte
        }
        
        // Zeitmessung starten
        long startTime = System.currentTimeMillis();
        
        // Bubble Sort Algorithmus
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;
            for (int j = 0; j < n - i - 1; j++) {
                if (array1[j] > array1[j + 1]) {
                    // Tauschen in allen Arrays
                    int temp = array1[j];
                    array1[j] = array1[j + 1];
                    array1[j + 1] = temp;
                    
                    temp = array2[j];
                    array2[j] = array2[j + 1];
                    array2[j + 1] = temp;
                    
                    temp = array3[j];
                    array3[j] = array3[j + 1];
                    array3[j + 1] = temp;
                    
                    swapped = true;
                }
            }
            if (!swapped) break; // Abbrechen, wenn keine Vertauschung mehr stattfindet
        }
        
        // Zeitmessung beenden
        long endTime = System.currentTimeMillis();
        
        // Zeit in Millisekunden berechnen
        long executionTime = endTime - startTime;
        
        System.out.println("Sortierung von 1 Million Werten abgeschlossen.");
        System.out.println("Ausführungszeit: " + executionTime + " ms");
    }
    
}
