from guardian.agents.planner import planner_agent


class Guardian:

    def __init__(self):
        self.planner = planner_agent

    def get_planner(self):
        return self.planner


guardian = Guardian()
