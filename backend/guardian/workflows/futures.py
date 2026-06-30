from pydantic import dataclasses
from pydantic import dataclasses
from pydantic import dataclasses
from pydantic import dataclasses
from pydantic import dataclasses
from pydantic import dataclasses
import json

from google.genai import types

from backend.app.models.future import GuardianFutures
from backend.app.services.model_service import client

from backend.guardian.prompts.futures_prompt import FUTURES_PROMPT
from backend.guardian.prompts.context_prompts import (
    STYLE_PROMPTS,
    WORK_STYLE_PROMPTS,
)


class GuardianFuturesWorkflow:

    def build_prompt(
        self,
        task: str,
        work_style: str,
        leadership_style: str,
    ):

        work_context = WORK_STYLE_PROMPTS.get(work_style, "")

        style_context = STYLE_PROMPTS.get(leadership_style, "")

        return f"""
{FUTURES_PROMPT}

Task:

{task}

Work Style:

{work_context}

Leadership Style:

{style_context}
"""

    def generate(
        self,
        task: str,
        work_style: str,
        leadership_style: str,
    ) -> GuardianFutures:

        prompt = self.build_prompt(
            task,
            work_style,
            leadership_style,
        )

        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_mime_type="application/json",
            ),
        )

        print("========== GEMINI ==========")
        print(response.text)
        print("============================")

        data = json.loads(response.text)

        # Normalize Gemini output into our schema
        if isinstance(data, list):

            ids = [
                "future-1",
                "future-2",
                "future-3",
            ]

            normalized = []

            for i, future in enumerate(data):

                timeline = [
                    {
                        "time": "Step " + str(i + 1),
                        "title": step.strip(),
                    }
                    for i, step in enumerate(
                        future.get(
                            "short_timeline",
                            ""
                        ).split(";")
                    )
                    if step.strip()
                ]

                if not timeline:
                    timeline = [
                        {
                            "time": "Today",
                            "title": "Start working",
                        }
                    ]

                normalized.append(
                    {
                        "id": ids[i] if i < len(ids) else f"future-{i+1}",
                        "title": future.get("title", f"Future {i+1}"),
                        "summary": future.get("description", ""),
                        "success_probability": future.get(
                            "success_probability",
                            50,
                        ),
                        "stress_level": future.get(
                            "stress_level",
                            "Medium",
                        ),
                        "recommendation": future.get(
                            "recommendation",
                            "",
                        ),
                        "quote": future.get(
                            "quote",
                            "Your future is shaped by today's decisions."
                        ),
                        "timeline": timeline,
                    }
                )

            data = {
                "futures": normalized
            }

        return GuardianFutures.model_validate(data)


guardian_futures = GuardianFuturesWorkflow()
