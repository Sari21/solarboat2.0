package hu.schdesign.solarboat.model.Boat;

import com.fasterxml.jackson.annotation.JsonProperty;
import hu.schdesign.solarboat.csv.CsvPrintable;

import javax.persistence.*;

@Table
@Entity
public class Motor implements CsvPrintable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private final int RpM;
    private final int temp;
    public static final char CSV_SEPARATOR = ';';

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

    @Override
    public String printCsv() {
        return new StringBuilder()
                .append(this.RpM).append(CSV_SEPARATOR)
                .append(this.temp).toString();
    }
}
