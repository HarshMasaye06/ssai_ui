export async function getYoutubeVideoSummary(videoUrl) {
    try {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/youtube/summarize`;
      console.log("🔗 Sending request to:", apiUrl);
      console.log("📹 Video URL payload:", videoUrl);
  
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ video_url: videoUrl }),
      });
  
      console.log("📡 Response status:", response.status);
  
      const contentType = response.headers.get("Content-Type") || "";
  
      if (!response.ok) {
        let errorData;
        if (contentType.includes("application/json")) {
          errorData = await response.json();
        } else {
          errorData = await response.text(); // Fallback for non-JSON errors
        }
        console.error("❌ API Error Response:", errorData);
        throw new Error(`Error ${response.status}: ${JSON.stringify(errorData)}`);
      }
  
      const data = await response.json();
      console.log("✅ API Response:", data);
  
      return {
        summary: data.summary || "No summary found.",
      };
    } catch (error) {
      console.error("🚨 Failed to fetch video summary:", {
        message: error.message,
        stack: error.stack,
      });
      return {
        summary: "An error occurred while fetching the summary.",
      };
    }
  }
  