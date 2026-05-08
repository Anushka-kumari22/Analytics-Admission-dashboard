from .repository import AdmissionRepository
from sqlalchemy.orm import Session
class AdmissionService:
    def __init__(self, db: Session):
        self.repo = AdmissionRepository(db)
    
    def get_readmitted_students(self):
        return self.repo.get_readmitted_students()

