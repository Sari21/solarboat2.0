package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import javax.validation.constraints.NotNull;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import javax.validation.constraints.Size;


@Entity
@Table
public class Achievement {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @NotNull
    private String date;
    @NotNull
    @Size(min=2, max=50)
    private String title_hu;
    @NotNull
    @Size(min=2, max=50)
    private String title_en;
    @Size(min=2, max=2000)
    private String description_hu;
    @Size(min=2, max=2000)
    private String description_en;
    @NotNull
    @Size(min=2, max=50)
    private String location_hu;
    @NotNull
    @Size(min=2, max=50)
    private String location_en;
    @NotNull
    @Size(min=2, max=50)
    private String picture;
    private boolean isLast = false;
    private Integer place;


    public Achievement(@JsonProperty("title_hu") String title_hu,
                       @JsonProperty("title_en") String title_en,
                       @JsonProperty("description_hu") String description_hu,
                       @JsonProperty("location_hu") String location_hu,
                       @JsonProperty("description_en") String description_en,
                       @JsonProperty("location_en") String location_en,
                       @JsonProperty("picture") String picture,
                       @JsonProperty("date") String date,
                       @JsonProperty("date") int place) {
        this.title_hu=title_hu;
        this.title_en=title_en;
        this.description_hu = description_hu;
        this.location_hu = location_hu;
        this.description_en = description_en;
        this.location_en = location_en;
        this.picture = picture;
        this.date = date;
        this.place = place;
        this.isLast = isLast;

    }
    public Achievement() {

    }

    public String getDate() {
        //DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy.MM.dd");
        //return dtf.format(date);
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

    public int getPlace() {
        return place;
    }

    public void setPlace(int place) {
        this.place = place;
    }

    public boolean getIsLast() {
        return isLast;
    }

    public void setIsLast(boolean isLast) {
        this.isLast = isLast;
    }
}
