package at.yil.camera;

import java.util.*;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.Instant;

public class Camera {
    public enum RESOLUTION {
        LOW, MEDIUM, HIGH
    };

    private double weight;
    private String color;
    private RESOLUTION currentResolution;
    private Manufacturer manufacturer;
    private SDCard sdCard;
    private Lens lens;

    public Camera(double weight, String color, RESOLUTION currentResolution, Manufacturer manufacturer, SDCard sdCard,
            Lens lens) {
        this.weight = weight;
        this.color = color;
        this.currentResolution = currentResolution;
        this.manufacturer = manufacturer;
        this.sdCard = sdCard;
        this.lens = lens;
    }

    public void takePicture() {
        if (this.sdCard == null) {
            System.err.println("There is currently no SD Card available.");
            return;
        }

        int fileSize = 0;
        switch (this.currentResolution) {
            case HIGH:
                fileSize = 6;
                break;
            case MEDIUM:
                fileSize = 4;
                break;
            case LOW:
                fileSize = 2;
                break;
            default:
                System.err.println("This resolution selection does not exist.");
                break;
        }

        LocalDateTime currentDateTime = LocalDateTime.now();
        ZonedDateTime zonedDateTime = currentDateTime.atZone(ZoneId.systemDefault());
        Instant instant = zonedDateTime.toInstant();
        Date currentDate = Date.from(instant);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd-HH-mm-ss-SSS");
        String formattedDate = currentDateTime.format(formatter) + ".jpg";

        File file = new File(formattedDate, currentDate, fileSize);
        this.sdCard.saveFile(file);
    }

    public double getWeight() {
        return weight;
    }

    public String getColor() {
        return color;
    }

    public RESOLUTION getCurrentResolution() {
        return currentResolution;
    }

    public Manufacturer getManufacturer() {
        return manufacturer;
    }

    public SDCard getSdCard() {
        return sdCard;
    }

    public Lens getLens() {
        return lens;
    }

    public void setCurrentResolution(RESOLUTION currentResoultion) {
        this.currentResolution = currentResoultion;
    }

    public void setSdCard(SDCard sdCard) {
        this.sdCard = sdCard;
    }

    public void setLens(Lens lens) {
        this.lens = lens;
    }
}
