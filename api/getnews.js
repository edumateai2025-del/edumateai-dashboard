// /api/getnews.js
export default async function handler(req, res){
  try{
    const apiKey=process.env.NEWS_API_KEY; // Set in Vercel environment
    const response=await fetch(`https://newsapi.org/v2/top-headlines?language=en&pageSize=30&apiKey=${apiKey}`);
    const data=await response.json();
    res.status(200).json(data.articles);
  }catch(err){
    console.error(err);
    res.status(500).json({error:"Failed to fetch news"});
  }
}
