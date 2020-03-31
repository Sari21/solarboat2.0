package hu.schdesign.solarboat.model.Boat;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
public class Error {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private final String source;
    private final String message;

    public Error(@JsonProperty("source") String source, @JsonProperty("message") String message) {
        this.source = source;
        this.message = message;
    }

    public Error() {
        this.source = null;
        this.message = null;
    }

    public String getSource() {
        return source;
    }

    public String getMessage() {
        return message;
    }
}
