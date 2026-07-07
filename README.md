# MongoDB Exercises Project
**Overview**
- This project implements the full set of MongoDB exercises for the DB200 course. It includes:
- Creation and population of multiple MongoDB collections
- Execution of inserts, queries, updates, and relationship operations
- A complete validation test suite using Mocha and Chai
- An enhancement to the project’s test configuration to support multiple test files
- The goal was to build a working MongoDB dataset and verify its correctness through automated testing.

**What Was Accomplished**
1. Database Creation and Population
The following collections were created and populated:
- movies: 10 documents, including franchise entries and actor lists
- users: 2 documents
- posts: 6 documents linked to users
- comments: 5 documents linked to posts via ObjectId references
All documents were inserted exactly as specified in the assignment.

2. Relationship Integrity
The project ensures:
- Each post belongs to a valid user
- Each comment references a valid post via ObjectId
- Each comment belongs to a valid user
- Franchise, actor, and writer queries return correct results

3. Creation of a New Test Suite (new_tests.js)
A comprehensive Mocha/Chai test file was added to validate:
- Movie count and specific movie queries
- Franchise grouping
- Actor and writer queries
- User count
- Post count and user relationships
- Comment count and ObjectId relationships
- Cross‑collection relationships (users → posts → comments)
This suite provides full coverage of the MongoDB exercise and makes verification easy for instructors.

4. Update to package.json
- The original test script only executed a single test file:
  "test": "mocha test/db.spec.js --exit"
- To support multiple test files, it was updated to:
  "test": "mocha test --exit"
- This change allows Mocha to automatically run all test files inside the test/ directory, including the newly added new_tests.js.

**Running the Project**
- Start MongoDB
  Ensure MongoDB is running locally on the default port (27017).
- Load the Database Script
Inside mongosh:
  load("mongo_exercises.js")
- Run All Tests
From the project root:
  npm test
- You should see output similar to:
  17 passing
- This confirms the database is fully populated and all relationships are valid.
