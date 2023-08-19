const express = require('express');
const Twitter = require('twitter');
const cors = require('cors');
const app = express();
const PORT = 3000;

const client = new Twitter({
  consumer_key: 'x4bLAOBwvRScXMNO0ElW9sGmk',
  consumer_secret: 'BQBqAdjnuWv1W5vFKL7YMCBqfVh70MGsteD3BTUoABNl3B0tnc',
  access_token_key: '1522593745933266944-QFbJH1U7F6Zr8FT5cjf0ngwGx08Wvd',
  access_token_secret: 'usqpPxJxpWc4XSoFNO6seHaelQbcQH0YsmbBs6ZMoGbUk'
});

app.get('/fetch-tweets', async (req, res) => {
    try {
        const params = {q: '#仲間大会', count: 30}; // 例: 最新の10ツイートを取得
        const tweets = await client.get('search/tweets', params);
        res.json(tweets.statuses);
    } catch (error) {
        res.status(500).json({error: 'Failed to fetch tweets'});
    }
});
app.use(cors()); 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


// # API key
// 'x4bLAOBwvRScXMNO0ElW9sGmk'
// # API key シークレット
// 'BQBqAdjnuWv1W5vFKL7YMCBqfVh70MGsteD3BTUoABNl3B0tnc'

// # 認証トークン Bearer Token
// 'AAAAAAAAAAAAAAAAAAAAAHy1pQEAAAAAgsg1h1%2BAlSC0lXqfw%2FfKcNVsKEI%3DFnU64nr7EoDXwZvuRQaUTTZYHL0BV1x4JXONDmdJDiD8Ub6gQf'

// # アクセストークン
// '1522593745933266944-QFbJH1U7F6Zr8FT5cjf0ngwGx08Wvd'

// # アクセストークン シークレット
// 'usqpPxJxpWc4XSoFNO6seHaelQbcQH0YsmbBs6ZMoGbUk'