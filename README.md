# ai-legal-drafting-app
An AI-powered application that converts voice input into a legal draft. This project uses free tools to transcribe audio, extract legal details, and generate formatted legal documents.
## Current Progress
- Environment setup completed.
- Dependencies installed (Express, Axios, Body-Parser, dotenv).
- Basic server created with placeholder endpoints (/transcribe, /extract, /generate).
- Initial testing using Postman verified the endpoints.
## Simulated AI Integration
- **/transcribe:** Simulates a voice-to-text conversion with a 2-second delay and returns dummy transcription text.
- **/extract:** Simulates extraction of legal details from the transcribed text and returns hardcoded legal data.
- **/generate:** Simulates generation of a legal draft using the extracted data, returning a formatted draft.
## Testing & Feedback

**Manual Testing:**
- Tested `/transcribe` using Postman with a sample payload. Received a dummy transcription after a 2-second delay.
- Tested `/extract` and `/generate` endpoints successfully. The responses matched the simulated data.

**Automated Testing:**
- Created and ran test scripts (`testTranscribe.js`, `testExtract.js`, `testGenerate.js`) using Node.js with Axios. All tests returned the expected output.

**Feedback & Observations:**
- All endpoints are functioning as simulated.
- Consider refining the simulated data for more realistic outputs in future iterations.
- No major issues encountered during testing.
