package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class TeamList {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Member> members;
    private boolean isLeader;

    public TeamList(@JsonProperty("member") ArrayList<Member> members, boolean isLeader) {
        this.members = members;
        this.isLeader = isLeader;
    }
    public TeamList() {
        this.members = null;
        this.isLeader = false;
    }

    public long getId() {
        return id;
    }

    public List<Member> getMembers() {
        return members;
    }

    public boolean isLeader() {
        return isLeader;
    }

    public void setLeader(boolean leader) {
        isLeader = leader;
    }


}
