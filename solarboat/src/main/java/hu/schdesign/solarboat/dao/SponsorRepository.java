package hu.schdesign.solarboat.dao;

import hu.schdesign.solarboat.model.Sponsor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SponsorRepository extends CrudRepository<Sponsor, Long> {

}
