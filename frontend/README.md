## Frontend instructions


We'll use [Token based authentication](http://www.django-rest-framework.org/api-guide/authentication/#tokenauthentication). Make sure each request has this header set:

`Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b` (Replace this token with the token received from the API)

The backend will send this token when the user logs in. Send it with all corresponding requests to the server. :beer: