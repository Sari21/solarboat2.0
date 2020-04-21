package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.NewsPagingRepository;
import hu.schdesign.solarboat.dao.NewsRepository;
import hu.schdesign.solarboat.model.News;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class NewsService {
    private final NewsRepository newsRepository;
    private final NewsPagingRepository newsPagingRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository, NewsPagingRepository newsPagingRepository){
        this.newsRepository = newsRepository;
        this.newsPagingRepository = newsPagingRepository;
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
    public Page<News> getPage(int pageNo, int pageSize){
        PageRequest paging = PageRequest.of(pageNo, pageSize, Sort.by("id").descending());
        Page<News> pagedResult = newsPagingRepository.findAll(paging);
        pagedResult.isLast();
        if(pagedResult.hasContent()) {
            return pagedResult;
        } else {
            return null;
        }
    }
}
