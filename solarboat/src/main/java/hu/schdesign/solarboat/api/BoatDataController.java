package hu.schdesign.solarboat.api;

import com.opencsv.CSVWriter;
import com.opencsv.bean.StatefulBeanToCsv;
import com.opencsv.bean.StatefulBeanToCsvBuilder;
import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.News;
import hu.schdesign.solarboat.service.BoatDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/boatdata")
@RestController
public class BoatDataController {
    private BoatDataService boatDataService;
    @Autowired
    BoatDataController(BoatDataService boatDataService){
        this.boatDataService = boatDataService;
    }
    @PostMapping(consumes = "application/json", produces = "application/json")
    public BoatData addData(@RequestBody BoatData boatData){
        return boatDataService.postData(boatData);
    }

    @GetMapping
    public List<BoatData> getAllNews(){

        Iterable<BoatData> it = boatDataService.getAllData();
        List<BoatData> list = new ArrayList<>();
        for(BoatData s : it){
            list.add(s);
        }
        return list;
    }

    @GetMapping("/last")
    public Optional<BoatData> getTheLastData() {
        return boatDataService.getTheLastData();
    }

    @GetMapping("/export")
    public void exportCSV(HttpServletResponse response) throws Exception {

        //set file name and content type
        String filename = "boatdata.csv";

        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");
        //
        char CSV_SEPARATOR = ';'; // it could be a comma or a semi colon
        Iterable<BoatData> it = boatDataService.getAllData();
        ArrayList<BoatData> list = new ArrayList<>();
        for(BoatData b : it) {
            list.add(b);
        }

        try (BufferedWriter writer = new BufferedWriter(new FileWriter("my_file.csv"))) {
            writer.append("id").append(CSV_SEPARATOR)
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
            list.forEach(person -> {
                try {

                            writer.append(person.printCsv()).append(System.lineSeparator());
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


        //create a csv writer
       /* StatefulBeanToCsv<BoatData> writer = new StatefulBeanToCsvBuilder<BoatData>(response.getWriter())
                .withQuotechar(CSVWriter.NO_QUOTE_CHARACTER)
                .withSeparator(CSVWriter.DEFAULT_SEPARATOR)
                .withOrderedResults(false)
                .build();

        //write all users to csv file
        Iterable<BoatData> it = boatDataService.getAllData();
        ArrayList<BoatData> list = new ArrayList<>();
        for(BoatData b : it) {
            list.add(b);
        }
        writer.write(list);

        */

    }

}
