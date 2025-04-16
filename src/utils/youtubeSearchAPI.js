export async function youtubeSearchAPI(query) {

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/youtube/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ search_term: query }),
      }
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();


    // Ensure consistent format
    const result = {
      videos: Array.isArray(data) ? data : data.videos || []
    };


    return result;
  } catch (error) {
    console.error("API call failed:", error);
    return { videos: [] }; // Return empty videos array instead of null
  }
}
