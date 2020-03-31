package hu.schdesign.solarboat.model.Boat;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
public class Battery {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private final int _in;
    private final int _out;
    private final int SoC;
    private final int temp;

    public Battery(@JsonProperty("in") int in, @JsonProperty("out") int out, @JsonProperty("soC") int soC, @JsonProperty("temp") int temp) {
        this._in = in;
        this._out = out;
        this.SoC = soC;
        this.temp = temp;
    }

    public Battery() {
        this._in = 0;
        this._out = 0;
        this.SoC = 0;
        this.temp = 0;
    }

    public Long getId() {
        return id;
    }

    public int getIn() {
        return _in;
    }

    public int getOut() {
        return _out;
    }

    public int getSoC() {
        return SoC;
    }

    public int getTemp() {
        return temp;
    }
}
