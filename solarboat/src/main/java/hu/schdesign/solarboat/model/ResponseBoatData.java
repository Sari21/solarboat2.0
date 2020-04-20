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
    //extra temps???
    public ResponseBoatData(DataGroup dataGroup){
        ArrayList<ArrayList<dataPair<String, Integer>>> tiltTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<String, Integer>>> accelerationTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<String, Integer>>> compassTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<String, Integer>>> batteryTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<String, Integer>>> motorTemp = new ArrayList<>();


        ArrayList<dataPair<String, Integer>> x = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> y = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> z = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> ax = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> ay = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> az = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> cx = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> cy = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> cz = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> in = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> out = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> SoC = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> temp = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> RmP = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> mTemp = new ArrayList<>();

        for(BoatData bd : dataGroup.getBoatDataList()){
            id = bd.getDate();
            x.add(new dataPair<String, Integer>(id, bd.getTilt().getX()));
            y.add(new dataPair<String, Integer>(id, bd.getTilt().getY()));
            z.add(new dataPair<String, Integer>(id, bd.getTilt().getZ()));

            ax.add(new dataPair<String, Integer>(id, bd.getAcceleration().getX()));
            ay.add(new dataPair<String, Integer>(id, bd.getAcceleration().getY()));
            az.add(new dataPair<String, Integer>(id, bd.getAcceleration().getZ()));

            cx.add(new dataPair<String, Integer>(id, bd.getCompass().getX()));
            cy.add(new dataPair<String, Integer>(id, bd.getCompass().getY()));
            cz.add(new dataPair<String, Integer>(id, bd.getCompass().getZ()));

            in.add(new dataPair<String, Integer>(id, bd.getBattery().getIn()));
            out.add(new dataPair<String, Integer>(id, bd.getBattery().getOut()));
            SoC.add(new dataPair<String, Integer>(id, bd.getBattery().getSoC())); //ezt majd nem így kell!
            temp.add(new dataPair<String, Integer>(id, bd.getBattery().getTemp())); //ezt sem!!

            RmP.add(new dataPair<String, Integer>(id, bd.getMotor().getRpM()));
            mTemp.add(new dataPair<String, Integer>(id, bd.getMotor().getTemp()));
           if(bd.getError() != null){
               errors.add(bd.getError());
           }


        }
        tiltTemp.add(x);
        tiltTemp.add(y);
        tiltTemp.add(z);
        tilt = tiltTemp;

        accelerationTemp.add(ax);
        accelerationTemp.add(ay);
        accelerationTemp.add(az);
        acceleration = accelerationTemp;

        compassTemp.add(cx);
        compassTemp.add(cy);
        compassTemp.add(cz);
        compass = compassTemp;

        batteryTemp.add(in);
        batteryTemp.add(out);
        batteryTemp.add(SoC);
        batteryTemp.add(temp);
        battery = batteryTemp;

        motorTemp.add(RmP);
        motorTemp.add(mTemp);
        motor = motorTemp;

    }

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

    public String getId() {
        return id;
    }
}
