package hu.schdesign.solarboat.service;

import hu.schdesign.solarboat.dao.GalleryRepository;
import hu.schdesign.solarboat.model.GalleryPicture;
import hu.schdesign.solarboat.model.GalleryPictureRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;

@Service
public class GalleryService {
    private final GalleryRepository galleryRepository;
    private final FileStorageService fileStorageService;
    private final String PATH = "gallery";
    private final int PICTURE_WIDTH = 1200;
    private final int SMALL_PICTURE_WIDTH = 400;

    @Autowired
    GalleryService(GalleryRepository galleryRepository,
                   FileStorageService fileStorageService){
        this.galleryRepository = galleryRepository;
        this.fileStorageService = fileStorageService;
    }
   /* public GalleryPicture addPicture(GalleryPicture galleryPicture){
        return galleryRepository.save(galleryPicture);
    }*/
    public GalleryPicture addPicture(GalleryPictureRequest galleryPictureRequest) throws IOException {
        GalleryPicture newGalleryPicture = new GalleryPicture();
        newGalleryPicture.setTitle_en(galleryPictureRequest.getTitle_en());
        newGalleryPicture.setTitle_hu(galleryPictureRequest.getTitle_hu());
        MultipartFile picture = fileStorageService.resizeImage(galleryPictureRequest.getFile(), this.PATH, this.PICTURE_WIDTH);
        MultipartFile smallPicture = fileStorageService.resizeImage(galleryPictureRequest.getFile(), this.PATH, this.SMALL_PICTURE_WIDTH);
        newGalleryPicture.setPicture(fileStorageService.storeResizedFile(picture, "gallery", ""));
        newGalleryPicture.setPicture(fileStorageService.storeResizedFile(smallPicture, "gallery", "small"));
        return galleryRepository.save(newGalleryPicture);
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
