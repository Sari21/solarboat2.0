package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import hu.schdesign.solarboat.service.BoatDataService;
import hu.schdesign.solarboat.service.DataGroupService;
import hu.schdesign.solarboat.service.FileStorageService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/dataGroup")
@RestController
public class DataGroupController {
    private final DataGroupService dataGroupService;
    private final BoatDataService boatDataService;
    private FileStorageService fileStorageService;
    private static final Logger logger = LoggerFactory.getLogger(FileController.class);
    @Autowired
    DataGroupController(DataGroupService dataGroupService, BoatDataService boatDataService,
                        FileStorageService fileStorageService){
        this.dataGroupService = dataGroupService;
        this.boatDataService = boatDataService;
        this.fileStorageService = fileStorageService;
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
    public Optional<DataGroup> getDataGroupById(@PathVariable("id") Long id){
        return dataGroupService.getDataGroupById(id);
    }
    @GetMapping(path = "/date")
    public Optional<DataGroup> getDataGroupByDate(@RequestParam("date") @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm") LocalDateTime date){
        return dataGroupService.getDataGroupByDate(date);
    }
    @DeleteMapping
    public void deleteAllDataGroups(){
        dataGroupService.deleteAll();
    }
    @DeleteMapping(path = "first")
    public void deleteFirstDataGroups(){
        dataGroupService.deleteFirst();
    }
    @DeleteMapping(path = "{id}")
    public void deleteDataGroupById(@PathVariable("id") Long id){
        dataGroupService.deleteById(id);
    }

    @GetMapping(path ="export/{id}")
    public ResponseEntity<Resource>  exportById(@PathVariable("id") Long id, HttpServletResponse response, HttpServletRequest request) throws Exception {
        dataGroupService.exportById(id, response);
        return exportFile(request);
    }
    @GetMapping(path ="export/{date}")
    public ResponseEntity<Resource>  exportByDate(@PathVariable("id") Long id, HttpServletResponse response, HttpServletRequest request) throws Exception {
        dataGroupService.exportById(id, response);
        return exportFile(request);
    }
    @GetMapping(path = "export/lastfive")
    public ResponseEntity<Resource> exportLast(HttpServletResponse response, HttpServletRequest request) throws Exception {
        dataGroupService.exportLast(response);
        return exportFile(request);
    }
    @GetMapping(path = "export")
    public ResponseEntity<Resource> exportAll(HttpServletResponse response, HttpServletRequest request) throws Exception {
        dataGroupService.exportAll(response);
       return exportFile(request);
    }
    public ResponseEntity<Resource> exportFile(HttpServletRequest request) throws Exception {
        Resource resource = fileStorageService.loadFileAsResource("boatdata.csv");

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {
            logger.info("Could not determine file type.");
        }

        // Fallback to the default content type if type could not be determined
        if(contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

}
