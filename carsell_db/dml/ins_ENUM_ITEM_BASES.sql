

BEGIN 
    	INSERT INTO ENUM_ITEM_BASES (ID, NAME, DISCRIMINATOR) VALUES(1,'35','PeriodType');
	INSERT INTO ENUM_ITEM_BASES (ID, NAME, DISCRIMINATOR) VALUES(2,'49','PeriodType');

    COMMIT; 
EXCEPTION 
    WHEN OTHERS THEN 
      ROLLBACK; 

      RAISE; 
END; 

/ 