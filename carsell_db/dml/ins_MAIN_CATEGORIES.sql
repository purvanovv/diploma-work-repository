

BEGIN 
    INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(1,'Автомобили и Джипове','CARS_AND_JEEPS');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(2,'Бусове','BUSES');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(3,'Камиони','TRUCKS');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(4,'Мотоциклети','MOTORBIKES');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(5,'Селскостопански','AGRICULTURAL');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(6,'Индустриални','INDUSTRIAL');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(7,'Кари','CURRY');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(8,'Каравани','CARAVANS');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(9,'Яхти и Лодки','YACHT_AND_BOATS');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(10,'Ремаркета','TRAILERS');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(11,'Велосипеди','BICYCLES');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(12,'Части','PARTS');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(13,'Аксесоари','ACCESSORIES');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(14,'Гуми и джанти','TIRES_AND_WHEELS');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(15,'Купува','BUYS');
	INSERT INTO MAIN_CATEGORIES (ID, NAME, VALUE) VALUES(16,'Услуги','SERVICES');

    COMMIT; 
EXCEPTION 
    WHEN OTHERS THEN 
      ROLLBACK; 

      RAISE; 
END; 

/ 