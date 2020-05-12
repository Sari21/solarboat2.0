package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.Sponsor;
import hu.schdesign.solarboat.service.SponsorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
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
    public List<Sponsor> getAllSponsors(){
        Iterable<Sponsor> it = sponsorService.getAllSponsors();
        List<Sponsor> list = new ArrayList<>();
        for(Sponsor s : it){
            list.add(s);
        }
        return list;
    }
    @Secured("ROLE_ADMIN")
    @DeleteMapping(path = "{id}")
    public void deleteSponsorById(@PathVariable("id") Long id){
        sponsorService.deleteSponsorById(id);
    }

}
