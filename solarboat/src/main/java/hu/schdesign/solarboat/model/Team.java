package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.List;

@Entity
@Table
public class Team {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String name_hu;
    private String name_en;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Member> members;
    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private Member leader;
    private String description_hu;
    private String description_en;

    public Team(@JsonProperty("name_hu") String name_hu, @JsonProperty("name_en") String name_en,
                @JsonProperty("members") List<Member> members, @JsonProperty("leader") Member leader,
                @JsonProperty("description_hu") String description_hu, @JsonProperty("description_en") String description_en) {
        this.name_hu = name_hu;
        this.name_en = name_en;
        this.members = members;
        this.leader = leader;
        this.description_hu = description_hu;
        this.description_en = description_en;
    }

    public Team() {
    }

    public long getId() {
        return id;
    }

    public String getName_hu() {
        return name_hu;
    }

    public void setName_hu(String name_hu) {
        this.name_hu = name_hu;
    }

    public String getName_en() {
        return name_en;
    }

    public void setName_en(String name_en) {
        this.name_en = name_en;
    }

    public List<Member> getMembers() {
        return members;
    }

    public void setMembers(List<Member> members) {
        this.members = members;
    }

    public Member getLeader() {
        return leader;
    }

    public void setLeader(Member leader) {
        this.leader = leader;
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
}
