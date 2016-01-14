INSERT INTO
    clients
    VALUES
    ( default, 'Charlie', 'Kelly', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS0PaHc-YMK3uT0VvR5wGoJEp8dHr7xiZ3fEpuPVq_tCb9xAOQd'),
    ( default, 'Mac', 'McDonald', 'http://i1046.photobucket.com/albums/b469/dryedmangoezsunny/season7/sunny710-01.jpg'),
    ( default, 'Dennis', 'Reynolds', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSdlXhQpoehFwpd9D1ekzYDXm-esssblzw5H2rtHNQME5cZIYIr'),
    ( default, 'Dee', 'Reynolds', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTEYWRLoCURd8vbWwkLaESENUcSi6bFQLw_JkE8Tnd-nasBserv'),
    ( default, 'Frank', 'Reynolds', 'http://38.media.tumblr.com/dbbb765d240bad272a03517063902e88/tumblr_mtpnvqzDiU1sf3lulo1_1280.jpg');

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
    ( default, 1, 1, '2016-01-01', 3),
    ( default, 1, 1, '2016-01-02', 4),
    ( default, 1, 1, '2016-01-03', 2),
    ( default, 1, 1, '2016-01-04', 5),
    ( default, 1, 1, '2016-01-05', 1),
    ( default, 1, 1, '2016-01-05', 4),
    ( default, 1, 1, '2016-01-06', 3),
    ( default, 1, 1, '2016-01-07', 2);      

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
SELECT clients.firstname, clients.lastname, observations.name, client_observations.quantity 
FROM client_observations, clients, observations 
WHERE client_observations.client_id = clients.client_id AND client_observations.observation_id = observations.observation_id;