export const fetchFixtures = async () => {
    const url = 'https://api-football-beta.p.rapidapi.com/fixtures/rounds?season=2019&league=39';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b7ad313c1amsh891a7975fad24c6p15f77ajsn5d6b94d03a18',
            'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};