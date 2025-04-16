export const checkHealth = async () => {
  try {
    const res = await fetch(
      "https://smart-source-ai-backend.onrender.com/api/v1/health"
    );
    const data = await res.json();
    if (data.status === "healthy") {
      return true; // Service is healthy
    }
    return false; // Service is not healthy
  } catch (error) {
    console.error("Error fetching health status:", error);
    return null;
  }
};
