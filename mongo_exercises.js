// Insert movies
db.movies.insertMany([
    {
        title: "Star Wars",
        writer: "George Lucas",
        year: 1977,
        actors: [
            "Mark Hamill",
            "Harrison Ford",
            "Carrie Fisher",
            "Peter Cushing",
            "James Earl Jones"
        ]
    },
    {
        title: "Raiders of the Lost Ark",
        writer: "George Lucas",
        year: 1981,
        actors: [
            "Harrison Ford"
        ]
    },
    {
        title: "Fight Club",
        writer: "Chuck Palahniuk",
        year: 1999,
        actors: [
            "Brad Pitt",
            "Edward Norton"
        ]
    },
    {
        title: "Pulp Fiction",
        writer: "Quentin Tarantino",
        year: 1994,
        actors: [
            "John Travolta",
            "Uma Thurman"
        ]
    },
    {
        title: "Inglorious Basterds",
        writer: "Quentin Tarantino",
        year: 2009,
        actors: [
            "Brad Pitt",
            "Diane Kruger",
            "Eli Roth"
        ]
    },
    {
        title: "The Hobbit: An Unexpected Journey",
        writer: "J.R.R. Tolkien",
        year: 2012,
        franchise: "The Hobbit"
    },
    {
        title: "The Hobbit: The Desolation of Smaug",
        writer: "J.R.R. Tolkien",
        year: 2013,
        franchise: "The Hobbit"
    },
    {
        title: "The Hobbit: The Battle of the Five Armies",
        writer: "J.R.R. Tolkien",
        year: 2012,
        franchise: "The Hobbit",
        synopsis: "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."
    },
    {
        title: "Pee Wee Herman's Big Adventure",
        writer: "Phil Hartman",
        year: 1985
    },
    {
        title: "Avatar"
    }
])
