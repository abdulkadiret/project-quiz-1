export const getData = async category => {
  try {
    const response = await fetch(`/quizzes?category=${category}`);
    console.log(`[getData] Fetching category: ${category}`, response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`[getData] Data received:`, data);

    return data;
  } catch (err) {
    console.error(
      `[getData] Failed to fetch quiz data for '${category}':`,
      err,
    );
    throw err; // So frontend knows to show fallback
  }
};
