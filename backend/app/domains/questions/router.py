from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import SessionLocal
from . import service, schemas

router = APIRouter(prefix="/questions", tags=["Questions"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=list[schemas.QuestionOut])
def get_questions(db: Session = Depends(get_db)):
    return service.get_questions(db)

@router.post("/", response_model=schemas.QuestionOut)
def create_question(question: schemas.QuestionCreate, db: Session = Depends(get_db)):
    return service.add_question(db, question)

@router.delete("/{question_id}")
def delete_question(question_id: int, db: Session = Depends(get_db)):
    service.remove_question(db, question_id)
    return {"message": "Deleted successfully"}
