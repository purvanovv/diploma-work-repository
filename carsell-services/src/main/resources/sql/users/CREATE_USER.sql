INSERT INTO USERS 
            (ID, 
             PASSWORD, 
             USERNAME) 
VALUES     (app_seq.nextval, 
            :password, 
            :username) 