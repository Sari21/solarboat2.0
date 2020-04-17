package hu.schdesign.solarboat.model;

import java.util.ArrayList;
import java.util.List;

public class ResponseBoatData {
    private ArrayList<ArrayList<dataPair<Long, Integer>>> tilt;
    private ArrayList<ArrayList<dataPair<Long, Integer>>> acceleration;
    private ArrayList<ArrayList<dataPair<Long, Integer>>> compass;
    private ArrayList<ArrayList<dataPair<Long, Integer>>> battery;
    private ArrayList<ArrayList<dataPair<Long, Integer>>> motor;
    private Long id;
    //extra temps???
    public ResponseBoatData(DataGroup dataGroup){
        ArrayList<ArrayList<dataPair<Long, Integer>>> tiltTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<Long, Integer>>> accelerationTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<Long, Integer>>> compassTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<Long, Integer>>> batteryTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<Long, Integer>>> motorTemp = new ArrayList<>();

        ArrayList<dataPair<Long, Integer>> x = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> y = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> z = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> ax = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> ay = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> az = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> cx = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> cy = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> cz = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> in = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> out = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> SoC = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> temp = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> RmP = new ArrayList<>();
        ArrayList<dataPair<Long, Integer>> mTemp = new ArrayList<>();

        for(BoatData bd : dataGroup.getBoatDataList()){
            id = bd.getId();
            x.add(new dataPair<Long, Integer>(id, bd.getTilt().getX()));
            y.add(new dataPair<Long, Integer>(id, bd.getTilt().getY()));
            z.add(new dataPair<Long, Integer>(id, bd.getTilt().getZ()));

            ax.add(new dataPair<Long, Integer>(id, bd.getAcceleration().getX()));
            ay.add(new dataPair<Long, Integer>(id, bd.getAcceleration().getY()));
            az.add(new dataPair<Long, Integer>(id, bd.getAcceleration().getZ()));

            cx.add(new dataPair<Long, Integer>(id, bd.getCompass().getX()));
            cy.add(new dataPair<Long, Integer>(id, bd.getCompass().getY()));
            cz.add(new dataPair<Long, Integer>(id, bd.getCompass().getZ()));

            in.add(new dataPair<Long, Integer>(id, bd.getBattery().getIn()));
            out.add(new dataPair<Long, Integer>(id, bd.getBattery().getOut()));
            SoC.add(new dataPair<Long, Integer>(id, bd.getBattery().getSoC())); //ezt majd nem így kell!
            temp.add(new dataPair<Long, Integer>(id, bd.getBattery().getTemp())); //ezt sem!!

            RmP.add(new dataPair<Long, Integer>(id, bd.getMotor().getRpM()));
            mTemp.add(new dataPair<Long, Integer>(id, bd.getMotor().getTemp()));


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

    public ArrayList<ArrayList<dataPair<Long, Integer>>> getTilt() {
        return tilt;
    }

    public ArrayList<ArrayList<dataPair<Long, Integer>>> getAcceleration() {
        return acceleration;
    }

    public ArrayList<ArrayList<dataPair<Long, Integer>>> getCompass() {
        return compass;
    }

    public ArrayList<ArrayList<dataPair<Long, Integer>>> getBattery() {
        return battery;
    }

    public ArrayList<ArrayList<dataPair<Long, Integer>>> getMotor() {
        return motor;
    }

    public Long getId() {
        return id;
    }
}
