// /api/getnews.js
export default async function handler(req, res) {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&language=en&country=ng,us,gb&page=1`
    );

    const data = await response.json();

    if (!data.results) {
      return res.status(500).json({ error: "No news returned" });
    }

    res.status(200).json(data.results.slice(0, 30)); // return first 30 articles
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
      }
