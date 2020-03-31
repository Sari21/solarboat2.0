package hu.schdesign.solarboat.api;


import hu.schdesign.solarboat.model.Member;
import hu.schdesign.solarboat.model.News;
import hu.schdesign.solarboat.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/member")
@RestController
public class MemberController {
    private final MemberService memberService;
    @Autowired
    public MemberController(MemberService memberService){
        this.memberService = memberService;
    }
    @PostMapping(consumes = "application/json", produces = "application/json")
    public Member addMember(Member member){
        return memberService.addMember(member);
    }
    @GetMapping
    public List<Member> getAllMembers(){
        Iterable<Member> it = memberService.getAllMembers();
        List<Member> list = new ArrayList<>();
        for(Member s : it){
            list.add(s);
        }
        return list;
    }
    @GetMapping(path="{id}")
    public Optional<Member> getMemberById(@PathVariable("id") Long id){
        return memberService.getMemberById(id);
    }
    @PutMapping
    public Member updateMember(Member member){
        return memberService.updateMember(member);
    }
    @DeleteMapping(path="{id}")
    public void deleteMemberById(@PathVariable("id") Long id){
        memberService.deleteMemberById(id);
    }

}
