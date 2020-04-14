package hu.schdesign.solarboat.model;

public class dataPair {
    private final long name;
    private final int value;
    dataPair(long id, int data){
        this.name = id;
        this.value = data;
    }

    public long getName() {
        return name;
    }

    public int getValue() {
        return value;
    }
}
