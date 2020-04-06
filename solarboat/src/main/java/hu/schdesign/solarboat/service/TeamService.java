package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.MemberRepository;
import hu.schdesign.solarboat.dao.TeamRepository;
import hu.schdesign.solarboat.model.Member;
import hu.schdesign.solarboat.model.Team;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TeamService {
    private final TeamRepository teamRepository;
    private final MemberRepository memberRepository;

    @Autowired
    TeamService(TeamRepository teamRepository, MemberRepository memberRepository){
        this.teamRepository = teamRepository;
        this.memberRepository = memberRepository;
    }

    public Team addTeam (Team team){return teamRepository.save(team);}
    public Iterable<Team> getAllTeams(){return teamRepository.findAll();}
    public Optional<Team> getTeamById(Long id){return teamRepository.findById(id);}
    public Team addMember(Long teamId, Long memberId){
        Optional<Member> optMemb = memberRepository.findById(memberId);
        if (optMemb != null) {
            Optional<Team> optTeam = teamRepository.findById(teamId);
            if(optTeam != null){
                if(!optTeam.get().isMember(optMemb.get())) {
                    optTeam.get().addMember(optMemb.get());
                    return teamRepository.save(optTeam.get());
                }
            }
        }
         return null;
    }
    public Team deleteMember(Long teamId, Long memberId){
        Optional<Member> optMemb = memberRepository.findById(memberId);
        if (optMemb.isPresent()) {
            Optional<Team> optTeam = teamRepository.findById(teamId);
            if(optTeam.isPresent()){
                optTeam.get().deleteMember(optMemb.get());
                return teamRepository.save(optTeam.get());
            }
        }
        return null;
    }
    public Team updateDescription(Long id, String desc_hu, String desc_en){
        Optional<Team> optTeam = teamRepository.findById(id);
        if(optTeam.isPresent()){
            optTeam.get().setDescription_en(desc_en);
            optTeam.get().setDescription_hu(desc_hu);
            return teamRepository.save(optTeam.get());
        }
        return null;
    }
    public Team updateLeader(Long teamId, Long memberId){
        Optional<Member> optMemb = memberRepository.findById(memberId);
        if (optMemb.isPresent()) {
            Optional<Team> optTeam = teamRepository.findById(teamId);
            if (optTeam.isPresent()) {
                optTeam.get().setLeader(optMemb.get());
                return teamRepository.save(optTeam.get());
            }
        }
        return null;
    }
}
