export async function searchAPI(query) {
  try {
    const response = await fetch(
      "https://smart-source-ai-backend.onrender.com/api/v1/search/",
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

    const data = await response.json();
    // console.log("Query:", data.query);
    // console.log("Links:", data.links);
    // console.log("Answers:", data.answers);
    const answers = data.answers.map((answer, index) => ({
      type: "answer",
      content: answer,
      links: data.links[index] || [],
    }));
    console.log("Processed Answers:", answers);
    return answers;
  } catch (error) {
    console.error("API call failed:", error);
    return null;
  }
}
