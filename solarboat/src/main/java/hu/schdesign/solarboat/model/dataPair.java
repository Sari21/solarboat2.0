package hu.schdesign.solarboat.model;

public class dataPair {
    private final long x;
    private final int y;
    dataPair(long id, int data){
        this.y = data;
        this.x = id;
    }

    public long getX() {
        return x;
    }

    public int getY() {
        return y;
    }
}
