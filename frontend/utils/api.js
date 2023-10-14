// Import necessary variables from the "urls" module
import { API_URL, STRAPI_API_TOKEN } from "./urls";

// Function to fetch data from the API using the provided endpoint
export const fetchDataFromApi = async (endpoint) => {
  // Define the options for the fetch request
  const options = {
    method: "GET", // HTTP GET method
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN, // Include the API token in the Authorization header
    },
  };

  // Perform the fetch request to the API with the provided endpoint and options
  const res = await fetch(`${API_URL}${endpoint}`, options);

  // Parse the response data as JSON
  const data = await res.json();

  // Return the fetched data
  return data;
};

// Function to make a payment request to the API using the provided endpoint and payload
export const makePaymentRequest = async (endpoint, payload) => {
  // Perform a fetch request to the API with the provided endpoint, method, headers, and payload
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST", // HTTP POST method
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN, // Include the API token in the Authorization header
      "Content-Type": "application/json", // Specify the content type as JSON
    },
    body: JSON.stringify(payload), // Convert the payload to a JSON string and include it in the request body
  });

  // Parse the response data as JSON
  const data = await res.json();

  // Return the data received from the API (which might contain information about the payment status, etc.)
  return data;
};
