package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class TeamList {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
   // private User members;
    private boolean isLeader;

    public TeamList(@JsonProperty("member") User member, boolean isLeader) {
        //this.member = member;
        this.isLeader = isLeader;
    }
    public TeamList() {
        //this.member = null;
        this.isLeader = false;
    }

  /*  public User getMember() {
        return member;
    }

    public void setMember(User member) {
        this.member = member;
    }
    */


    public boolean isLeader() {
        return isLeader;
    }

    public void setLeader(boolean leader) {
        isLeader = leader;
    }


}
