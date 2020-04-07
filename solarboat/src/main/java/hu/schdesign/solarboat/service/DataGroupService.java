package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.DataGroupRepository;
import hu.schdesign.solarboat.dao.NewsRepository;
import hu.schdesign.solarboat.model.BoatData;
import hu.schdesign.solarboat.model.DataGroup;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.crypto.Data;
import java.util.Optional;
import java.util.OptionalDouble;

@Service
public class DataGroupService {
    private final DataGroupRepository dataGroupRepository;

    @Autowired
    public DataGroupService(DataGroupRepository dataGroupRepository){
        this.dataGroupRepository = dataGroupRepository;
    }

    public DataGroup startDataGroup(DataGroup dataGroup){return dataGroupRepository.save(dataGroup);}
    public Iterable<DataGroup> getAllDataGroups(){return dataGroupRepository.findAll();}
    public Optional<DataGroup> getLastDataGroup(){return dataGroupRepository.findTopByOrderByIdDesc();}
    public Optional<DataGroup> getDataGroupById(Long id){return dataGroupRepository.findById(id);}
    public Iterable<DataGroup> getLastFiveGroups(){return dataGroupRepository.findTop5ByOrderByIdDesc();}
    public void deleteAll(){dataGroupRepository.deleteAll();}
    public void deleteFirstTen(){ dataGroupRepository.deleteTop5ByOrderByIdAsc();}
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
    
}
