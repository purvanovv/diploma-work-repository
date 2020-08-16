SELECT a.id, 
       a.main_category_id, 
       a.brand, 
       a.model, 
       a.engine_type, 
       a.condition, 
       a.horse_power, 
       a.gearbox_type, 
       a.sub_category_id, 
       a.cubature, 
       a.cooling_type, 
       a.engine_category, 
       a.price, 
       a.currency, 
       a.date_of_manufacture, 
       a.mileage, 
       a.color, 
       a.region, 
       a.city, 
       a.period_id, 
       a.ad_valid_from, 
       a.ad_valid_to, 
       a.description, 
       a.created_by 
FROM   announcements a 
WHERE  a.delete_flag = 'N'