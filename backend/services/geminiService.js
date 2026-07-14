const ai = require("./geminiClient");
const SYSTEM_PROMPT = require("./systemPrompt");

async function generateExtension(userPrompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: `${SYSTEM_PROMPT}

User Request:
${userPrompt}`,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    let text = response.text;

    if (!text) {
      text =
        response.candidates?.[0]?.content?.parts?.[0]?.text || "";
    }

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    let clean = text.trim();

    // Remove markdown if Gemini accidentally returns it
    clean = clean.replace(/```json/g, "");
    clean = clean.replace(/```/g, "");
    clean = clean.trim();

    let parsed;

    try {
      parsed = JSON.parse(clean);
    } catch (err) {
      console.error("Invalid JSON from Gemini:");
      console.error(clean);

      throw new Error("Gemini returned invalid JSON.");
    }

    if (!parsed.title) {
      parsed.title = "Untitled Extension";
    }

    if (!parsed.description) {
      parsed.description = "";
    }

    if (!Array.isArray(parsed.files)) {
      throw new Error("Gemini did not return a valid files array.");
    }

    return parsed;
  } catch (error) {
    console.error("Gemini Error:", error);

    if (error.status === 429) {
      throw new Error(
        "Gemini API quota exceeded. Please check your Google AI Studio quota."
      );
    }

    if (error.status === 401) {
      throw new Error("Invalid Gemini API Key.");
    }

    if (error.status === 404) {
      throw new Error("Selected Gemini model is unavailable.");
    }

    throw new Error(
      error.message || "Failed to generate extension."
    );
  }
}

module.exports = {
  generateExtension,
};