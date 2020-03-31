package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;

@Entity
@Table
public class Member {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String job_hu;
    private String job_en;
    private String picture;
    private String linkedin;

    public Member() {
    }

    public Member(@JsonProperty("firstName") String firstName, @JsonProperty("lastName") String lastName,
                  @JsonProperty("job_hu") String job_hu, @JsonProperty("job_en") String job_en,
                  @JsonProperty("picture") String picture, @JsonProperty("linkedin") String linkedin) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job_hu = job_hu;
        this.job_en = job_en;
        this.picture = picture;
        this.linkedin = linkedin;
    }

    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getJob_hu() {
        return job_hu;
    }

    public String getJob_en() {
        return job_en;
    }

    public String getPicture() {
        return picture;
    }

    public String getLinkedin() {
        return linkedin;
    }
}
