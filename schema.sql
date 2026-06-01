-- Oracle SQL Schema for ERP Question Paper System
-- Run this in Oracle SQL Developer or sqlplus

CREATE TABLE QUESTION_PAPERS (
    id          NUMBER PRIMARY KEY,
    course      VARCHAR2(200) NOT NULL,
    code        VARCHAR2(20)  NOT NULL,
    semester    VARCHAR2(20)  NOT NULL,
    year        NUMBER(4)     NOT NULL,
    description VARCHAR2(1000),
    file_url    VARCHAR2(500),
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE SEQUENCE qp_seq START WITH 1 INCREMENT BY 1;

CREATE OR REPLACE TRIGGER qp_bi
BEFORE INSERT ON QUESTION_PAPERS
FOR EACH ROW
BEGIN
    IF :NEW.id IS NULL THEN
        SELECT qp_seq.NEXTVAL INTO :NEW.id FROM dual;
    END IF;
END;
/

-- CRUD Stored Procedures
CREATE OR REPLACE PROCEDURE sp_insert_paper(
    p_course IN VARCHAR2, p_code IN VARCHAR2, p_sem IN VARCHAR2,
    p_year IN NUMBER, p_desc IN VARCHAR2, p_url IN VARCHAR2
) AS BEGIN
    INSERT INTO QUESTION_PAPERS(course, code, semester, year, description, file_url)
    VALUES(p_course, p_code, p_sem, p_year, p_desc, p_url);
    COMMIT;
END;
/

CREATE OR REPLACE PROCEDURE sp_update_paper(
    p_id IN NUMBER, p_course IN VARCHAR2, p_code IN VARCHAR2,
    p_sem IN VARCHAR2, p_year IN NUMBER, p_desc IN VARCHAR2
) AS BEGIN
    UPDATE QUESTION_PAPERS SET course=p_course, code=p_code,
        semester=p_sem, year=p_year, description=p_desc WHERE id=p_id;
    COMMIT;
END;
/

CREATE OR REPLACE PROCEDURE sp_delete_paper(p_id IN NUMBER) AS BEGIN
    DELETE FROM QUESTION_PAPERS WHERE id=p_id; COMMIT;
END;
/

-- Sample inserts
EXEC sp_insert_paper('Database Management Systems','CS301','Sem 5',2024,'DBMS end-sem','/papers/dbms.pdf');
EXEC sp_insert_paper('Operating Systems','CS302','Sem 5',2024,'OS end-sem','/papers/os.pdf');
COMMIT;
