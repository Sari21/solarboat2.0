package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.GalleryRepository;
import hu.schdesign.solarboat.model.GalleryPicture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GalleryService {
    private final GalleryRepository galleryRepository;
    @Autowired
    GalleryService(GalleryRepository galleryRepository){
        this.galleryRepository = galleryRepository;
    }
    public GalleryPicture addPicture(GalleryPicture galleryPicture){
        return galleryRepository.save(galleryPicture);
    }
    public void deletePictureById(Long id){
        //TODO magát a képet is kitörölni
        galleryRepository.deleteById(id);
    }
    public Iterable<GalleryPicture> getAllPictures(){
        return galleryRepository.findAll();
    }
    public Optional<GalleryPicture> getPictureById(Long id){
        return galleryRepository.findById(id);
    }
    public GalleryPicture updatePicture (GalleryPicture galleryPicture){
        return galleryRepository.save(galleryPicture);
    }
}
