package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class Achievement {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String date;
    private String title_hu;

    public String getTitle_hu() {
        return title_hu;
    }

    public void setTitle_hu(String title_hu) {
        this.title_hu = title_hu;
    }

    public String getTitle_en() {
        return title_en;
    }

    public void setTitle_en(String title_en) {
        this.title_en = title_en;
    }

    private String title_en;
    private String description;
    private String location;
    private String picture;

    public Achievement(@JsonProperty("title_hu") String title_hu,
                       @JsonProperty("title_en") String title_en,
                       @JsonProperty("description") String description,
                       @JsonProperty("location") String location,
                       @JsonProperty("picture") String picture,
                       @JsonProperty("date") String date) {
        this.title_hu=title_hu;
        this.title_en=title_en;
        this.description= description;
        this.location = location;
        this.picture = picture;
        this.date = date;

    }
    public Achievement() {
        this.title_hu=null;
        this.title_en=null;
        this.description= null;
        this.location = null;
        this.picture = null;
        this.date = null;

    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
