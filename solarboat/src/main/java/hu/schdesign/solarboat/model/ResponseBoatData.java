package hu.schdesign.solarboat.model;

import hu.schdesign.solarboat.model.Boat.DataAnalysis;
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
    private ArrayList<DataAnalysis> tiltAnalysis;
    private ArrayList<DataAnalysis> accelerationAnalysis;
    private ArrayList<DataAnalysis> compassAnalysis;
    private ArrayList<DataAnalysis> batteryAnalysis;
    private ArrayList<DataAnalysis> motorAnalysis;

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

    public ArrayList<DataAnalysis> getTiltAnalysis() {
        return tiltAnalysis;
    }

    public void setTiltAnalysis(ArrayList<DataAnalysis> tiltAnalysis) {
        this.tiltAnalysis = tiltAnalysis;
    }

    public ArrayList<DataAnalysis> getAccelerationAnalysis() {
        return accelerationAnalysis;
    }

    public void setAccelerationAnalysis(ArrayList<DataAnalysis> accelerationAnalysis) {
        this.accelerationAnalysis = accelerationAnalysis;
    }

    public ArrayList<DataAnalysis> getCompassAnalysis() {
        return compassAnalysis;
    }

    public void setCompassAnalysis(ArrayList<DataAnalysis> compassAnalysis) {
        this.compassAnalysis = compassAnalysis;
    }

    public ArrayList<DataAnalysis> getBatteryAnalysis() {
        return batteryAnalysis;
    }

    public void setBatteryAnalysis(ArrayList<DataAnalysis> batteryAnalysis) {
        this.batteryAnalysis = batteryAnalysis;
    }

    public ArrayList<DataAnalysis> getMotorAnalysis() {
        return motorAnalysis;
    }

    public void setMotorAnalysis(ArrayList<DataAnalysis> motorAnalysis) {
        this.motorAnalysis = motorAnalysis;
    }
}
