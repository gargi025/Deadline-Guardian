from typing import List


def decompose_task(task: str) -> List[str]:
    """
    Fallback decomposition tool.

    Use when the task is generic.
    """

    return [
        "Understand requirements",
        "Research",
        "Implement",
        "Review",
        "Finalize",
    ]