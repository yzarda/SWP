package at.yil.camera;

import java.util.ArrayList;

public class SDCard {
    private double capacityInMb;
    private ArrayList<File> files = new ArrayList<File>();

    public SDCard(double capacityInMb) {
        this.capacityInMb = capacityInMb;
    }

    public void saveFile(File file) {
        if (getFreeSpace() >= file.getSizeInMb()) {
            this.files.add(file);
            System.out.println("File has been saved under the name " + file.getName());
        } else {
            System.out.println("There is no more free space available!");
        }
    }

    public void printAllFiles() {
        if (this.files.size() < 1) {
            System.out.println("There are currently no files.");
            return;
        }
        for (File file : this.files) {
            System.out.println("Name: " + file.getName() + ", Size: " + file.getSizeInMb() + " MB");
        }
    }

    public double getFreeSpace() {
        double occupiedCapacity = 0;
        for (File file : this.files) {
            occupiedCapacity += file.getSizeInMb();
        }
        return this.capacityInMb - occupiedCapacity;
    }

    public double getCapacityInMb() {
        return capacityInMb;
    }

    public ArrayList<File> getFiles() {
        return files;
    }
}
