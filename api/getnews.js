// /api/getNews.js
export default async function handler(req, res) {
  try {
    const apiKey = process.env.NEWS_API_KEY; // Add your API key in Vercel env vars
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=30&apiKey=${apiKey}`
    );
    const data = await response.json();
    
    // Return only the articles array
    res.status(200).json(data.articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
}
