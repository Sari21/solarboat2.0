package hu.schdesign.solarboat.model;

import java.util.ArrayList;
import java.util.List;

public class ResponseBoatData {
    private ArrayList<ArrayList<dataPair>> tilt;
    public ResponseBoatData(DataGroup dataGroup){
        ArrayList<dataPair> x = new ArrayList();
        ArrayList<dataPair> y = new ArrayList();
        ArrayList<dataPair> z = new ArrayList();
        for(BoatData bd : dataGroup.getBoatDataList()){
            x.add(new dataPair(bd.getId(), bd.getTilt().getX()));
            y.add(new dataPair(bd.getId(), bd.getTilt().getY()));
            z.add(new dataPair(bd.getId(), bd.getTilt().getZ()));
        }
        ArrayList<ArrayList<dataPair>> temp = new ArrayList();
        temp.add(x);
        temp.add(y);
        temp.add(z);
        tilt = temp;
    }

    public ArrayList<ArrayList<dataPair>> getTilt() {
        return tilt;
    }
}
