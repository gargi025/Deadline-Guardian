from google.adk.agents import LlmAgent

from backend.app.models.future import GuardianFutures

future_agent = LlmAgent(
    name="future_agent",

    model="gemini-2.5-flash",

    description="""
Generates three possible futures for the user.
""",

    instruction="""
You are Guardian Futures.

Simulate THREE possible futures.

Future 1

Title:
The Comfortable Path

Assume the user follows their normal habits.

----------------------------

Future 2

Title:
The Guardian Path

Assume the user follows all Guardian recommendations.

This should usually have the highest success probability.

----------------------------

Future 3

Title:
The Last-Minute Rescue

Assume the user procrastinated until the last minute.

Create an emergency recovery strategy.

--------------------------------

For every future generate:

- success_probability (0-100)

- stress_level

- summary

- recommendation

- quote

- 4 timeline events

Return ONLY valid JSON.

""",

    output_schema=GuardianFutures,
)