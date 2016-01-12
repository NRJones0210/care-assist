INSERT INTO
    clients
    VALUES
    ( default, 'Charlie', 'Kelly'),
    ( default, 'Mac', 'McDonald'),
    ( default, 'Dennis', 'Reynolds'),
    ( default, 'Dee', 'Reynolds'),
    ( default, 'Frank', 'Reynolds');

INSERT INTO
    departments
    VALUES
    ( default, 'Paddys Pub');

INSERT INTO
    observations
    VALUES
    ( default, 'seizure'), 
    ( default, 'outburst');

INSERT INTO
    client_observations
    VALUES
    ( 2, 2, 3);
    ( 1, 1, 3);        

INSERT INTO
    guardians
    VALUES
    ( default, 'Sirius', 'Black' ),
    ( default, 'Lucius', 'Malfoy' ),
    ( default, 'Xenophilius', 'Lovegood' ),
    ( default, 'Amos', 'Diggory' );

INSERT INTO
    users
    VALUES
    ( default, 'Albus', 'Dumbledore' ),     -- Admin      of Hogwarts   Day-Program
    ( default, 'Minerva', 'McGonagall' ),   -- Supervisor of Gryffindor House
    ( default, 'Nearly-Headless', 'Nick' ), -- Employee   of Gryffindor House
    ( default, 'Severus', 'Snape' ),        -- Supervisor of Slytherin  House
    ( default, 'Bloody', 'Baron' ),         -- Employee   of Slytherin  House
    ( default, 'Filius', 'Flitwick' ),      -- Supervisor of Ravenclaw  House
    ( default, 'Grey', 'Lady' ),            -- Employee   of Ravenclaw  House
    ( default, 'Pomona', 'Sprout' ),        -- Supervisor of Hufflepuff House
    ( default, 'Fat', 'Friar' );            -- Employee   of Hufflepuff House

INSERT INTO
    departments
    VALUES
    ( default, 'Hogwarts' ),
    ( default, 'Gryffindor' ),
    ( default, 'Slytherin' ),
    ( default, 'Ravenclaw' ),
    ( default, 'Hufflepuff' );



-- What to use to get back name, observation_type,
-- SELECT clients.firstname, clients.lastname, observations.name, client_observations.quantity 
-- FROM client_observations, clients, observations 
-- WHERE client_observations.client_id = clients.client_id AND client_observations.observation_id = observations.observation_id;