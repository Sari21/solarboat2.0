package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.Converter.BoatDataConverter;
import hu.schdesign.solarboat.dao.DataGroupRepository;
import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import hu.schdesign.solarboat.model.ResponseBoatData;
import hu.schdesign.solarboat.model.dataPair;
import hu.schdesign.solarboat.service.serviceInterface.IDataGroupService;
import hu.schdesign.solarboat.service.serviceInterface.INotificationDispatcher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Optional;

@Service
public class DataGroupService implements IDataGroupService {
    private final DataGroupRepository dataGroupRepository;
    private ArrayList<DataGroup> exportList;
    private final INotificationDispatcher notificationDispatcher;

    @Autowired
    public DataGroupService(DataGroupRepository dataGroupRepository,
                            INotificationDispatcher notificationDispatcher) {
        this.dataGroupRepository = dataGroupRepository;
        this.notificationDispatcher = notificationDispatcher;
    }
@Override
    public DataGroup startDataGroup() {
        DataGroup dataGroup = new DataGroup();
        dataGroup.setActive(true);
        notificationDispatcher.dispatchBoatActivity(true);
        return dataGroupRepository.save(dataGroup);
    }
    @Override
    public DataGroup closeDataGroup() {
        DataGroup lastGroup = dataGroupRepository.findTopByIsActiveIsTrueOrderByIdDesc().orElseThrow(() -> new RuntimeException("Nincs aktív datacsoport"));
        lastGroup.setActive(false);
        notificationDispatcher.dispatchBoatActivity(false);
        return dataGroupRepository.save(lastGroup);
    }
    @Override
    public Iterable<DataGroup> getAllDataGroups() {
        return dataGroupRepository.findAll();
    }
    @Override
    public ResponseBoatData getLastClosedDataGroup() {
        Optional<DataGroup> lastGroup = dataGroupRepository.findTopByIsActiveIsFalseOrderByIdDesc();
        BoatDataConverter converter = new BoatDataConverter();
        return lastGroup.map(converter::convertDataGroupToResponseBoatData).orElse(null);
    }
    @Override
    public ResponseBoatData getActiveDataGroup() {
        Optional<DataGroup> lastGroup = dataGroupRepository.findTopByIsActiveIsTrueOrderByIdDesc();
        BoatDataConverter converter = new BoatDataConverter();
        return lastGroup.map(converter::convertDataGroupToResponseBoatData).orElse(null);
    }

    @Override
    public ResponseBoatData getDataGroupById(Long id) {
        BoatDataConverter boatDataConverter = new BoatDataConverter();
        DataGroup group = dataGroupRepository.findById(id).orElseThrow(()
                -> new RuntimeException("Nincs ilyen adat"));
        ResponseBoatData response = boatDataConverter.convertDataGroupToResponseBoatData(group);
        DataGroup lastGroup = dataGroupRepository.findTopByOrderByIdDesc().orElseThrow(() -> new RuntimeException("Nincsenek adatok"));
        return response;
    }
    @Override
    public Optional<DataGroup> getDataGroupByDate(LocalDateTime date) {
        return dataGroupRepository.findByDate(date);
    }

    @Transactional
    @Override
    public ResponseBoatData getDataGroupLast() {
        BoatDataConverter boatDataConverter = new BoatDataConverter();
        return boatDataConverter.convertDataGroupToResponseBoatData(dataGroupRepository.findTopByOrderByIdDesc().orElse(new DataGroup()));
    }
    @Override
    public ArrayList<dataPair<Long, String>> getDatesAndIds() {
        ArrayList<dataPair<Long, String>> list = new ArrayList<>();
        Iterable<DataGroup> it = dataGroupRepository.findAll();
        for (DataGroup i : it) {
            list.add(new dataPair<Long, String>(i.getId(), i.getDate()));
        }
        return list;
    }
    @Override
    public void deleteAll() {
        dataGroupRepository.deleteAll();
    }
    @Override
    public void deleteFirst() {
        dataGroupRepository.deleteTopByOrderByIdAsc();
    }
    @Override
    public void deleteById(Long id) {
        dataGroupRepository.deleteById(id);
    }
    @Transactional
    @Override
    public DataGroup addBoatData(BoatData boatData) {
        Optional<DataGroup> optGroup = dataGroupRepository.findTopByOrderByIdDesc();
        DataGroup updatedDataGroup;
        if (optGroup.isPresent()) {
            optGroup.get().addBoatData(boatData);
            updatedDataGroup = dataGroupRepository.save(optGroup.get());
        } else {
            DataGroup newGroup = new DataGroup();
            newGroup.addBoatData(boatData);
            updatedDataGroup = dataGroupRepository.save(newGroup);
        }
        BoatDataConverter boatDataConverter = new BoatDataConverter();
        BoatDataConverter converter = new BoatDataConverter();
        notificationDispatcher.dispatchData(converter.convertBoatDataToResponseBoatData(updatedDataGroup.getBoatDataList().get(updatedDataGroup.getBoatDataList().size() - 1)));

        return updatedDataGroup;
    }
    @Override
    public void exportAll(HttpServletResponse response) throws Exception {
        Iterable<DataGroup> it = dataGroupRepository.findAll();
        ArrayList<DataGroup> list = new ArrayList<>();
        for (DataGroup b : it) {
            list.add(b);
        }
        this.exportList = list;
        exportCSV(response);
    }
    @Override
    public void exportById(Long id, HttpServletResponse response) throws Exception {
        Optional<DataGroup> it = dataGroupRepository.findById(id);
        ArrayList<DataGroup> list = new ArrayList<>();
        if (it.isPresent()) {

            list.add(it.get());
            this.exportList = list;
            exportCSV(response);
        }

    }
    @Override
    public void exportLast(HttpServletResponse response) throws Exception {
        Optional<DataGroup> opt = dataGroupRepository.findTopByOrderByIdDesc();
        ArrayList<DataGroup> list = new ArrayList<>();
        list.add(opt.get());
        this.exportList = list;
        exportCSV(response);
    }
    @Override
    public void exportCSV(HttpServletResponse response) throws Exception {

        //set file name and content type
        String filename = "boatdata.csv";

        response.setContentType("text/csv");
        response.setHeader(HttpHeaders.CONTENT_DISPOSITION,
                "attachment; filename=\"" + filename + "\"");

        char CSV_SEPARATOR = ';'; // it could be a comma or a semi colon


        try (BufferedWriter writer = new BufferedWriter(new FileWriter("../solarboat-app/src/assets/boatdata.csv"))) {
            //  try (BufferedWriter writer = new BufferedWriter(new FileWriter("./src/main/resources/uploaded/boatdata.csv"))) {
            writer.append("groupid").append(CSV_SEPARATOR)
                    .append("date").append(CSV_SEPARATOR)
                    .append("dataid").append(CSV_SEPARATOR)
                    .append("datadate").append(CSV_SEPARATOR)
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
