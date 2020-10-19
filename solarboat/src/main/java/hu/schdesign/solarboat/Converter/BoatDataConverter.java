package hu.schdesign.solarboat.Converter;

import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import hu.schdesign.solarboat.model.ResponseBoatData;
import hu.schdesign.solarboat.model.dataPair;
import java.util.ArrayList;

public class BoatDataConverter {
    public ResponseBoatData convertBoatDataToResponseBoatData(BoatData bd) {
        ResponseBoatData response = new ResponseBoatData();

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


        response.setId(bd.getDate());
        x.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getX()));
        y.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getY()));
        z.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getZ()));

        ax.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getX()));
        ay.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getY()));
        az.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getZ()));

        cx.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getX()));
        cy.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getY()));
        cz.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getZ()));

        in.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getIn()));
        out.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getOut()));
        SoC.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getSoC())); //ezt majd nem így kell!
        temp.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getTemp())); //ezt sem!!

        RmP.add(new dataPair<String, Integer>(response.getId(), bd.getMotor().getRpM()));
        mTemp.add(new dataPair<String, Integer>(response.getId(), bd.getMotor().getTemp()));
        if (bd.getError() != null) {
            response.getErrors().add(bd.getError());
        }

        tiltTemp.add(x);
        tiltTemp.add(y);
        tiltTemp.add(z);
        response.setTilt(tiltTemp);

        accelerationTemp.add(ax);
        accelerationTemp.add(ay);
        accelerationTemp.add(az);
        response.setAcceleration(accelerationTemp);

        compassTemp.add(cx);
        compassTemp.add(cy);
        compassTemp.add(cz);
        response.setCompass(compassTemp);

        batteryTemp.add(in);
        batteryTemp.add(out);
        batteryTemp.add(SoC);
        batteryTemp.add(temp);
        response.setBattery(batteryTemp);

        motorTemp.add(RmP);
        motorTemp.add(mTemp);
        response.setMotor(motorTemp);

        return response;
    }

    public ResponseBoatData convertDataGroupToResponseBoatData(DataGroup dataGroup) {
        ResponseBoatData response = new ResponseBoatData();
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

        for (BoatData bd : dataGroup.getBoatDataList()) {
            response.setId(bd.getDate());
            x.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getX()));
            y.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getY()));
            z.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getZ()));

            ax.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getX()));
            ay.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getY()));
            az.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getZ()));

            cx.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getX()));
            cy.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getY()));
            cz.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getZ()));

            in.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getIn()));
            out.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getOut()));
            SoC.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getSoC())); //ezt majd nem így kell!
            temp.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getTemp())); //ezt sem!!

            RmP.add(new dataPair<String, Integer>(response.getId(), bd.getMotor().getRpM()));
            mTemp.add(new dataPair<String, Integer>(response.getId(), bd.getMotor().getTemp()));
            if (bd.getError() != null) {
                response.getErrors().add(bd.getError());
            }


        }
        tiltTemp.add(x);
        tiltTemp.add(y);
        tiltTemp.add(z);
        response.setTilt(tiltTemp);

        accelerationTemp.add(ax);
        accelerationTemp.add(ay);
        accelerationTemp.add(az);
        response.setAcceleration(accelerationTemp);

        compassTemp.add(cx);
        compassTemp.add(cy);
        compassTemp.add(cz);
        response.setCompass(compassTemp);

        batteryTemp.add(in);
        batteryTemp.add(out);
        batteryTemp.add(SoC);
        batteryTemp.add(temp);
        response.setBattery(batteryTemp);

        motorTemp.add(RmP);
        motorTemp.add(mTemp);
        response.setMotor(motorTemp);
        return response;
    }
}
