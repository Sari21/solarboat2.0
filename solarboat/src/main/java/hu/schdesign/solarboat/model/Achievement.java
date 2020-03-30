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
    private String title_en;
    private String description_hu;
    private String description_en;
    private String location_hu;
    private String location_en;
    private String picture;

    public long getId() {
        return id;
    }

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



    public Achievement(@JsonProperty("title_hu") String title_hu,
                       @JsonProperty("title_en") String title_en,
                       @JsonProperty("description_hu") String description_hu,
                       @JsonProperty("location_hu") String location_hu,
                       @JsonProperty("description_en") String description_en,
                       @JsonProperty("location_en") String location_en,
                       @JsonProperty("picture") String picture,
                       @JsonProperty("date") String date) {
        this.title_hu=title_hu;
        this.title_en=title_en;
        this.description_hu = description_hu;
        this.location_hu = location_hu;
        this.description_en = description_en;
        this.location_en = location_en;
        this.picture = picture;
        this.date = date;

    }
    public Achievement() {

    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public String getDescription_hu() {
        return description_hu;
    }

    public void setDescription_hu(String description_hu) {
        this.description_hu = description_hu;
    }

    public String getDescription_en() {
        return description_en;
    }

    public void setDescription_en(String description_en) {
        this.description_en = description_en;
    }

    public String getLocation_hu() {
        return location_hu;
    }

    public void setLocation_hu(String location_hu) {
        this.location_hu = location_hu;
    }

    public String getLocation_en() {
        return location_en;
    }

    public void setLocation_en(String location_en) {
        this.location_en = location_en;
    }
}
