package hu.schdesign.solarboat.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

public class GalleryPictureRequest {
    private String title_hu;
    private String title_en;
    @NotNull
    private MultipartFile file;

    public GalleryPictureRequest(@JsonProperty("title_hu")String title_hu,
                          @JsonProperty("title_en")String title_en,
                          @RequestParam("file") MultipartFile file) {
        this.title_hu = title_hu;
        this.title_en = title_en;
        this.file = file;
    }

    public GalleryPictureRequest() {
    }

    public String getTitle_hu() {
        return title_hu;
    }

    public void setTitle_hu(String title_hu) {
        this.title_hu = title_hu;
    }

    public String getTitle_en() {
        return title_en;
    }

    public void setTitle_en(String title_en) {
        this.title_en = title_en;
    }

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }
}
