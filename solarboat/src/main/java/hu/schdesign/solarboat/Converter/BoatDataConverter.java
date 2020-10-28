package hu.schdesign.solarboat.Converter;

import hu.schdesign.solarboat.model.Boat.DataAnalysis;
import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import hu.schdesign.solarboat.model.ResponseBoatData;
import hu.schdesign.solarboat.model.dataPair;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class BoatDataConverter {
    public ResponseBoatData convertBoatDataToResponseBoatData(BoatData bd) {
        ResponseBoatData response = new ResponseBoatData();

        ArrayList<ArrayList<dataPair<String, Integer>>> tiltTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<String, Integer>>> accelerationTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<String, Integer>>> compassTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<String, Integer>>> batteryTemp = new ArrayList<>();
        ArrayList<ArrayList<dataPair<String, Integer>>> motorTemp = new ArrayList<>();


        ArrayList<dataPair<String, Integer>> tiltX = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> tiltY = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> tiltZ = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> accelerationX = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> accelerationY = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> accelerationZ = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> compassX = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> compassY = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> compassZ = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> in = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> out = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> SoC = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> temp = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> RmP = new ArrayList<>();
        ArrayList<dataPair<String, Integer>> mTemp = new ArrayList<>();




        response.setId(bd.getDate());
        tiltX.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getX()));
        tiltY.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getY()));
        tiltZ.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getZ()));


        accelerationX.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getX()));
        accelerationY.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getY()));
        accelerationZ.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getZ()));


        compassX.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getX()));
        compassY.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getY()));
        compassZ.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getZ()));


        in.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getIn()));
        out.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getOut()));
        SoC.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getSoC())); //ezt majd nem így kell!
        temp.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getTemp())); //ezt sem!!


        RmP.add(new dataPair<String, Integer>(response.getId(), bd.getMotor().getRpM()));
        mTemp.add(new dataPair<String, Integer>(response.getId(), bd.getMotor().getTemp()));

        if (bd.getError() != null) {
            response.getErrors().add(bd.getError());
        }

        tiltTemp.add(tiltX);
        tiltTemp.add(tiltY);
        tiltTemp.add(tiltZ);
        response.setTilt(tiltTemp);

        accelerationTemp.add(accelerationX);
        accelerationTemp.add(accelerationY);
        accelerationTemp.add(accelerationZ);
        response.setAcceleration(accelerationTemp);

        compassTemp.add(compassX);
        compassTemp.add(compassY);
        compassTemp.add(compassZ);
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

        ArrayList<Integer> analysis_tiltX = new ArrayList<>();
        ArrayList<Integer> analysis_tiltY = new ArrayList<>();
        ArrayList<Integer> analysis_tiltZ = new ArrayList<>();
        ArrayList<Integer> analysis_accelerationX = new ArrayList<>();
        ArrayList<Integer> analysis_accelerationY = new ArrayList<>();
        ArrayList<Integer> analysis_accelerationZ = new ArrayList<>();
        ArrayList<Integer> analysis_compassX = new ArrayList<>();
        ArrayList<Integer> analysis_compassY = new ArrayList<>();
        ArrayList<Integer> analysis_compassZ = new ArrayList<>();
        ArrayList<Integer> analysis_in = new ArrayList<>();
        ArrayList<Integer> analysis_out = new ArrayList<>();
        ArrayList<Integer> analysis_SoC = new ArrayList<>();
        ArrayList<Integer> analysis_temp = new ArrayList<>();
        ArrayList<Integer> analysis_RmP = new ArrayList<>();
        ArrayList<Integer> analysis_mTemp = new ArrayList<>();

        for (BoatData bd : dataGroup.getBoatDataList()) {
            response.setId(bd.getDate());
            x.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getX()));
            y.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getY()));
            z.add(new dataPair<String, Integer>(response.getId(), bd.getTilt().getZ()));
            analysis_tiltX.add(bd.getTilt().getX());
            analysis_tiltY.add(bd.getTilt().getY());
            analysis_tiltZ.add(bd.getTilt().getZ());

            ax.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getX()));
            ay.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getY()));
            az.add(new dataPair<String, Integer>(response.getId(), bd.getAcceleration().getZ()));
            analysis_accelerationX.add(bd.getAcceleration().getX());
            analysis_accelerationY.add(bd.getAcceleration().getY());
            analysis_accelerationZ.add(bd.getAcceleration().getZ());

            cx.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getX()));
            cy.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getY()));
            cz.add(new dataPair<String, Integer>(response.getId(), bd.getCompass().getZ()));
            analysis_compassX.add(bd.getCompass().getX());
            analysis_compassY.add(bd.getCompass().getY());
            analysis_compassZ.add(bd.getCompass().getZ());

            in.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getIn()));
            out.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getOut()));
            SoC.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getSoC())); //ezt majd nem így kell!
            temp.add(new dataPair<String, Integer>(response.getId(), bd.getBattery().getTemp())); //ezt sem!!
            analysis_in.add(bd.getBattery().getIn());
            analysis_out.add(bd.getBattery().getOut());
            analysis_SoC.add(bd.getBattery().getSoC()); //ezt majd nem így kell!
            analysis_temp.add(bd.getBattery().getTemp()); //ezt sem!!

            RmP.add(new dataPair<String, Integer>(response.getId(), bd.getMotor().getRpM()));
            mTemp.add(new dataPair<String, Integer>(response.getId(), bd.getMotor().getTemp()));
            analysis_RmP.add(bd.getMotor().getRpM());
            analysis_mTemp.add(bd.getMotor().getTemp());
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

        DataAnalysis analAccelerationX = new DataAnalysis();
        analAccelerationX.setMax(analysis_accelerationX.stream().max(Integer::compareTo).orElse(null));
        analAccelerationX.setMin(analysis_accelerationX.stream().min(Integer::compareTo).orElse(null));
        analAccelerationX.setAverage(analysis_accelerationX.stream().collect(Collectors.averagingInt(Integer::intValue)));
        analAccelerationX.setName("X");
        DataAnalysis analAccelerationY = new DataAnalysis();
        analAccelerationY.setMax(analysis_accelerationY.stream().max(Integer::compareTo).orElse(null));
        analAccelerationY.setMin(analysis_accelerationY.stream().min(Integer::compareTo).orElse(null));
        analAccelerationY.setAverage(analysis_accelerationY.stream().collect(Collectors.averagingInt(Integer::intValue)));
        analAccelerationY.setName("Y");
        DataAnalysis analAccelerationZ = new DataAnalysis();
        analAccelerationZ.setMax(analysis_accelerationZ.stream().max(Integer::compareTo).orElse(null));
        analAccelerationZ.setMin(analysis_accelerationZ.stream().min(Integer::compareTo).orElse(null));
        analAccelerationZ.setAverage(analysis_accelerationZ.stream().collect(Collectors.averagingInt(Integer::intValue)));
        analAccelerationZ.setName("Z");
        response.setAccelerationAnalysis(new ArrayList<>());
        response.getAccelerationAnalysis().add(analAccelerationX);
        response.getAccelerationAnalysis().add(analAccelerationY);
        response.getAccelerationAnalysis().add(analAccelerationZ);


        return response;
    }

}
