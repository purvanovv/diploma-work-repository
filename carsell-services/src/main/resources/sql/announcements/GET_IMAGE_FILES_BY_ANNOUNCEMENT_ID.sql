SELECT ID, 
       NAME, 
       TYPE, 
       DATA, 
       ANNOUNCEMENT_ID 
FROM   IMAGE_FILES 
WHERE  ANNOUNCEMENT_ID = :announcementId