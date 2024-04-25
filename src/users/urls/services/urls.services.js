export const getAllUrls = async () => {
  try {
    // Attempting to fetch the JSON file containing the URLs
    const response = await fetch("/short_urls.json");
    // Checking if the network response was successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parsing the response body as JSON
    const data = await response.json();
    // Returning the URLs extracted from the JSON data
    return data.urls;
  } catch (error) {
    // Handling any errors that occur during the fetch operation
    console.error("There was a problem with your fetch operation:", error);
  }
};
