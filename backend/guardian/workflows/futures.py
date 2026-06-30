from backend.guardian.prompts.futures_prompt import FUTURES_PROMPT
from backend.guardian.prompts.context_prompts import (
    WORK_STYLE_PROMPTS,
    STYLE_PROMPTS,
)


class GuardianFuturesWorkflow:

    def build_prompt(
        self,
        task: str,
        work_style: str,
        leadership_style: str,
    ) -> str:

        work_context = WORK_STYLE_PROMPTS.get(
            work_style,
            ""
        )

        style_context = STYLE_PROMPTS.get(
            leadership_style,
            ""
        )

        return f"""
{FUTURES_PROMPT}

User Task:

{task}

Work Style:

{work_context}

Leadership Style:

{style_context}
"""

guardian_futures = GuardianFuturesWorkflow()