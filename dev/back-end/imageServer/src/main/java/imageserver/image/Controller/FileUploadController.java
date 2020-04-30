package imageserver.image.Controller;

import imageserver.image.Response.FileUploadResponse;
import imageserver.image.Service.FileUploadDownloadService;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import java.io.*;
import java.nio.file.Files;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
public class FileUploadController {

    @Autowired
    private FileUploadDownloadService service;

    @GetMapping("/")
    public String controllerMain() throws ParseException {
        long time = System.currentTimeMillis();
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String now = dayTime.format(new Date(time));
        System.out.println(now);
        Date originalDate = dayTime.parse(now);
        long originalTime = originalDate.getTime();
        dayTime = new SimpleDateFormat("yyyy-MM-dd");
        return dayTime.format(new Date(originalTime));
        /*Calendar cal = Calendar.getInstance();
        System.out.println("오늘 날짜 : " + dateFormat.format(cal.getTime()));
        cal.add(Calendar.DAY_OF_MONTH, 1);
        return "오늘 날짜 : " + dateFormat.format(cal.getTime());*/
    }

    @CrossOrigin(origins = "*")
    @PostMapping("/uploadDummyFile")
    public FileUploadResponse uploadDummyFile(@RequestParam("file") MultipartFile file) {
        service.setFileLocation("userContent");
        String fileName = service.storeFile(file,true);
        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/userContent/")
                .path(fileName)
                .toUriString();
        return new FileUploadResponse(fileName, fileDownloadUri, file.getContentType(), file.getSize());
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/uploadFile/{date}/{fileName:.+}")
    public FileUploadResponse uploadRealFile(@PathVariable String date,@PathVariable String fileName) throws IOException, ParseException {
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date originalDate = dayTime.parse(date);
        long originalTime = originalDate.getTime();
        dayTime = new SimpleDateFormat("yyyy-MM-dd");
        date = dayTime.format(new Date(originalTime));
        service.setFileLocation("userContent");
        Resource resource = service.loadFileAsResource(fileName);
        File originalFile = resource.getFile();
        service.setFileLocation("userRealContent/" + date);

        FileItem fileItem = new DiskFileItem("mainFile", Files.probeContentType(originalFile.toPath()), false, originalFile.getName(), (int) originalFile.length(), originalFile.getParentFile());
        try {
            InputStream input = new FileInputStream(originalFile);
            OutputStream os = fileItem.getOutputStream();
            IOUtils.copy(input, os);
            // Or faster..
            // IOUtils.copy(new FileInputStream(file), fileItem.getOutputStream());
        } catch (IOException ex) {
            System.out.println("File -> MultipartFile 전환 오류!");
            ex.printStackTrace();
        }

        MultipartFile multipartFile = new CommonsMultipartFile(fileItem);

        String tempfileName = service.storeFile(multipartFile,false);

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/userRealContent/" + date + "/")
                .path(tempfileName)
                .toUriString();
        return new FileUploadResponse(tempfileName, fileDownloadUri, multipartFile.getContentType(), multipartFile.getSize());
    }

    @PostMapping("/uploadMultipleFiles")
    public List<FileUploadResponse> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files) {
        return Arrays.asList(files)
                .stream()
                .map(file -> uploadDummyFile(file))
                .collect(Collectors.toList());
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/userContent/{fileName:.+}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String fileName, HttpServletRequest request) {
        // Load file as Resource
        Resource resource = service.loadFileAsResource(fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {

        }

        // Fallback to the default content type if type could not be determined
        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

    @CrossOrigin(origins = "*")
    @GetMapping("/userRealContent/{date}/{fileName:.+}")
    public ResponseEntity<Resource> downloadRealFile(@PathVariable String date, @PathVariable String fileName, HttpServletRequest request) throws ParseException {
        // Load file as Resource
        SimpleDateFormat dayTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date originalDate = dayTime.parse(date);
        long originalTime = originalDate.getTime();
        dayTime = new SimpleDateFormat("yyyy-MM-dd");
        date = dayTime.format(new Date(originalTime));
        service.setFileLocation("userRealContent/" + date);
        Resource resource = service.loadFileAsResource(fileName);

        // Try to determine file's content type
        String contentType = null;
        try {
            contentType = request.getServletContext().getMimeType(resource.getFile().getAbsolutePath());
        } catch (IOException ex) {

        }

        // Fallback to the default content type if type could not be determined
        if (contentType == null) {
            contentType = "application/octet-stream";
        }

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(contentType))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }

}