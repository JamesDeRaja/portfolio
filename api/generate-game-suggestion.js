import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { gameType, character, control, additionalInfo } = req.body;
    
    if (!gameType || !character || !control) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
You are a professional game designer with 13+ years of experience in mobile game development, specializing in hyper-casual and hybrid games. Based on the following preferences, create a detailed and engaging game concept:

Game Type: ${gameType}
Character/Toy: ${character}
Control Method: ${control}
Additional Info: ${additionalInfo || 'None provided'}

Please provide a comprehensive game suggestion that includes:

1. **Game Title**: A catchy, memorable name
2. **Core Concept**: A clear, concise description of the main gameplay loop
3. **Gameplay Mechanics**: Detailed explanation of how the game works
4. **Visual Style**: Description of the art style and visual elements
5. **Progression System**: How players advance and stay engaged
6. **Monetization Strategy**: Appropriate monetization for this type of game
7. **Target Audience**: Who would enjoy this game
8. **Unique Selling Points**: What makes this game stand out
9. **Technical Considerations**: Platform recommendations and technical notes
10. **Market Potential**: Brief analysis of the game's commercial viability

Make sure the suggestion is:
- Feasible to develop with Unity
- Suitable for mobile platforms
- Engaging and addictive
- Commercially viable
- Innovative yet familiar

Format the response in a professional, detailed manner that could be presented to a publisher.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const suggestion = response.text();

    res.json({ suggestion });
  } catch (error) {
    console.error('Error generating game suggestion:', error);
    res.status(500).json({ error: 'Failed to generate game suggestion' });
  }
}