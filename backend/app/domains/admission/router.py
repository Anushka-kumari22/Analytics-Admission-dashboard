from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from .schemas import ReadmittedStudentsResponse
from .service import AdmissionService

router = APIRouter(tags=["admission"])

@router.get("/readmitted-students", response_model=ReadmittedStudentsResponse)
def get_readmitted_students(db: Session = Depends(get_db)):
    service = AdmissionService(db)
    return service.get_readmitted_students()

