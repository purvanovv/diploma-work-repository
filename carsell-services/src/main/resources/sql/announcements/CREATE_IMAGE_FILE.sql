INSERT INTO image_files 
            (id, 
             name, 
             data_type, 
             data, 
             announcement_id) 
VALUES     (image_files_seq.nextval, 
            :name, 
            :dataType, 
            :data, 
            :announcementId)