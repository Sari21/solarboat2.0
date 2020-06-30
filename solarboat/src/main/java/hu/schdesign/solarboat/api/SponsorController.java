package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.Sponsor;
import hu.schdesign.solarboat.service.SponsorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("api/sponsor")
@RestController
public class SponsorController {
    private final SponsorService sponsorService;

    @Autowired
    SponsorController(SponsorService sponsorService){
        this.sponsorService = sponsorService;
    }
    @Secured("ROLE_ADMIN")
    @PostMapping(consumes = "application/json", produces = "application/json")
    public Sponsor addSponsor(@Valid @RequestBody Sponsor sponsor){
        return sponsorService.addSponsor(sponsor);
    }
    @GetMapping
    public Iterable<Sponsor> getAllSponsors(){
        return sponsorService.getAllSponsors();
    }
    @Secured("ROLE_ADMIN")
    @DeleteMapping(path = "{id}")
    public void deleteSponsorById(@PathVariable("id") Long id){
        sponsorService.deleteSponsorById(id);
    }

    @Secured("ROLE_ADMIN")
    @PutMapping(consumes = "application/json", produces = "application/json")
    public Iterable<Sponsor> changeAllSponsors(@Valid @RequestBody Iterable<Sponsor> newSponsors){
        return this.sponsorService.changeAllSponsors(newSponsors);
    }
}
