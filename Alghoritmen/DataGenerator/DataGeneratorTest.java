package at.yil.algorithms.dataGenerator;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class DataGeneratorTest {
    @Test
    void testGenerateDataArray() {
        int[] data = DataGenerator.generateDataArray(10);
        Assertions.assertEquals(data.length, 10);
    }

    @Test
    void testGenerateDataArray2() {
        int[] data = DataGenerator.generateDataArray(1000, 0, 10);
        Assertions.assertEquals(data.length, 1000);
        for (int i = 0; i < data.length; i++) {
            Assertions.assertTrue(data[i] >= 0);
            Assertions.assertTrue(data[i] <= 10);
        }
    }

    @Test
    void testPrintArray() {
        int[] data = DataGenerator.generateDataArray(10, 0, 10);
        DataGenerator.printArray(data);    
    }
}