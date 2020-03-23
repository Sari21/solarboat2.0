package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
public class Sponsor {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String name;
    private String link;
    private String picture;
    private SponsorGroup group;
    private int row;

    public Sponsor(@JsonProperty("name") String name,
                   @JsonProperty("link") String link,
                   @JsonProperty("picture") String picture,
                   @JsonProperty("group") SponsorGroup group,
                   @JsonProperty("row") int row) {
        this.name = name;
        this.link = link;
        this.picture = picture;
        this.group = group;
        this.row = row;
    }

    public Sponsor() {
        this.name = null;
        this.link = null;
        this.picture = null;
        this.group = null;
        this.row = 0;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public SponsorGroup getGroup() {
        return group;
    }

    public void setGroup(SponsorGroup group) {
        this.group = group;
    }

    public int getRow() {
        return row;
    }

    public void setRow(int row) {
        this.row = row;
    }
}
