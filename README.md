### Setup the project

 - Clone this project from github and open it in your favorite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
        SALT_ROUNDS=<Number of salt rounds>
        JWT_SECRET=<your JWT secret key>
        JWT_EXPIRY=<set expiry for JWT Token>
        NODE_ENV=<database environment>
    ```

 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention the db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

 - To run the server execute
 ```
 npm run dev
 ```