package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.SponsorRepository;
import hu.schdesign.solarboat.model.Sponsor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SponsorService {
    private final SponsorRepository sponsorRepository;

    @Autowired
    SponsorService(SponsorRepository sponsorRepository){
        this.sponsorRepository = sponsorRepository;
    }
    public Sponsor addSponsor(Sponsor s){
        return sponsorRepository.save(s);
    }
    public Iterable<Sponsor> getAllSponsors(){
        return sponsorRepository.findAll();
    }
    public void deleteSponsorById(Long id){
        sponsorRepository.deleteById(id);
    }

}
