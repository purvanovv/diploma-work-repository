CREATE OR REPLACE FUNCTION &pwd_verify_func
(username varchar2,
  password varchar2,
  old_password varchar2)
  RETURN boolean IS
   n boolean;
   m integer;
   o integer;
   differ integer;
   isdigit boolean;
   ischar  boolean;
   ispunct boolean;
   digitarray varchar2(20);
   punctarray varchar2(25);
   chararray varchar2(52);
   signarray varchar2(97);

BEGIN
   digitarray:= '0123456789';
   chararray:= 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
   punctarray:='!"#$%&()``*+,-/:;<=>?_';

   -- Check if the password is same as the username
   IF NLS_LOWER(password) = NLS_LOWER(username) THEN
     raise_application_error(-20001, 'Password same as or similar to user');
   END IF;

   -- Check for the minimum length of the password
   IF length(password) < 8 THEN
      raise_application_error(-20002, 'Password length less than 8');
   END IF;

   -- Check if the password is too simple. A dictionary of words may be
   -- maintained and a check may be made so as not to allow the words
   -- that are too simple for the password.
   IF NLS_LOWER(password) IN ('welcome', 'database', 'account', 'user', 'password', 'oracle', 'computer', 'abcd') THEN
      raise_application_error(-20002, 'Password too simple');
   END IF;

   -- Check if the password contains at least one letter, one digit and one
   -- punctuation mark.
   -- 1. Check for the digit
   isdigit:=FALSE;
   m := length(password);
   FOR i IN 1..10 LOOP
      FOR j IN 1..m LOOP
         IF substr(password,j,1) = substr(digitarray,i,1) THEN
            isdigit:=TRUE;
             GOTO findchar;
         END IF;
      END LOOP;
   END LOOP;
   IF isdigit = FALSE THEN
      raise_application_error(-20003, 'Password should contain at least one digit and one character');
   END IF;
   -- 2. Check for the character
   <<findchar>>
   ischar:=FALSE;
   FOR i IN 1..length(chararray) LOOP
      FOR j IN 1..m LOOP
         IF substr(password,j,1) = substr(chararray,i,1) THEN
            ischar:=TRUE;
             GOTO findpunct;
         END IF;
      END LOOP;
   END LOOP;
   IF ischar = FALSE THEN
      raise_application_error(-20003, 'Password should contain at least one digit and one character');
   END IF;
   -- 3. Check for the punctuation
   <<findpunct>>
   ispunct:=FALSE;
   FOR i IN 1..length(punctarray) LOOP
      FOR j IN 1..m LOOP
         IF substr(password,j,1) = substr(punctarray,i,1) THEN
            ispunct:=TRUE;
             GOTO endsearch;
         END IF;
      END LOOP;
   END LOOP;

   IF ispunct = FALSE THEN
      raise_application_error(-20003, 'Password should contain at least one digit, one character and one punctuation');
   END IF;

   <<endsearch>>
   -- Check if the password differs from the previous password by at least
   -- 3 letters
---   IF old_password IS NOT NULL THEN
---     differ := length(old_password) - length(password);
---
---     IF abs(differ) < 3 THEN
---       IF length(password) < length(old_password) THEN
---         m := length(password);
---       ELSE
---         m := length(old_password);
---       END IF;
---
---       differ := abs(differ);
---       FOR i IN 1..m LOOP
---         IF substr(password,i,1) != substr(old_password,i,1) THEN
---           differ := differ + 1;
---         END IF;
---       END LOOP;
---
---       IF differ < 3 THEN
---         raise_application_error(-20004, 'Password should differ by at \
---         least 3 characters');
---       END IF;
---     END IF;
---   END IF;

   -- Check if the password has maxiumum 3 consecutive identical characters from any
   -- position in the previous password
   IF old_password IS NOT NULL THEN
      FOR i IN 1..length(password) LOOP
         FOR j IN 1..length(old_password) LOOP
            IF NLS_LOWER(substr(old_password,j,4)) = NLS_LOWER(substr(password,i,4)) THEN
               raise_application_error(-20005, 'Password has more than 3 consecutive \
               identical characters from previous password');
               GOTO endprevious;
            END IF;
         END LOOP;
      END LOOP;
   END IF;
   <<endprevious>>

   -- Check if the password contains maximum 3 identical consecutive characters
   signarray := digitarray || chararray || punctarray;
   FOR i IN 1..length(signarray) LOOP
      m := 0;
      FOR j IN 1..length(password) LOOP
         IF substr(signarray,i,1) = NLS_LOWER(substr(password,j,1)) THEN
            m := m + 1;
            IF substr(signarray,i,1) = NLS_LOWER(substr(password,j + 1,1)) THEN
               m := m + 1;
               IF substr(signarray,i,1) = NLS_LOWER(substr(password,j + 2,1)) THEN
                  m := m + 1;
                  IF substr(signarray,i,1) = NLS_LOWER(substr(password,j + 3,1)) THEN
                     raise_application_error(-20006, 'Password contains more than 3 consecutive identical characters');
                     GOTO endidentical;
                  ELSE
                     m := 0;
                  END IF;
               ELSE
                  m := 0;
               END IF;
            ELSE
               m := 0;
            END IF;
         END IF;
      END LOOP;
   END LOOP;
   <<endidentical>>


   -- Check if the userid is part of the password
   n:= FALSE;
   m := length(password);
   o := length(username);
   FOR i IN 1..m LOOP
      IF NLS_LOWER(substr(password,i,o)) = NLS_LOWER(username) THEN
         n := true;
         GOTO enduserid;
      END IF;
   END LOOP;
   <<enduserid>>
   IF n = TRUE THEN
      raise_application_error(-20007, 'Password contains the username');
   END IF;

   -- Check if digit is in last psition
   n := FALSE;
   m := length(password);
   FOR i IN 1..length(digitarray) LOOP
      IF (substr(password,m,1)) = (substr(digitarray,i,1)) THEN
         n := true;
         GOTO digitlast;
      END IF;
   END LOOP;
   <<digitlast>>
   IF n = TRUE THEN
      raise_application_error(-20008, 'Password has digit in last position');
   END IF;

   -- Everything is fine; return TRUE ;
   RETURN(TRUE);
END;
/
