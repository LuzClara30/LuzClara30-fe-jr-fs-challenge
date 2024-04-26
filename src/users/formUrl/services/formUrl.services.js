export const createShortUrl = async (fullUrl) => {
    try {
      // Setting the data to be sent in the POST request
      const postData = new URLSearchParams();
      console.log("fullUrl", fullUrl);
      postData.append('full_url', fullUrl);
  
      // Making the POST request
      const response = await fetch('/short_urls.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: postData,
      });

      // Checking if the network response was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }else{
        // Parsing the response as JSON
        const data = await response.json();
        // Returning the data from the response
        return data;

      }
  
      
    } catch (error) {
      // Handling any errors that occur during the fetch operation
      console.error('There was a problem with your fetch operation:', error);
      throw error; // Rethrowing the error
    }
  };
  
  