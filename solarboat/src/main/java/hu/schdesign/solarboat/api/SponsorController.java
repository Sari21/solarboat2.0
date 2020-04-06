package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.Sponsor;
import hu.schdesign.solarboat.service.SponsorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(consumes = "application/json", produces = "application/json")
    public Sponsor addSponsor(@RequestBody Sponsor sponsor){
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
    @DeleteMapping(path = "{id}")
    public void deleteSponsorById(@PathVariable("id") Long id){
        sponsorService.deleteSponsorById(id);
    }

}
