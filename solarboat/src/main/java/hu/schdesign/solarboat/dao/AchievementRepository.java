package hu.schdesign.solarboat.dao;

import hu.schdesign.solarboat.model.Achievement;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AchievementRepository extends CrudRepository<Achievement, Long> {


}
