package hu.schdesign.solarboat.model;

import hu.schdesign.solarboat.model.Boat.Error;

import java.util.ArrayList;
import java.util.List;

public class ResponseBoatData {
    private ArrayList<ArrayList<dataPair<String, Integer>>> tilt;
    private ArrayList<ArrayList<dataPair<String, Integer>>> acceleration;
    private ArrayList<ArrayList<dataPair<String, Integer>>> compass;
    private ArrayList<ArrayList<dataPair<String, Integer>>> battery;
    private ArrayList<ArrayList<dataPair<String, Integer>>> motor;
    private ArrayList<Error> errors = new ArrayList<>();
    private String id;
    private  boolean isLast = false;

    public ResponseBoatData(){}

    public ArrayList<ArrayList<dataPair<String, Integer>>> getTilt() {
        return tilt;
    }

    public ArrayList<ArrayList<dataPair<String, Integer>>> getAcceleration() {
        return acceleration;
    }

    public ArrayList<ArrayList<dataPair<String, Integer>>> getCompass() {
        return compass;
    }

    public ArrayList<ArrayList<dataPair<String, Integer>>> getBattery() {
        return battery;
    }

    public ArrayList<ArrayList<dataPair<String, Integer>>> getMotor() {
        return motor;
    }

    public ArrayList<Error> getErrors() {
        return errors;
    }


    public void setTilt(ArrayList<ArrayList<dataPair<String, Integer>>> tilt) {
        this.tilt = tilt;
    }

    public void setAcceleration(ArrayList<ArrayList<dataPair<String, Integer>>> acceleration) {
        this.acceleration = acceleration;
    }

    public void setCompass(ArrayList<ArrayList<dataPair<String, Integer>>> compass) {
        this.compass = compass;
    }

    public void setBattery(ArrayList<ArrayList<dataPair<String, Integer>>> battery) {
        this.battery = battery;
    }

    public void setMotor(ArrayList<ArrayList<dataPair<String, Integer>>> motor) {
        this.motor = motor;
    }

    public void setErrors(ArrayList<Error> errors) {
        this.errors = errors;
    }

    public boolean isLast() {
        return isLast;
    }

    public void setLast(boolean last) {
        isLast = last;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
}
