package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import hu.schdesign.solarboat.service.BoatDataService;
import hu.schdesign.solarboat.service.DataGroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/dataGroup")
@RestController
public class DataGroupController {
    private final DataGroupService dataGroupService;
    private final BoatDataService boatDataService;
    @Autowired
    DataGroupController(DataGroupService dataGroupService, BoatDataService boatDataService){
        this.dataGroupService = dataGroupService;
        this.boatDataService = boatDataService;
    }
    @PostMapping(path = "boatData", consumes = "application/json", produces = "application/json")
    public DataGroup addBoatData(@RequestBody BoatData boatData){
        return dataGroupService.addBoatData(boatDataService.postData(boatData));
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    public DataGroup startDataGroup(){
        DataGroup dg = new DataGroup();
        return dataGroupService.startDataGroup(dg);
    }
    @GetMapping(path = "all")
    public Iterable<DataGroup> getAllDataGroups(){
        return dataGroupService.getAllDataGroups();
    }
    @GetMapping(path = "last")
    public Optional<DataGroup> getLastDataGroup(){
        return dataGroupService.getLastDataGroup();
    }
    @GetMapping(path = "{id}")
    public Optional<DataGroup> getDataGroupById(Long id){
        return dataGroupService.getDataGroupById(id);
    }
    @GetMapping(path = "last5")
    public Iterable<DataGroup> getLastFiveDataGroups(){
        return dataGroupService.getLastFiveGroups();
    }
    @DeleteMapping(path = "all")
    public void deleteAllDataGroups(){
        dataGroupService.deleteAll();
    }
    @DeleteMapping(path = "first10")
    public void deleteFirstTenDataGroups(){
        dataGroupService.deleteFirstTen();
    }
    @DeleteMapping(path = "{id}")
    public void deleteDataGroupById(@PathVariable("id") Long id){
        dataGroupService.deleteById(id);
    }

    @GetMapping(path = "export")
    public void exportCSV(HttpServletResponse response) throws Exception {

        //set file name and content type
        String filename = "boatdata.csv";

        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");

        char CSV_SEPARATOR = ';'; // it could be a comma or a semi colon
        Iterable<DataGroup> it = dataGroupService.getAllDataGroups();
        ArrayList<DataGroup> list = new ArrayList<>();
        for (DataGroup b : it) {
            list.add(b);
        }




        //ArrayList<String> list = new ArrayList<>();
        //list.add("alma");
        //list.add("körte");
        /*
        Iterable<BoatData> it = boatDataService.getAllData();
        ArrayList<BoatData> list = new ArrayList<>();
        for (BoatData b : it) {
            list.add(b);
        }*/

        try (BufferedWriter writer = new BufferedWriter(new FileWriter("my_file.csv"))) {
            writer.append("id").append(CSV_SEPARATOR)
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
            list.forEach(data -> {
                try {
                    writer.append(data.printCsv());

                   // writer.append(data.printCsv());
                            /*
                            .append(""+person.getAcceleration().getX()).append(CSV_SEPARATOR)
                            .append(""+person.getAcceleration().getY()).append(CSV_SEPARATOR)
                            .append(""+person.getAcceleration().getZ()).append(CSV_SEPARATOR)
                            .append(""+person.getBattery().getIn()).append(CSV_SEPARATOR)
                            .append(""+person.getBattery().getOut()).append(CSV_SEPARATOR)
                            .append(""+person.getBattery().getSoC()).append(CSV_SEPARATOR).append(System.lineSeparator());*/
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });

        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

}
