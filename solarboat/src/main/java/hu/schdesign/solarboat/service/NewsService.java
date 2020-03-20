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
    public void addNews(News news){
        newsRepository.save(news);
    }
    public Iterable<News> getAllNews() {return newsRepository.findAll();}
    public Optional<News> getNewsById(long id){
        return newsRepository.findById((int)id);
    }
    public void deleteNewsById(long id){
        newsRepository.deleteById((int)id);
    }
    public void modifyNewsById(News news){
        News n = newsRepository.findById((int)news.getId()).get();
        n.setContent(news.getContent());
        n.setDate();
        n.setPicture(news.getPicture());
        n.setTitle(news.getTitle());
        newsRepository.save(n);
    }
}
