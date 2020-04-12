package hu.schdesign.solarboat.model.Boat;

import com.fasterxml.jackson.annotation.JsonProperty;
import hu.schdesign.solarboat.csv.CsvPrintable;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table
public class Battery implements CsvPrintable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private final int _in;
    private final int _out;
    private final int SoC;
    private final int temp;
    public static final char CSV_SEPARATOR = ';';

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

    @Override
    public String printCsv() {
        return new StringBuilder().append(this._in).append(CSV_SEPARATOR)
                .append(this._out).append(CSV_SEPARATOR)
                .append(this.SoC).append(CSV_SEPARATOR)
                .append(this.temp).toString();
    }
}
