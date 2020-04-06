package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import hu.schdesign.solarboat.csv.CsvPrintable;
import hu.schdesign.solarboat.model.Boat.Battery;
import hu.schdesign.solarboat.model.Boat.Coordinates;
import hu.schdesign.solarboat.model.Boat.Error;
import hu.schdesign.solarboat.model.Boat.Motor;

import javax.persistence.*;
import java.util.List;
import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;

@Entity
@Table
public class BoatData implements CsvPrintable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private final Coordinates tilt;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private final Coordinates acceleration;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private final Coordinates compass;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private final Motor motor;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private final Battery battery;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private final Error error;
    @ElementCollection
    private final List<Integer> extraTemps;
    public static final char CSV_SEPARATOR = ';';

    public BoatData(@JsonProperty("tilt") Coordinates tilt, @JsonProperty("acceleration")Coordinates acceleration,
                    @JsonProperty("compass")Coordinates compass, @JsonProperty("motor")Motor motor,
                    @JsonProperty("battery")Battery battery, @JsonProperty("error")Error error, @JsonProperty("extra temps")List<Integer> extraTemps) {
        this.tilt = tilt;
        this.acceleration = acceleration;
        this.compass = compass;
        this.motor = motor;
        this.battery = battery;
        this.error = error;
        this.extraTemps  = extraTemps;
    }

    public BoatData() {
        this.tilt = null;
        this.acceleration = null;
        this.compass = null;
        this.motor = null;
        this.battery = null;
        this.error = null;
        this.extraTemps = null;
    }

    @Override
    public String printCsv() {
        return new StringBuilder()
                .append(id).append(CSV_SEPARATOR)
                .append(tilt.printCsv()).append(CSV_SEPARATOR)
                .append(acceleration.printCsv()).append(CSV_SEPARATOR)
                .append(compass.printCsv()).append(CSV_SEPARATOR)
                .append(motor.printCsv()).append(CSV_SEPARATOR)
                .append(battery.printCsv()).append(CSV_SEPARATOR)
                .append(error.printCsv()).append(CSV_SEPARATOR)
                .append(printListToCsV())
                .toString();
    }
    public String printListToCsV(){
        StringBuilder list = new StringBuilder();
        for(Integer i : extraTemps){
            list.append(i);
            if(!extraTemps.get(extraTemps.size()-1).equals(i)){
                list.append(CSV_SEPARATOR);
            }
        }
        return list.toString();
    }


    public Long getId() {
        return id;
    }

    public Coordinates getTilt() {
        return tilt;
    }

    public Coordinates getAcceleration() {
        return acceleration;
    }

    public Coordinates getCompass() {
        return compass;
    }

    public Motor getMotor() {
        return motor;
    }

    public Battery getBattery() {
        return battery;
    }



    public Error getError() {
        return error;
    }

    public List<Integer> getExtraTemps() {
        return extraTemps;
    }
}
