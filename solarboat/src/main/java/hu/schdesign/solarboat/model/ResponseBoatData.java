package hu.schdesign.solarboat.model;

import java.util.ArrayList;
import java.util.List;

public class ResponseBoatData {
    private ArrayList<ArrayList<dataPair>> tilt;
    private ArrayList<ArrayList<dataPair>> acceleration;
    private ArrayList<ArrayList<dataPair>> compass;
    public ResponseBoatData(DataGroup dataGroup){
        ArrayList<ArrayList<dataPair>> tiltTemp = new ArrayList();
        ArrayList<ArrayList<dataPair>> accelerationTemp = new ArrayList();
        ArrayList<ArrayList<dataPair>> compassTemp = new ArrayList();
        ArrayList<dataPair> x = new ArrayList();
        ArrayList<dataPair> y = new ArrayList();
        ArrayList<dataPair> z = new ArrayList();
        for(BoatData bd : dataGroup.getBoatDataList()){
            x.add(new dataPair(bd.getId(), bd.getTilt().getX()));
            y.add(new dataPair(bd.getId(), bd.getTilt().getY()));
            z.add(new dataPair(bd.getId(), bd.getTilt().getZ()));
        }
        tiltTemp.add(x);
        tiltTemp.add(y);
        tiltTemp.add(z);
        tilt = tiltTemp;

        ArrayList<dataPair> ax = new ArrayList();
        ArrayList<dataPair> ay = new ArrayList();
        ArrayList<dataPair> az = new ArrayList();
        for(BoatData bd : dataGroup.getBoatDataList()){
            ax.add(new dataPair(bd.getId(), bd.getAcceleration().getX()));
            ay.add(new dataPair(bd.getId(), bd.getAcceleration().getY()));
            az.add(new dataPair(bd.getId(), bd.getAcceleration().getZ()));
        }
        accelerationTemp.add(ax);
        accelerationTemp.add(ay);
        accelerationTemp.add(az);
        acceleration = accelerationTemp;

        ArrayList<dataPair> cx = new ArrayList();
        ArrayList<dataPair> cy = new ArrayList();
        ArrayList<dataPair> cz = new ArrayList();
        for(BoatData bd : dataGroup.getBoatDataList()){
            cx.add(new dataPair(bd.getId(), bd.getCompass().getX()));
            cy.add(new dataPair(bd.getId(), bd.getCompass().getY()));
            cz.add(new dataPair(bd.getId(), bd.getCompass().getZ()));
        }
        compassTemp.add(cx);
        compassTemp.add(cy);
        compassTemp.add(cz);
        compass = compassTemp;

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
}
