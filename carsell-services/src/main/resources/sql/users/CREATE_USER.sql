INSERT INTO USERS 
            (ID, 
             PASSWORD, 
             USERNAME) 
VALUES     (USERS_SEQ.nextval, 
            :password, 
            :username) 