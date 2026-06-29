from typing import List


def decompose_task(task: str) -> List[str]:
    """
    Fallback task decomposition tool.

    This will later be replaced with AI reasoning,
    but ADK agents should always have tools.
    """

    return [
        f"Understand the requirements for {task}",
        f"Break {task} into smaller tasks",
        f"Complete implementation",
        "Review the work",
        "Submit before deadline",
    ]