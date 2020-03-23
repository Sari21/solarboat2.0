package hu.schdesign.solarboat.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Team {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private long id;
    private String name_hu;
    private String name_en;
    private TeamList teamList;
    private String description_hu;
    private String description_en;
}
