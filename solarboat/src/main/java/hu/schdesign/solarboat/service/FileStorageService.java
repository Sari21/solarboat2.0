package hu.schdesign.solarboat.service;


import hu.schdesign.solarboat.Exceptions.FileStorageException;
import hu.schdesign.solarboat.Exceptions.MyFileNotFoundException;
import hu.schdesign.solarboat.Exceptions.NotAnImageException;
import hu.schdesign.solarboat.FileStorageProperties;
import org.imgscalr.Scalr;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import retrofit2.http.Multipart;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.LocalDateTime;

@Service
public class FileStorageService {

    private Path fileStorageLocation;
    private final String path;

    @Autowired
    public FileStorageService(FileStorageProperties fileStorageProperties) {
        this.path = fileStorageProperties.getUploadDir();
        this.fileStorageLocation = Paths.get(fileStorageProperties.getUploadDir())
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
    }

    public MultipartFile resizeImage(MultipartFile file, String path, int width) throws IOException {
        if (!file.getContentType().contains("image")) {
            return null;
        }
        BufferedImage originalImage = ImageIO.read(file.getInputStream());
        if (originalImage.getWidth() > width) {
            ByteArrayOutputStream baos = new ByteArrayOutputStream();
            ImageIO.write(Scalr.resize(originalImage, width), "jpg", baos);
            baos.flush();
            return new MockMultipartFile(file.getOriginalFilename(), baos.toByteArray());
        }
        return file;
    }

    public String storeResizedFile(MultipartFile file, String path, String name) {
        if (!file.getContentType().contains("image")) {
            return null;
        }
        this.fileStorageLocation = Paths.get(this.path + "/" + path)
                .toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
        // Normalize file name
        String concatFilename = file.getOriginalFilename();
        if (concatFilename.isEmpty()) {
            concatFilename = "";
        }
        if (!name.isEmpty()) {
            concatFilename = concatFilename + "_" + name;
        }
        concatFilename = concatFilename + "_" + LocalDateTime.now().toString();
        String fileName = StringUtils.cleanPath(concatFilename);

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public String storeFile(MultipartFile file, String path) {
        if (!file.getContentType().contains("image")) {
            return null;
        }
        this.fileStorageLocation = Paths.get(this.path + "/" + path)
                .toAbsolutePath().normalize();
        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new FileStorageException("Could not create the directory where the uploaded files will be stored.", ex);
        }
        // Normalize file name
        String concatFilename = file.getOriginalFilename();
        if (concatFilename.isEmpty()) {
            concatFilename = "";
        }
        //concatFilename += LocalDateTime.now().toString();
        String fileName = StringUtils.cleanPath(concatFilename);

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new FileStorageException("Sorry! Filename contains invalid path sequence " + fileName);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        } catch (IOException ex) {
            throw new FileStorageException("Could not store file " + fileName + ". Please try again!", ex);
        }
    }

    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                return resource;
            } else {
                throw new MyFileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new MyFileNotFoundException("File not found " + fileName, ex);
        }
    }

    public void deleteFile(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());

            if (resource.exists()) {
                File file = new File(filePath.toString());
                file.delete();

            } else {
                throw new MyFileNotFoundException("File not found " + fileName);
            }
        } catch (MalformedURLException ex) {
            throw new MyFileNotFoundException("File not found " + fileName, ex);
        }
    }
}