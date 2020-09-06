SELECT Upper(Substr(mm.make, 1, 1)) AS GROUP_NAME, 
       mm.id, 
       mm.make, 
       mm.model, 
       mm.main_category_id 
FROM   make_model mm 
WHERE  mm.main_category_id = :mainCategoryId 
ORDER  BY mm.make ASC, 
          mm.model ASC