package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.Team;
import hu.schdesign.solarboat.service.TeamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/teams")
@RestController
public class TeamController {
    private final TeamService teamService;

    @Autowired
    TeamController(TeamService teamService){
        this.teamService = teamService;
    }

    @GetMapping
    public Iterable<Team> getAllTeams(){
        return  teamService.getAllTeams();
    }
    @GetMapping(path = "{id}")
    public Optional<Team> getTeamById(@PathVariable Long id){
        return  teamService.getTeamById(id);
    }
    @PostMapping
    public Team addTeam(@RequestBody Team team){
        return teamService.addTeam(team);
    }
    @PostMapping(path = "{teamId}/members/{memberId}" )
    public Team addMember(@PathVariable("teamId") Long teamId, @PathVariable("memberId") Long memberId){
        return this.teamService.addMember(teamId, memberId);
    }
    @DeleteMapping(path = "{teamId}/members/{memberId}")
    public Team deleteMember(@PathVariable("teamId") Long teamId, @PathVariable("memberId") Long memberId){
        return this.teamService.deleteMember(teamId, memberId);
    }
    @PutMapping(path = "{teamId}/description")
    public Team updateDescription(@PathVariable("teamId") Long teamId, @RequestBody List<String> desc){
       if(desc.size() == 2){
        return this.teamService.updateDescription(teamId, desc.get(0), desc.get(1));
       }
       return null;
    }
    @PutMapping(path = "{teamId}/leader/{memberId}")
    public Team updateLeader(@PathVariable("teamId") Long teamId, @PathVariable("memberId") Long memberId){
        return this.teamService.updateLeader(teamId, memberId);
    }


}
