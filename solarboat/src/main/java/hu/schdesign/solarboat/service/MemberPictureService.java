package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.MemberPictureRepository;
import hu.schdesign.solarboat.model.MemberPicture;
import hu.schdesign.solarboat.model.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class MemberPictureService {
    private final MemberPictureRepository memberPictureRepository;

    @Autowired
    MemberPictureService(MemberPictureRepository memberPictureRepository){
        this.memberPictureRepository = memberPictureRepository;
    }
    public MemberPicture addNews(MemberPicture memberPicture){
        return memberPictureRepository.save(memberPicture);
    }
    public Iterable<MemberPicture> getAllNews() {return memberPictureRepository.findAll();}
    public Optional<MemberPicture> getNewsById(Long id){
        return memberPictureRepository.findById(id);
    }
    public void deleteNewsById(Long id){
        memberPictureRepository.deleteById(id);
    }
}
