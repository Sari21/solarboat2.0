package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import hu.schdesign.solarboat.csv.CsvPrintable;
import hu.schdesign.solarboat.model.Boat.Battery;
import hu.schdesign.solarboat.model.Boat.Coordinates;
import hu.schdesign.solarboat.model.Boat.Error;
import hu.schdesign.solarboat.model.Boat.Motor;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import com.opencsv.bean.CsvBindByName;
import com.opencsv.bean.CsvBindByPosition;
import org.springframework.format.annotation.DateTimeFormat;

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
    private double velocity;
    private double distance;
    private double sumDistance;

    private final String date;
    private final LocalDateTime rawDate;
    @ElementCollection
    private final List<Integer> extraTemps;

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
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter sdf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        date =  sdf.format(now);
        rawDate = now;
    }

    public BoatData() {
        this.tilt = null;
        this.acceleration = null;
        this.compass = null;
        this.motor = null;
        this.battery = null;
        this.error = null;
        this.extraTemps = null;
        this.date = null;
        this.rawDate = null;
    }

    @Override
    public String printCsv() {
        return new StringBuilder()
                .append(id).append(CSV_SEPARATOR)
                .append(date).append(CSV_SEPARATOR)
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

    /*public String getDate() {
        DateTimeFormatter sdf = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS");
        return sdf.format(date);
    }

     */

    public double getVelocity() {
        return velocity;
    }

    public void setVelocity(double velocity) {
        this.velocity = velocity;
    }

    public double getDistance() {
        return distance;
    }

    public void setDistance(double distance) {
        this.distance = distance;
    }

    public String getDate() {
        return date;
    }

    public LocalDateTime getRawDate() {
        return rawDate;
    }

    public double getSumDistance() {
        return sumDistance;
    }

    public void setSumDistance(double sumDistance) {
        this.sumDistance = sumDistance;
    }
}
