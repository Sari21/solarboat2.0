package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.MemberPicture;
import hu.schdesign.solarboat.model.News;
import hu.schdesign.solarboat.service.MemberPictureService;
import hu.schdesign.solarboat.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/memberPicture")
@RestController
public class MemberPictureController {
    private final MemberPictureService memberPictureService;

    @Autowired
    public MemberPictureController(MemberPictureService memberPictureService){
        this.memberPictureService = memberPictureService;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    public MemberPicture addNews(@RequestBody MemberPicture news){
        return memberPictureService.addNews(news);
    }

    @GetMapping
    public List<MemberPicture> getAllNews(){

        Iterable<MemberPicture> it = memberPictureService.getAllNews();
        List<MemberPicture> list = new ArrayList<>();
        for(MemberPicture s : it){
            list.add(s);
        }
        return list;
    }

    @GetMapping(path = "{id}")
    public Optional<MemberPicture> getNewsById(@PathVariable("id") Long id) {
        return memberPictureService.getNewsById(id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteNewsById(@PathVariable("id") Long id){
        memberPictureService.deleteNewsById(id);
    }

}
