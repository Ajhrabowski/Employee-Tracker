INSERT INTO department (name)
VALUES ("Managment"),
       ("Inventory"),
       ("Quality"),
       ("Marketing"),
       ("Human Resources"),
       ("Maintenance"),
       ("IT"),
       ("Operations"),
       ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("ICQA Manager", 121000, 1),
       ("Invetory Control Specialist", 41000, 2),
       ("Quality Assurance Specialist", 40000, 3),
       ("Director of Digital Marketing", 103650, 4),
       ("HR Director", 113753, 5);'////'



INSERT INTO employee (role_id, first_name, last_name, manager_id )
VALUES (1, "Fred", "Pearson",null),
       (2, "Anthony", "Hrabowski",1),
       (3, "Victor", "Grisson",1),
       (4, "Logan", "Hrabowski",1),
       (5, "Lola", "Black",1);
    


       