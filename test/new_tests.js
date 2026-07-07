const { MongoClient, ObjectId } = require('mongodb');
const expect = require('chai').expect;

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'mongo_exercises';

describe('Full MongoDB Exercise Validation', function () {
    this.timeout(10000);

    let db;

    before(async () => {
        await client.connect();
        db = client.db(database);
    });

    after(async () => {
        await client.close();
    });

    // -----------------------------
    // MOVIES
    // -----------------------------
    it('should contain exactly 10 movies', async () => {
        const movies = await db.collection('movies').find({}).toArray();
        expect(movies.length).to.equal(10);
    });

    it('should contain Tarantino movies', async () => {
        const movies = await db.collection('movies').find({ writer: "Quentin Tarantino" }).toArray();
        expect(movies.length).to.be.greaterThan(0);
    });

    it('should contain Brad Pitt movies', async () => {
        const movies = await db.collection('movies').find({ actors: "Brad Pitt" }).toArray();
        expect(movies.length).to.be.greaterThan(0);
    });

    it('should contain 3 Hobbit franchise movies', async () => {
        const movies = await db.collection('movies').find({ franchise: "The Hobbit" }).toArray();
        expect(movies.length).to.equal(3);
    });

    it('Avatar should exist even without extra fields', async () => {
        const avatar = await db.collection('movies').findOne({ title: "Avatar" });
        expect(avatar).to.exist;
    });

    // -----------------------------
    // USERS
    // -----------------------------
    it('should contain exactly 2 users', async () => {
        const users = await db.collection('users').find({}).toArray();
        expect(users.length).to.equal(2);
    });

    // -----------------------------
    // POSTS
    // -----------------------------
    it('should contain exactly 6 posts', async () => {
        const posts = await db.collection('posts').find({}).toArray();
        expect(posts.length).to.equal(6);
    });

    it('each post should belong to a valid username', async () => {
        const posts = await db.collection('posts').find({}).toArray();
        const users = await db.collection('users').find({}).toArray();
        const usernames = users.map(u => u.username);

        posts.forEach(post => {
            expect(usernames).to.include(post.username);
        });
    });

    // -----------------------------
    // COMMENTS
    // -----------------------------
    it('should contain exactly 5 comments', async () => {
        const comments = await db.collection('comments').find({}).toArray();
        expect(comments.length).to.equal(5);
    });

    it('each comment should reference a valid post ObjectId', async () => {
        const comments = await db.collection('comments').find({}).toArray();
        const posts = await db.collection('posts').find({}).toArray();
        const postIds = posts.map(p => p._id.toString());

        comments.forEach(comment => {
            expect(postIds).to.include(comment.post.toString());
        });
    });

    it('each comment should belong to a valid username', async () => {
        const comments = await db.collection('comments').find({}).toArray();
        const users = await db.collection('users').find({}).toArray();
        const usernames = users.map(u => u.username);

        comments.forEach(comment => {
            expect(usernames).to.include(comment.username);
        });
    });

    // -----------------------------
    // RELATIONSHIP QUERIES
    // -----------------------------
    it('SallySmith should have posts', async () => {
        const posts = await db.collection('posts').find({ username: "SallySmith" }).toArray();
        expect(posts.length).to.be.greaterThan(0);
    });

    it('JimmyHagen should have posts', async () => {
        const posts = await db.collection('posts').find({ username: "JimmyHagen" }).toArray();
        expect(posts.length).to.be.greaterThan(0);
    });

    it('SallySmith should have comments', async () => {
        const comments = await db.collection('comments').find({ username: "SallySmith" }).toArray();
        expect(comments.length).to.be.greaterThan(0);
    });

    it('JimmyHagen should have comments', async () => {
        const comments = await db.collection('comments').find({ username: "JimmyHagen" }).toArray();
        expect(comments.length).to.be.greaterThan(0);
    });
});
