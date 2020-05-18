package imageserver.image.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FileUploadData {
    private String fileDownloadUri;
    private String fileName;

    public FileUploadData(String fileDownloadUri, String fileName) {
        this.fileDownloadUri = fileDownloadUri;
        this.fileName = fileName;
    }
}
