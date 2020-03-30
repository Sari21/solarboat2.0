package hu.schdesign.solarboat.dao;

import hu.schdesign.solarboat.model.MemberPicture;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberPictureRepository  extends CrudRepository<MemberPicture, Long> {
}
