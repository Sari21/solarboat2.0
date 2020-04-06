package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.Achievement;
import hu.schdesign.solarboat.model.News;
import hu.schdesign.solarboat.service.AchievementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/achievement")
@RestController
public class AchievementController {
    private AchievementService achievementService;
    @Autowired
    AchievementController(AchievementService achievementService){
        this.achievementService = achievementService;
    }
    @GetMapping
    public List<Achievement> getAllAchievements(){

        Iterable<Achievement> it = achievementService.getAllAchievements();
        List<Achievement> list = new ArrayList<>();
        for(Achievement s : it){
            list.add(s);
        }
        return list;
    }
    @DeleteMapping(path = "{id}")
    public void deleteAchievementById(@PathVariable("id") Long id){
        achievementService.deleteAchievementById(id);
    }

    @PutMapping()
    public void updateAchievementById( @RequestBody Achievement achievement){
        achievementService.updateAchievement(achievement);
    }
    @PostMapping(consumes = "application/json", produces = "application/json")
    public Achievement addAchievement(@RequestBody Achievement achievement){
        return achievementService.addAchievment(achievement);
    }


}
