package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.News;
import hu.schdesign.solarboat.service.BoatDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
