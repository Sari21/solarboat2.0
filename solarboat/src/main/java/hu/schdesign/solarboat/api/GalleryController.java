package hu.schdesign.solarboat.api;

import hu.schdesign.solarboat.UploadFileResponse;
import hu.schdesign.solarboat.model.GalleryPicture;
import hu.schdesign.solarboat.model.GalleryPictureRequest;
import hu.schdesign.solarboat.service.GalleryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
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

 /*   @Secured("ROLE_ADMIN")
    @PostMapping(consumes = "application/json", produces = "application/json")
    public GalleryPicture addPicture(@Validated @RequestBody GalleryPicture galleryPicture){
        return galleryService.addPicture(galleryPicture);
    }*/
    @Secured("ROLE_ADMIN")
    @PostMapping(consumes = "application/json", produces = "application/json")
    public ResponseEntity<GalleryPicture> addPicture(@Validated @RequestBody GalleryPictureRequest galleryPicture) throws URISyntaxException, IOException {
                GalleryPicture picture = galleryService.addPicture(galleryPicture);
                if(picture.getPicture().isEmpty() || picture.getSmallPicture().isEmpty()){
                    HttpHeaders responseHeaders = new HttpHeaders();
                    responseHeaders.setLocation(new URI("/uploadFile"));
                    responseHeaders.set("Error", "The file is not an image");
                    return new ResponseEntity<GalleryPicture>(null, responseHeaders, HttpStatus.BAD_REQUEST);
                }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setLocation(new URI("uploadFile"));
        return new ResponseEntity<>(picture,responseHeaders ,HttpStatus.CREATED);
    }
    @Secured("ROLE_ADMIN")
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
    @Secured("ROLE_ADMIN")
    @DeleteMapping(path = "{id}")
    public void deletePicture(@PathVariable("id") Long id){
        galleryService.deletePictureById(id);
    }
}
