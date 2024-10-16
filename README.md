# README.md

IMPORTANT: Once you've cloned this to your forked repository, ensure that you continuously update this document as you complete each task to demonstrate your ongoing progress.

Please include your shared repository link here:
https://github.com/arunodaP/A2-Arunoda-20844740

Example:
Choiru's shared repository: https://github.com/choiruzain-latrobe/Assignment2.git


Make sure for **your case it is in Private**
## Access Database
1 **Plsql Cheat Sheet:**
You can refer to the PostgreSQL cheat sheet [here](https://www.postgresqltutorial.com/postgresql-cheat-sheet/).

2 **Know the Container ID:**
To find out the container ID, execute the following command:
   ```bash
   docker ps
    9958a3a534c9   testsystem-nginx           "/docker-entrypoint.…"   6 minutes ago   Up 6 minutes   0.0.0.0:80->80/tcp   testsystem-nginx-1
    53121618baa4   testsystem-frontend        "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   3000/tcp             testsystem-frontend-1
    c89e46ac94b0   testsystem-api             "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5000/tcp             testsystem-api-1
    9f4aea7cf538   postgres:15.3-alpine3.18   "docker-entrypoint.s…"   6 minutes ago   Up 6 minutes   5432/tcp             testsystem-db-1
   ```
3. Running the application

**docker compose command:**
   ```bash
   docker compose up --build
   ```

4 **Access postgreSQL in the container:**
Once you have the container ID, you can execute the container using the following command:
You will see the example of running the PostgreSQL inside the container.
   ```bash
   docker exec -it testsystem-db-1 psql -U postgres
   choiruzain@MacMarichoy TestSystem % docker exec -it testsystem-db-1 psql -U postgres                                       
   psql (15.3)
   Type "help" for help.
   
   postgres=# \dt
             List of relations
    Schema |   Name   | Type  |  Owner   
   --------+----------+-------+----------
    public | contacts | table | postgres
    public | phones   | table | postgres
   (2 rows)
  
    postgres=# select * from contacts;
    id |  name  |         createdAt         |         updatedAt         
   ----+--------+---------------------------+---------------------------
     1 | Helmut | 2024-08-08 11:57:57.88+00 | 2024-08-08 11:57:57.88+00
    (1 row)
    postgres=# select * from phones;
    id | phone_type |   number    | contactId |         createdAt          |         updatedAt          
   ----+------------+-------------+-----------+----------------------------+----------------------------
     1 | Work       | 081431      |         1 | 2024-08-08 11:59:04.386+00 | 2024-08-08 11:59:04.386+00


postgres=# select * from contacts;
   ```
Replace `container_ID` with the actual ID of the container you want to execute.

## Executing API

### Contact API


1. Add contacts API  (POST)
```bash
http post http://localhost/api/contacts name="Choiru"
        
choiruzain@MacMarichoy-7 TestSystem % http post http://localhost/api/contacts name="Choiru"
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 102
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:01:53 GMT
ETag: W/"66-FmPYAaIkyQoroDwP2JsAZjWTAxs"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}

```

Updated Add Contact with Address
http post http://localhost/api/contacts name="Peter" address="Dandenong"
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 123
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Oct 2024 12:06:29 GMT
ETag: W/"7b-P4polAkxNSikIqDZxTpRitKHlrU"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
    "address": "Dandenong",
    "createdAt": "2024-10-16T12:06:28.983Z",
    "id": 7,
    "name": "Peter",
    "updatedAt": "2024-10-16T12:06:28.983Z"
}


2 Get contacts API  (GET)

```bash
http get http://localhost/api/contacts


choiruzain@MacMarichoy-7 TestSystem % http get http://localhost/api/contacts
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 104
Content-Type: application/json; charset=utf-8
Date: Thu, 08 Aug 2024 21:04:58 GMT
ETag: W/"68-V+4KuL2xahYt8YAkKG6rKdR7wHg"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
{
"createdAt": "2024-08-08T21:01:53.017Z",
"id": 1,
"name": "Choiru",
"updatedAt": "2024-08-08T21:01:53.017Z"
}
]

Updated Get Contacts API

http get http://localhost/api/contacts
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 713
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Oct 2024 12:07:41 GMT
ETag: W/"2c9-29GDB7H7epPLaew8eJAtH3md09w"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
    {
        "address": null,
        "createdAt": "2024-10-16T03:54:48.349Z",
        "id": 1,
        "name": "Choiru",
        "updatedAt": "2024-10-16T03:54:48.349Z"
    },
    {
        "address": null,
        "createdAt": "2024-10-16T11:14:12.744Z",
        "id": 4,
        "name": null,
        "updatedAt": "2024-10-16T11:14:12.744Z"
    },
    {
        "address": null,
        "createdAt": "2024-10-16T11:21:24.360Z",
        "id": 5,
        "name": "Arunoda",
        "updatedAt": "2024-10-16T11:21:24.360Z"
    },
    {
        "address": null,
        "createdAt": "2024-10-16T11:24:38.860Z",
        "id": 6,
        "name": null,
        "updatedAt": "2024-10-16T11:24:38.860Z"
    },
    {
        "address": "Sydney",
        "createdAt": "2024-10-16T04:56:24.547Z",
        "id": 2,
        "name": "Arunoda",
        "updatedAt": "2024-10-16T11:54:48.741Z"
    },
    {
        "address": "Dandenong",
        "createdAt": "2024-10-16T12:06:28.983Z",
        "id": 7,
        "name": "Peter",
        "updatedAt": "2024-10-16T12:06:28.983Z"
    }
]

```
3. Show/create the API commmand to delete the contacts (DELETE)

```bash
http delete http://localhost/api/contacts/3
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 47
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Oct 2024 11:50:59 GMT
ETag: W/"2f-i0D5Qo4IGfH+OpTTITmyTnSzFvU"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
    "message": "Contact was deleted successfully!"
}





```

4. Show/create the API command to edit the contacts (PUT)
```
curl -X PUT http://localhost/api/contacts/2      -H "Content-Type: application/json"      -d '{"address": "Sydney"}'
{"message":"Contact was updated successfully."}

```

### Phone API
1. Create Phone
curl -X POST http://localhost/api/contacts/1/phones      -H "Content-Type: application/json"      -d '{"number": "1234567890", "name": "Choiru", "phone_type": "Work"}'

{"id":3,"name":"Choiru","number":"1234567890","contactId":1,"phone_type":"Mobile","updatedAt":"2024-10-16T11:48:32.806Z","createdAt":"2024-10-16T11:48:32.806Z"}

2. Get Phone 
http get http://localhost/api/contacts/1/phones
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 480
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Oct 2024 11:58:04 GMT
ETag: W/"1e0-yAHm3HtUHtYQnQtQPMcbdAsczys"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

[
    {
        "contactId": 1,
        "createdAt": "2024-10-16T11:43:48.646Z",
        "id": 1,
        "name": "Choiru",
        "number": "1234567890",
        "phone_type": "Work",
        "updatedAt": "2024-10-16T11:43:48.646Z"
    },
    {
        "contactId": 1,
        "createdAt": "2024-10-16T11:44:30.960Z",
        "id": 2,
        "name": "Choiru",
        "number": "1234567890",
        "phone_type": "Work",
        "updatedAt": "2024-10-16T11:44:30.960Z"
    },
    {
        "contactId": 1,
        "createdAt": "2024-10-16T11:48:32.806Z",
        "id": 3,
        "name": "Choiru",
        "number": "1234567890",
        "phone_type": "Mobile",
        "updatedAt": "2024-10-16T11:48:32.806Z"
    }
]

3. Update Phone
curl -X PUT http://localhost/api/contacts/1/phones/1      -H "Content-Type: application/json"      -d '{"number": 5674839,"phone_type":"Home"}'
{"message":"Phone was updated successfully."}

4. Delete Phone
http delete http://localhost/api/contacts/1/phones/3
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:3000
Connection: keep-alive
Content-Length: 45
Content-Type: application/json; charset=utf-8
Date: Wed, 16 Oct 2024 12:03:58 GMT
ETag: W/"2d-FdOer7L1Hk5YcQlrlpn01BrNJmA"
Server: nginx/1.25.1
Vary: Origin
X-Powered-By: Express

{
    "message": "Phone was deleted successfully!"
}


