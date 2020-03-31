package hu.schdesign.solarboat.model.Boat;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Table
@Entity
public class Motor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private final int RpM;
    private final int temp;

    public Motor(@JsonProperty("rpM") int rpM, @JsonProperty ("temp") int temp) {
        RpM = rpM;
        this.temp = temp;
    }

    public Motor() {
        RpM = 0;
        this.temp = 0;
    }

    public int getRpM() {
        return RpM;
    }

    public int getTemp() {
        return temp;
    }
}
