const difficultyFetch = async (body: any): Promise<any> => {
  try {
    const response = await fetch("/api/v1/difficulty", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return JSON.parse(data);
  } catch (error) {
    console.error("Error fetching difficulty:", error);
  }
};

export default difficultyFetch;
