# Starbucks-Portal

A multi-cloud Starbucks Drink Ordering portal based on the Restbucks CRUD REST API design. 

# Components:

Portal:  Heroku Based Web Application from which Starbucks Orders and be placed and viewed.  Orders are multi-tenant such that each tenant is a different Starbucks Store. 

API Gateway:A Kong API Gateway that is deployed on AWS with a 3-Node Cassandra DB Cluster.The API Gateway will route all REST API calls.

Tenant API Back-Ends:Two REST API back-ends implemented in different languages/technologies. Implementation of APIs is backed by a 3-Node NoSQL database cluster.
