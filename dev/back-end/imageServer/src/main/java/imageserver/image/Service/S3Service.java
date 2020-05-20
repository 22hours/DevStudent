package imageserver.image.Service;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectListing;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3ObjectSummary;
import imageserver.image.Entity.FileUploadData;
import imageserver.image.Exception.FileUploadException;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.Iterator;

@Component
public class S3Service {
    private AmazonS3 s3Client;

    private final String temp = "linmemhnebggaijoinhajeoyndohsgauhenkwin/";
    private final String real = "linjiewhngguyeamjhghoaonknmnioeebdnihgjloenewason/";

    @Value("${cloud.aws.credentials.accessKey}")
    private String accessKey;

    @Value("${cloud.aws.credentials.secretKey}")
    private String secretKey;

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    @Value("${cloud.aws.region.static}")
    private String region;

    @Autowired
    private RandMaker randMaker;

    @PostConstruct
    public void setS3Client() {
        AWSCredentials credentials = new BasicAWSCredentials(this.accessKey, this.secretKey);

        s3Client = AmazonS3ClientBuilder.standard()
                .withCredentials(new AWSStaticCredentialsProvider(credentials))
                .withRegion(this.region)
                .build();
    }

    public void deleteFiles() {
        try {
            System.out.println("Dummy Files Delete");
            ObjectListing object_listing = s3Client.listObjects(bucket);
            while (true) {
                for (Iterator<?> iterator =
                     object_listing.getObjectSummaries().iterator();
                     iterator.hasNext(); ) {
                    S3ObjectSummary summary = (S3ObjectSummary) iterator.next();
                    String str = summary.getKey().substring(0, 4);
                    if (str.equals("temp"))
                        s3Client.deleteObject(bucket, summary.getKey());
                }

                // more object_listing to retrieve?
                if (object_listing.isTruncated()) {
                    object_listing = s3Client.listNextBatchOfObjects(object_listing);
                } else {
                    break;
                }
            }
            System.out.println("Delete Complete");
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("Delete Fail!!!");
        }
    }

    public void upload(String date, String[] fileNames) {
        try {
            for (String fileName : fileNames) {
                System.out.println("FileName = " + fileName);
                String str = fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf('.') + 4);
                System.out.println("파싱한 값 : " + str);
                fileName = str;
                String from = this.temp + fileName;
                String to = real + date + "/" + fileName;
                s3Client.copyObject(bucket, from, bucket, to);
                s3Client.deleteObject(bucket, from);
            }
        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("uploadRealFile Fail!!!");
        }
    }

    public FileUploadData upload(MultipartFile file) throws IOException {
        try {
            String fileName = file.getOriginalFilename();
            String rand = randMaker.getKey(false, 20);

            if (fileName.contains(".."))
                throw new FileUploadException("파일명에 부적합 문자가 포함되어 있습니다. " + fileName);

            String str = fileName.substring(fileName.lastIndexOf('.'));
            rand = rand + str;
            fileName = temp + rand;

            s3Client.putObject(new PutObjectRequest(bucket, fileName, file.getInputStream(), null)
                    .withCannedAcl(CannedAccessControlList.PublicRead));
            FileUploadData fileUploadData = new FileUploadData(s3Client.getUrl(bucket, fileName).toString(), rand);

            return fileUploadData;

        } catch (Exception e) {
            e.printStackTrace();
            System.out.println("uploadDummyFile Fail!!!");
            return null;
        }
    }
}
