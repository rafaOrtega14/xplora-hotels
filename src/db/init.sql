CREATE TABLE address (
    address_id SERIAL PRIMARY KEY,
    postal_code VARCHAR(50) NOT NULL,
    street VARCHAR(255) NOT NULL,
    street_number INT,
    "createdAt" DATE,
    "updatedAt" DATE
);

CREATE TABLE hotel (
    hotel_id SERIAL PRIMARY KEY,
    hotel_name VARCHAR(255) NOT NULL,
    rating SMALLINT,
    hotel_image VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    hotel_description TEXT,
    address_id INT,
    "createdAt" DATE,
    "updatedAt" DATE
);

CREATE TABLE room(
    room_id SERIAL PRIMARY KEY,
    room_name VARCHAR(255) NOT NULL,
    guest_number INT NOT NULL,
    image VARCHAR(255) NOT NULL,
    room_description VARCHAR(255) NOT NULL,
    price_night FLOAT NOT NULL,
    "createdAt" DATE,
    "updatedAt" DATE
);

CREATE TABLE booking(
    booking_id SERIAL PRIMARY KEY,
    check_in DATE NOT NULL,
    check_out DATE NOT NULL,
    room_id INT,
    customer_email VARCHAR(150),
    "createdAt" DATE,
    "updatedAt" DATE
);

CREATE TABLE hotel_room(
    hotel_room_id SERIAL PRIMARY KEY,
    hotel_id INT,
    room_id INT,
    "createdAt" DATE,
    "updatedAt" DATE
);

alter table
    hotel_room
add
    constraint fk_hotel_room_hotel foreign key (hotel_id) REFERENCES hotel (hotel_id);

alter table
    hotel_room
add
    constraint fk_hotel_room_room foreign key (room_id) REFERENCES room (room_id);

alter table
    hotel
add
    constraint fk_hotel_address foreign key (address_id) REFERENCES address (address_id) ON DELETE CASCADE;

alter table
    booking
add
    constraint fk_booking_room foreign key (room_id) REFERENCES room (room_id);

INSERT INTO address(postal_code,street,street_number)VALUES('NW1 6XE', 'baker street', 219);
INSERT INTO hotel(hotel_name,rating,hotel_image,website,hotel_description,address_id)
VALUES(
    'fake hotel', 
    4, 
    'https://www.kayak.co.uk/news/wp-content/uploads/sites/5/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg',
    'http://fake.com',
    'lorem ipsum dolor sim emet',
    1
);
INSERT INTO room(room_name, guest_number,image,room_description,price_night)
VALUES(
    'Doble Superior',
    2,
    'https://media.designcafe.com/wp-content/uploads/2023/07/05141739/aesthetic-room-decor-with-plants.jpg',
    'Lorem ipsum dolor really nice room for two',
    65
);
INSERT INTO room(room_name, guest_number,image,room_description,price_night)
VALUES(
    'Doble inferior',
    2,
    'https://media.designcafe.com/wp-content/uploads/2023/07/05141739/aesthetic-room-decor-with-plants.jpg',
    'Lorem ipsum dolor nice room for two',
    42
);
INSERT INTO hotel_room(hotel_id, room_id)VALUES(1,1);
INSERT INTO hotel_room(hotel_id, room_id)VALUES(1,2);