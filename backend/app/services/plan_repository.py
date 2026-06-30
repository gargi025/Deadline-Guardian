from backend.app.services.firestore import firestore_service
from backend.app.models.planner import ExecutionPlan


class PlanRepository:

    def __init__(self):
        self.db = firestore_service.client()

    def save_plan(
        self,
        user_id: str,
        plan: ExecutionPlan,
    ):
        doc = self.db.collection("plans").document()

        data = plan.model_dump(mode="json")
        data["user_id"] = user_id

        doc.set(data)

        return doc.id


plan_repository = PlanRepository()