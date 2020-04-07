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
    @GetMapping
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
    @DeleteMapping
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
    public void exportAll(HttpServletResponse response) throws Exception {
        dataGroupService.exportAll(response);
    }
    @GetMapping(path ="export/{id}")
    public void exportById(@PathVariable("id") Long id, HttpServletResponse response) throws Exception {
        dataGroupService.exportById(id, response);
    }
    @GetMapping(path = "export/lastfive")
    public void exportLastFive(HttpServletResponse response) throws Exception {
        dataGroupService.exportLastFive(response);
    }
}
