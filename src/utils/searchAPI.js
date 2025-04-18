export async function searchAPI(query) {
  

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/search`,
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
    // 
    // 
    // 
    const answers = data.answers.map((answer, index) => ({
      type: "answer",
      content: answer,
      links: data.links[index] || '',
    }));
    
    return answers;
  } catch (error) {
    console.error("API call failed:", error);
    return null;
  }
}
