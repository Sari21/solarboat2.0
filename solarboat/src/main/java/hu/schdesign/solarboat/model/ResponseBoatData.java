package hu.schdesign.solarboat.model;

import java.util.ArrayList;
import java.util.List;

public class ResponseBoatData {
    private ArrayList<ArrayList<dataPair>> tilt;
    private ArrayList<ArrayList<dataPair>> acceleration;
    private ArrayList<ArrayList<dataPair>> compass;
    private ArrayList<ArrayList<dataPair>> battery;
    private ArrayList<ArrayList<dataPair>> motor;
    private Long id;
    //extra temps???
    public ResponseBoatData(DataGroup dataGroup){
        ArrayList<ArrayList<dataPair>> tiltTemp = new ArrayList();
        ArrayList<ArrayList<dataPair>> accelerationTemp = new ArrayList();
        ArrayList<ArrayList<dataPair>> compassTemp = new ArrayList();
        ArrayList<ArrayList<dataPair>> batteryTemp = new ArrayList();
        ArrayList<ArrayList<dataPair>> motorTemp = new ArrayList();

        ArrayList<dataPair> x = new ArrayList();
        ArrayList<dataPair> y = new ArrayList();
        ArrayList<dataPair> z = new ArrayList();
        ArrayList<dataPair> ax = new ArrayList();
        ArrayList<dataPair> ay = new ArrayList();
        ArrayList<dataPair> az = new ArrayList();
        ArrayList<dataPair> cx = new ArrayList();
        ArrayList<dataPair> cy = new ArrayList();
        ArrayList<dataPair> cz = new ArrayList();
        ArrayList<dataPair> in = new ArrayList();
        ArrayList<dataPair> out = new ArrayList();
        ArrayList<dataPair> SoC = new ArrayList();
        ArrayList<dataPair> temp = new ArrayList();
        ArrayList<dataPair> RmP = new ArrayList();
        ArrayList<dataPair> mTemp = new ArrayList();

        for(BoatData bd : dataGroup.getBoatDataList()){
            id = bd.getId();
            x.add(new dataPair(id, bd.getTilt().getX()));
            y.add(new dataPair(id, bd.getTilt().getY()));
            z.add(new dataPair(id, bd.getTilt().getZ()));

            ax.add(new dataPair(id, bd.getAcceleration().getX()));
            ay.add(new dataPair(id, bd.getAcceleration().getY()));
            az.add(new dataPair(id, bd.getAcceleration().getZ()));

            cx.add(new dataPair(id, bd.getCompass().getX()));
            cy.add(new dataPair(id, bd.getCompass().getY()));
            cz.add(new dataPair(id, bd.getCompass().getZ()));

            in.add(new dataPair(id, bd.getBattery().getIn()));
            out.add(new dataPair(id, bd.getBattery().getOut()));
            SoC.add(new dataPair(id, bd.getBattery().getSoC())); //ezt majd nem így kell!
            temp.add(new dataPair(id, bd.getBattery().getTemp())); //ezt sem!!
            RmP.add(new dataPair(id, bd.getMotor().getRpM()));
            mTemp.add(new dataPair(id, bd.getMotor().getTemp()));


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

    public ArrayList<ArrayList<dataPair>> getTilt() {
        return tilt;
    }

    public ArrayList<ArrayList<dataPair>> getAcceleration() {
        return acceleration;
    }

    public ArrayList<ArrayList<dataPair>> getCompass() {
        return compass;
    }

    public ArrayList<ArrayList<dataPair>> getBattery() {
        return battery;
    }

    public ArrayList<ArrayList<dataPair>> getMotor() {
        return motor;
    }
}
