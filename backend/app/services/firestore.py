from google.cloud import firestore


class FirestoreService:

    def __init__(self):
        self.db = firestore.Client()

    def client(self):
        return self.db


firestore_service = FirestoreService()