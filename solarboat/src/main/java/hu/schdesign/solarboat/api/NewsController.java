package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.dao.NewsRepository;
import hu.schdesign.solarboat.model.News;
import hu.schdesign.solarboat.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/news")
@RestController
public class NewsController {
    private final NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService){
        this.newsService = newsService;
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    public News addNews(@RequestBody News news){
        return newsService.addNews(news);
    }

    @GetMapping
    public List<News> getAllNews(){

        Iterable<News> it = newsService.getAllNews();
        List<News> list = new ArrayList<>();
        for(News s : it){
            list.add(s);
        }
        return list;
    }

    @GetMapping(path = "{id}")
    public Optional<News> getNewsById(@PathVariable("id") Long id) {
        return newsService.getNewsById(id);
    }

    @DeleteMapping(path = "{id}")
    public void deleteNewsById(@PathVariable("id") Long id){
        newsService.deleteNewsById(id);
    }

    @PutMapping()
    public void updateNewsById( @RequestBody News news){
        newsService.updateNewsById(news);
    }
}