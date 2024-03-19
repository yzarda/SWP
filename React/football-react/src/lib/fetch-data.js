export const fetchFixtures = async () => {
    const options ={
        method: "GET",
        headers: {
            "X-RapidAPI-Key":"b7ad313c1amsh891a7975fad24c6p15f77ajsn5d6b94d03a18",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        },
    };


    const result = fetch(
        "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all",
        options
    )

    .then((response) => response.json())
    .then((response) => {
		return response;
	})
    .catch((err) => console.error(err));

    return result;

};