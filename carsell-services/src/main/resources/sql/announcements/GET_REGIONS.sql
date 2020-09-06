SELECT r.region_name, 
       rc.city_name 
FROM   regions r 
       join region_cities rc 
         ON rc.region_id = r.id