INSERT INTO USER_INFO 
            (ID, 
             EMAIL, 
             FIRST_NAME, 
             LAST_NAME, 
             USERNAME, 
             TELEPHONE, 
             IMAGE, 
             USER_ID) 
VALUES     (USER_INFO_SEQ.nextval, 
            :email, 
            :firstName, 
            :lastName, 
            :username, 
            :telephone, 
            :image, 
            :userId) 