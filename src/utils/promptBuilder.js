export const buildItineraryPrompt = (formData) => {
  const {
    destination,
    source,
    startDate,
    endDate,
    travelWith,
    ageGroup,
    travelPace,
    transportMode,
    budget,
    visaInsurance,
    // ...food and experience preferences from later steps
  } = formData;

  return `
  Create a personalized travel itinerary for a user with the following preferences:
  
  Destination: ${destination}
  Source: ${source}
  Travel Dates: ${startDate} to ${endDate}
  Travel Companions: ${travelWith}
  Age Group: ${ageGroup}
  Preferred Travel Pace: ${travelPace}
  Mode of Transport: ${transportMode}
  Budget: ${budget}
  Visa/Insurance: ${visaInsurance}
  
  # Output Format:
  
  1. **Heading**: like "5-Day Trip to Dubai, UAE (June 20–25)"
  2. **Intro Paragraph**: brief background of the city/country and what it offers
  3. **Lodging Recommendations**: relevant to preferences
  4. **Daily Itinerary**: each day should have bullet list of places and activities
  
  Keep the tone helpful and engaging.
    `;
};
