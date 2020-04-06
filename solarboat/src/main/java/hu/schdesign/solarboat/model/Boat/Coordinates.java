package hu.schdesign.solarboat.model.Boat;

import com.fasterxml.jackson.annotation.JsonProperty;
import hu.schdesign.solarboat.csv.CsvPrintable;

import javax.persistence.*;

@Entity
@Table
public class Coordinates implements CsvPrintable  {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private final int x;
    private final int y;
    private final int z;
    public static final char CSV_SEPARATOR = ';';

    public Coordinates(@JsonProperty("x") int x, @JsonProperty("y")int y,@JsonProperty("z") int z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    public Coordinates() {
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

    public int getX() {
        return x;
    }

    public int getY() {
        return y;
    }

    public int getZ() {
        return z;
    }

    @Override
    public String printCsv() {
        return new StringBuilder()
                .append(this.x).append(CSV_SEPARATOR)
                .append(this.y).append(CSV_SEPARATOR)
                .append(this.z).toString();

    }

}
