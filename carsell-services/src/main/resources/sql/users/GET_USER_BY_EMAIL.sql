SELECT u.ID,
       u.USERNAME,
       u.PASSWORD
FROM   USERS u
       JOIN USER_INFO ui
         ON u.ID = ui.USER_ID
WHERE  ui.EMAIL = :email