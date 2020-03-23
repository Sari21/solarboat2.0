package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
public class MemberPicture {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String picture;
    private TeamEnum team;

    public MemberPicture(@JsonProperty("picture") String picture, @JsonProperty("team") TeamEnum team) {
        this.picture = picture;
        this.team = team;
    }

    public MemberPicture() {
        this.picture = null;
        this.team = null;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public TeamEnum getTeam() {
        return team;
    }

    public void setTeam(TeamEnum team) {
        this.team = team;
    }
}
