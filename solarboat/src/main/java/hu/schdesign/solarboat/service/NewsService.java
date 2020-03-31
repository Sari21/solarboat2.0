package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.NewsRepository;
import hu.schdesign.solarboat.model.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class NewsService {
    private final NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository){
        this.newsRepository = newsRepository;
    }

    public News addNews(News news){
        return newsRepository.save(news);
    }
    public Iterable<News> getAllNews() {return newsRepository.findAll();}
    public Optional<News> getNewsById(Long id){
        return newsRepository.findById(id);
    }
    public void deleteNewsById(Long id){
        newsRepository.deleteById(id);
    }
    public void updateNews(News news){
        newsRepository.save(news);
    }
}
