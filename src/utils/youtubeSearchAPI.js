export async function youtubeSearchAPI(query) {
  try {
    const response = await fetch(
      "https://smart-source-ai-backend.onrender.com/api/v1/youtube/search/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
    }

    const videos = await response.json();
    console.log(first("Videos:", videos));
    return videos;
  } catch (error) {
    console.error("API call failed:", error);
    return null;
  }
}
