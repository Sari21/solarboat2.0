package hu.schdesign.solarboat.model.Boat;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
public class Coordinates {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private final int x;
    private final int y;
    private final int z;

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
}
