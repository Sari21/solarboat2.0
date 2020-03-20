package hu.schdesign.solarboat.dao;

import hu.schdesign.solarboat.model.News;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsRepository extends CrudRepository<News, Integer> {
}
