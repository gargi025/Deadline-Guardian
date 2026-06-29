from typing import List


def decompose_task(task: str) -> List[str]:
    """
    Break a task into generic executable steps.

    Use this tool whenever a user provides
    a high-level task that needs planning.
    """

    return [
        f"Understand the requirements of '{task}'",
        "Research any missing concepts",
        "Break the work into smaller pieces",
        "Complete the implementation",
        "Review the work",
        "Submit before the deadline",
    ]