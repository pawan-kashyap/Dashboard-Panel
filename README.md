# Dashboard-Panel
This is MERN stack application having role based authentication and authorization.

Postman collection is there in the backend directory, you can import that collation to your postman for api requests. 

#
# Steps to run the the project backend:
1. Make sure you have Node.js and npm installed on your machine.
2. Clone the repository to your local machine using the git clone command.
3. Navigate to the project backend directory using the terminal or command prompt.
4. Run the following command to install all the required dependencies:

npm install

5. Create a .env file in the project's root directory and add the required environment variables.

6. Start the development server by running the following command:

npm run dev

The server should now be running on http://localhost:8080.
Note: To run the project in production mode, use the "start" script instead of "dev". You can also use the "pm2" script to run the project using the pm2 process manager.

login credential for different roles:
1. Admin: 
    email: "admin@test.com"
    password: "admin"
2. manager:
    email: manager@gmail.com
    password: manager
3. user:
    email: user@gmail.com
    password: user
    
# Steps to run the the project frontend:   
1. Installation and Setup
Run `yarn install` to install dependencies

2. Start the development server using command:

yarn start
Go to http://localhost:3000 to view the frontend in browser.
