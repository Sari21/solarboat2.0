package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.model.GalleryPicture;
import hu.schdesign.solarboat.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "*")
@RequestMapping("api/gallery")
@RestController
public class GalleryController {
    private final GalleryService galleryService;
    @Autowired
    GalleryController(GalleryService galleryService){
        this.galleryService = galleryService;
    }
    @PostMapping(consumes = "application/json", produces = "application/json")
    public GalleryPicture addPicture(@Validated @RequestBody GalleryPicture galleryPicture){
        return galleryService.addPicture(galleryPicture);
    }
    @PutMapping
    public GalleryPicture updatePicture(@Validated @RequestBody GalleryPicture galleryPicture){
        return galleryService.updatePicture(galleryPicture);
    }
    @GetMapping
    public Iterable<GalleryPicture> getAllPictures(){
        return galleryService.getAllPictures();
    }
    @GetMapping(path = "{id}")
    public Optional<GalleryPicture> getPictureById(@PathVariable("id") Long id){
        return galleryService.getPictureById(id);
    }
    @DeleteMapping(path = "{id}")
    public void deletePicture(@PathVariable("id") Long id){
        galleryService.deletePictureById(id);
    }
}
