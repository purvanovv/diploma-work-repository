SELECT ID, 
       EMAIL, 
       FIRST_NAME, 
       LAST_NAME, 
       USERNAME, 
       TELEPHONE, 
       IMAGE, 
       USER_ID
FROM   USER_INFO 
WHERE  USER_ID = :userId