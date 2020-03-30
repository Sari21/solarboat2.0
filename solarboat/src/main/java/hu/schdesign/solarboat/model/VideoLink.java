package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
public class VideoLink {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String link;

    public VideoLink(@JsonProperty("link") String link) {
        this.link = link;
    }

    public VideoLink() {
        link = null;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public long getId() {
        return id;
    }
}
