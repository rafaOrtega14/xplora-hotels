# XPLORA HOTELS
Introducing the ultimate tool for travelers, agents, and hoteliers alike – xplora Hotels Room Availability and Booking Tool. Designed with user convenience and efficiency in mind, this tool transforms the way you search for and book hotel rooms.
1. Real-Time Availability:
Instantly check room availability across thousands of hotels worldwide. Xplora Hotels tool connects directly with hotel databases to provide you with up-to-the-minute information, ensuring you never miss out on the perfect room.

2. Seamless Booking:
Secure your booking in just a few clicks. Intuitive interface makes it easy to reserve your room, complete with confirmation details sent straight to your inbox.

## DATABASE STRUCTURE
![Captura de pantalla 2024-06-30 101903](https://github.com/rafaOrtega14/xplora-hotels/assets/17182691/fe6e497c-5276-4b7c-b34a-bc7114b15efd)

## SETUP
1. docker-compose up -d = will automatically create a postgreSQL docker database with ready to use data that will fed the application
2. npm run dev = creates a nodemon process in 3001 port enabling to use the API REST

## Architecure layers
1. Domain = A definition of application's entities that will ensure the stability of models
2. DB = ORM models and the initial database script lives here
3. UseCases = This layer is used to achieve functionalities.
4. Controllers = This layer is responsible for the HTTP comunication collection data from the request processing and giving a response to the client
5. Infrastructure = Comunicates and process data in external tools such as a database or a third party API

## Testing
100% of unit testing coverage using Jest to run tests you will just need to type **npm run test**
