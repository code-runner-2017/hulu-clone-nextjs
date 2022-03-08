// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.status(200).json(
        {
            results : [
                {
                    title: "The Matrix Resurrections",
                    overview: "Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
                    original_name: "...",
                    poster_path: "/eNI7PtK6DEYgZmHWP9gQNuff8pv.jpg",
                    media_type: "movie",
                    first_air_date: "2021",
                    vote_count: 300
                },
                {
                    title: "Nightmare Alley",
                    overview: "An ambitious carnival man with a talent for manipulating people with a few well-chosen words hooks up with a female psychiatrist who is even more dangerous than he is.",
                    original_name: "...",
                    poster_path: "/mqDnDhG5N6fn1H4MKQqr8E5wfeK.jpg",
                    media_type: "movie",
                    first_air_date: "2021",
                    vote_count: 300
                },
                {
                    title: "Ava",
                    overview: "A black ops assassin is forced to fight for her own survival after a job goes dangerously wrong.",
                    original_name: "...",
                    poster_path: "/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
                    media_type: "movie",
                    first_air_date: "2020",
                    vote_count: 300
                },
                {
                    title: "Hancock",
                    overview: "Hancock is a down-and-out superhero who's forced to employ a PR expert to help repair his image when the public grows weary of all the damage he's inflicted during his lifesaving heroics. The agent's idea of imprisoning the antihero to make the world miss him proves successful, but will Hancock stick to his new sense of purpose or slip back into old habits?",
                    original_name: "...",
                    poster_path: "/qndvrOXGyoOxkhc12SqfLi9Hr31.jpg",
                    media_type: "movie",
                    first_air_date: "2008",
                    vote_count: 260
                },
                {
                    title: "Ashfall",
                    overview: "A group of unlikely heroes from across the Korean peninsula try to save the day after a volcano erupts on the mythical and majestic Baekdu Mountain.",
                    original_name: "...",
                    poster_path: "/h9DIlghaiTxbQbt1FIwKNbQvEL.jpg",
                    media_type: "movie",
                    first_air_date: "2019",
                    vote_count: 260
                },
                {
                    title: "Encanto",
                    overview: "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. ",
                    original_name: "...",
                    poster_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg",
                    media_type: "movie",
                    first_air_date: "2021",
                    vote_count: 420
                }

            ]
        }
    )
}


