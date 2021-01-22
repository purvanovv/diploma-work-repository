UPDATE USER info 
SET    FIRST_NAME = :firstName, 
       LAST_NAME = :lastName, 
       EMAIL = :email, 
       TELEPHONE = :telephone, 
       IMAGE = :image 
WHERE  USER_ID = :userId	