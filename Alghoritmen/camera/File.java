package at.yil.camera;

import java.util.Date;

public class File {
    private String name;
    private Date createdAt;
    private double sizeInMb;

    public File(String name, Date createdAt, double sizeInMb) {
        this.name = name;
        this.createdAt = createdAt;
        this.sizeInMb = sizeInMb;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public String getName() {
        return name;
    }

    public double getSizeInMb() {
        return sizeInMb;
    }
}