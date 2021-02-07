INSERT INTO image_files 
            (id, 
             name, 
             type, 
             data, 
             announcement_id) 
VALUES     (app_seq.nextval, 
            :name, 
            :dataType, 
            :data, 
            :announcementId)