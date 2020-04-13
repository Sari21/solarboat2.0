package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.DataGroupRepository;
import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import hu.schdesign.solarboat.model.ResponseBoatData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import javax.servlet.http.HttpServletResponse;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class DataGroupService {
    private final DataGroupRepository dataGroupRepository;
    private ArrayList<DataGroup> exportList;

    @Autowired
    public DataGroupService(DataGroupRepository dataGroupRepository){
        this.dataGroupRepository = dataGroupRepository;
    }

    public DataGroup startDataGroup(DataGroup dataGroup){return dataGroupRepository.save(dataGroup);}
    public Iterable<DataGroup> getAllDataGroups(){return dataGroupRepository.findAll();}
    public Optional<DataGroup> getLastDataGroup(){return dataGroupRepository.findTopByOrderByIdDesc();}
    public Optional<DataGroup> getDataGroupById(Long id){return dataGroupRepository.findById(id);}
    public Optional<DataGroup> getDataGroupByDate(LocalDateTime date){return dataGroupRepository.findByDate(date);
    }
    public ResponseBoatData getDataGroupTilt(){
        return  new ResponseBoatData(dataGroupRepository.findTopByOrderByIdDesc().get());
    }
    public void deleteAll(){dataGroupRepository.deleteAll();}
    public void deleteFirst(){ dataGroupRepository.deleteTopByOrderByIdAsc();}
    public void deleteById(Long id){dataGroupRepository.deleteById(id);}
    public DataGroup addBoatData(BoatData boatData){
        Optional<DataGroup> optGroup = dataGroupRepository.findTopByOrderByIdDesc();
        if(optGroup.isPresent()){
            optGroup.get().addBoatData(boatData);
            return dataGroupRepository.save(optGroup.get());
        }
        else{
            DataGroup newGroup = new DataGroup();
            newGroup.addBoatData(boatData);
            return dataGroupRepository.save(newGroup);
        }
    }

    public void exportAll(HttpServletResponse response)throws Exception{
        Iterable<DataGroup> it = dataGroupRepository.findAll();
        ArrayList<DataGroup> list = new ArrayList<>();
        for (DataGroup b : it) {
            list.add(b);
        }
        this.exportList = list;
        exportCSV(response);
    }
    public void exportById(Long id, HttpServletResponse response)throws Exception{
        Optional<DataGroup> it = dataGroupRepository.findById(id);
        ArrayList<DataGroup> list = new ArrayList<>();
        list.add(it.get());
        this.exportList = list;
        exportCSV(response);
    }

    public void exportLast(HttpServletResponse response)throws Exception{
        Optional<DataGroup> opt = dataGroupRepository.findTopByOrderByIdDesc();
        ArrayList<DataGroup> list = new ArrayList<>();
            list.add(opt.get());
        this.exportList = list;
        exportCSV(response);
    }

    public void exportCSV(HttpServletResponse response) throws Exception {

        //set file name and content type
        String filename = "boatdata.csv";

        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");

        char CSV_SEPARATOR = ';'; // it could be a comma or a semi colon


        try (BufferedWriter writer = new BufferedWriter(new FileWriter("./src/main/resources/uploaded/boatdata.csv"))) {
            writer.append("groupid").append(CSV_SEPARATOR)
                    .append("dataid").append(CSV_SEPARATOR)
                    .append("date").append(CSV_SEPARATOR)
                    .append("tilt_x").append(CSV_SEPARATOR)
                    .append("tilt_y").append(CSV_SEPARATOR)
                    .append("tilt_z").append(CSV_SEPARATOR)
                    .append("acceleration_x").append(CSV_SEPARATOR)
                    .append("acceleration_y").append(CSV_SEPARATOR)
                    .append("acceleration_z").append(CSV_SEPARATOR)
                    .append("compass_x").append(CSV_SEPARATOR)
                    .append("compass_y").append(CSV_SEPARATOR)
                    .append("compass_z").append(CSV_SEPARATOR)
                    .append("motor_RpM").append(CSV_SEPARATOR)
                    .append("motor_temp").append(CSV_SEPARATOR)
                    .append("battery_in").append(CSV_SEPARATOR)
                    .append("battery_out").append(CSV_SEPARATOR)
                    .append("battery_SoC").append(CSV_SEPARATOR)
                    .append("battery_temp").append(CSV_SEPARATOR)
                    .append("error_source").append(CSV_SEPARATOR)
                    .append("error_message").append(CSV_SEPARATOR)
                    .append("ExtraTemps").append(System.lineSeparator());
            exportList.forEach(data -> {
                try {
                    writer.append(data.printCsv());

                    } catch (IOException e) {
                    e.printStackTrace();
                }
            });

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }
}
