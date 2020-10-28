package hu.schdesign.solarboat.model.Boat;

import java.util.ArrayList;

public class DataAnalysis {
    private Double average;
    private Integer max;
    private Integer min;
    private ArrayList<Integer> localMaxPoints;
    private ArrayList<Integer> localMinPoints;
    private String name;

    public Double getAverage() {
        return average;
    }

    public void setAverage(Double average) {
        this.average = average;
    }

    public Integer getMax() {
        return max;
    }

    public void setMax(Integer max) {
        this.max = max;
    }

    public Integer getMin() {
        return min;
    }

    public void setMin(Integer min) {
        this.min = min;
    }

    public ArrayList<Integer> getLocalMaxPoints() {
        return localMaxPoints;
    }

    public void setLocalMaxPoints(ArrayList<Integer> localMaxPoints) {
        this.localMaxPoints = localMaxPoints;
    }

    public ArrayList<Integer> getLocalMinPoints() {
        return localMinPoints;
    }

    public void setLocalMinPoints(ArrayList<Integer> localMinPoints) {
        this.localMinPoints = localMinPoints;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
