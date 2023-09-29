-- commands used to create databse and table
CREATE TABLE lifts (
    id serial PRIMARY KEY,
    user_id VARCHAR( 100 ) NOT NULL,
    lift_type VARCHAR ( 50 ) NOT NULL,
    reps INTEGER NOT NULL,
    weight NUMERIC NOT NULL,
    date DATE NOT NULL,
    estimated_max NUMERIC GENERATED ALWAYS AS (weight / (1.0278 - (0.0278 * reps))) STORED
);
