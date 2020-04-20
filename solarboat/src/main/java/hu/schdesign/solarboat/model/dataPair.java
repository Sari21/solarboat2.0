package hu.schdesign.solarboat.model;

public class dataPair<T, U> {
    private final T name;
    private final U value;
    public dataPair(T id, U data){
        this.name = id;
        this.value = data;
    }

    public T getName() {
        return name;
    }

    public U getValue() {
        return value;
    }
}
