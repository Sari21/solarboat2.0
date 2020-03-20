package hu.schdesign.solarboat.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table
public class News {
    @Id @GeneratedValue(strategy= GenerationType.IDENTITY) long id;
    private long date;
    private String title;
    private String content;
    private String picture;

    public News(){
        this.title = null;
        this.content = null;
        this.picture = null;
        this.date = 0;
    }

    public News(@JsonProperty("title")String title, @JsonProperty("content") String content, @JsonProperty("picture") String picture){
        this.title = title;
        this.content = content;
        this.picture = picture;
        Date currentDate = new Date();
        this.date = currentDate.getTime();
    }


    public long getId() {
        return id;
    }

    public long getDate() {
        return date;
    }

    public void setDate() {
        Date currentDate = new Date();
        this.date = currentDate.getTime();
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }
}
