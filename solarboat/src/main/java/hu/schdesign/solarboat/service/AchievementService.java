package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.AchievementRepository;
import hu.schdesign.solarboat.model.Achievement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AchievementService {

    private AchievementRepository achievementRepository;
    @Autowired
    AchievementService(AchievementRepository achievementRepository){
        this.achievementRepository = achievementRepository;
    }
    public Iterable<Achievement> getAllAchievements(){
        return achievementRepository.findAll();
    }
    public Achievement addAchievment(Achievement achievement) {
        return this.achievementRepository.save(achievement);
    }
   /* public Optional<Achievement> getAchievementById(long id){
        return achievementRepository.findById(id);
    }
    */
    public Achievement updateAchievement(Achievement achievement){
        return achievementRepository.save(achievement);
    }
    public void deleteAchievementById(long id){
        achievementRepository.deleteById(id);
    }


}
