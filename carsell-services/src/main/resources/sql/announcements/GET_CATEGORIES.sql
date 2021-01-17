SELECT mc.id as MAIN_CATEGORY_ID,
	   mc.value as MAIN_CATEGORY_VALUE, 
       mc.name as MAIN_CATEGORY_NAME, 
       sc.id as SUB_CATEGORY_ID, 
       sc.name as SUB_CATEGORY_NAME
FROM   main_categories mc 
       left join sub_categories sc 
              ON mc.id = sc.main_category_id
WHERE mc.implemented = 'Y'