

BEGIN 
    INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(1,'Автомобили и Джипове','CARS_AND_JEEPS','Y');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(2,'Бусове','BUSES','Y');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(3,'Камиони','TRUCKS','Y');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(4,'Мотоциклети','MOTORBIKES','Y');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(5,'Селскостопански','AGRICULTURAL','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(6,'Индустриални','INDUSTRIAL','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(7,'Кари','CURRY','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(8,'Каравани','CARAVANS','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(9,'Яхти и Лодки','YACHT_AND_BOATS','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(10,'Ремаркета','TRAILERS','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(11,'Велосипеди','BICYCLES','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(12,'Части','PARTS','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(13,'Аксесоари','ACCESSORIES','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(14,'Гуми и джанти','TIRES_AND_WHEELS','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(15,'Купува','BUYS','N');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE, IMPLEMENTED) VALUES(16,'Услуги','SERVICES','N');

    COMMIT; 
EXCEPTION 
    WHEN OTHERS THEN 
      ROLLBACK; 

      RAISE; 
END; 

/ 