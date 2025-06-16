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
    foodPreferences,
    dietaryRestrictions,
    preferredCuisines,
    streetFoodInterest,
    fineDiningInterest,
    mustTryFoods,
    natureLover,
    adventureSeeker,
    historyBuff,
    artAndCulture,
    nightlifeLover,
    relaxationPreference,
  } = formData;

  return `
Create a personalized and immersive travel itinerary for a user with the following preferences:

# Basic Info:
- Destination: ${destination}
- Source: ${source}
- Travel Dates: ${startDate} to ${endDate}
- Travel Companions: ${travelWith}
- Age Group: ${ageGroup}
- Preferred Travel Pace: ${travelPace}
- Mode of Transport: ${transportMode}
- Budget: ${budget}

# Food Preferences:
- Likes: ${foodPreferences}
- Dietary Restrictions: ${dietaryRestrictions}
- Preferred Cuisines: ${preferredCuisines}
- Street Food: ${streetFoodInterest}
- Fine Dining: ${fineDiningInterest}
- Must-Try Dishes: ${mustTryFoods}

# Experience Interests:
- Nature & Scenic Spots: ${natureLover}
- Adventure Activities: ${adventureSeeker}
- Historical Sites & Monuments: ${historyBuff}
- Art & Culture (Museums, Galleries, Performances): ${artAndCulture}
- Nightlife (Bars, Clubs, Events): ${nightlifeLover}
- Relaxation (Spas, Beaches, Quiet Retreats): ${relaxationPreference}

---

# Output Format (Highly Detailed):

## 1. Trip Heading:
A title like "**6-Day Adventure in Japan: Culture, Cuisine & Nature **"

## 2. Introduction:
Engaging paragraph about the destination — what makes it special, and why it's a perfect choice based on the user's preferences.

## 3. Hotel / Lodging Suggestions:
7 hotels or stays based on the budget and type of experience — include links if possible.

## 4. Daily Itinerary:
For **each day**, provide:

- **Day Heading**: "Day 1: Arrival & Local Orientation"
- **Morning**: Specific spots, opening times, what to expect, travel tips.
- **Afternoon**: Attractions or experiences, including relevant food stops.
- **Evening**: Relaxation, dining, cultural shows, or nightlife depending on interests.
- **Food Spots**: Name restaurants or street food stalls based on cuisine preferences.
- **Cultural Notes or Local Tips**: Local phrases, etiquette, hidden corners, etc.

Be very detailed. Each day’s plan should feel like a local guide is walking the user through the city, matching their interests and preferences.

---

# Final Notes:
- Add **MakeMyTrip** links for hotel and travel suggestions (if available).
- Keep the tone friendly, curious, and personalized.
- Assume the user wants a well-balanced trip (not too hectic).
- Avoid generic descriptions — focus on **real places, local experiences, and personalized storytelling**.
`;
};
