window.addEventListener('DOMContentLoaded', async () => {
  const tweetsContainer = document.getElementById('tweets');

  try {
      const response = await fetch('/fetch-tweets');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      data.forEach(tweet => {
          const tweetElement = document.createElement('div');
          tweetElement.textContent = tweet.text;
          tweetsContainer.appendChild(tweetElement);
      });
  } catch (error) {
      // console.error('Fetch error: ', error);

      const response = await fetch('/fetch-tweets');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      data.forEach(tweet => {
          const tweetElement = document.createElement('div');
          tweetElement.textContent = tweet.text;
          tweetsContainer.appendChild(tweetElement);
      });
      
  }
});
