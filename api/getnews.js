export default async function handler(req, res) {
  try {
    const apiKey = process.env.NEWS_API_KEY;

    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=30&apiKey=${apiKey}`
    );

    const data = await response.json();

    // NewsAPI returns: { articles: [...] }
    if (!data.articles) {
      return res.status(500).json({ error: "Invalid news format" });
    }

    res.status(200).json(data.articles);

  } catch (error) {
    console.error("API ERROR:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
  }
