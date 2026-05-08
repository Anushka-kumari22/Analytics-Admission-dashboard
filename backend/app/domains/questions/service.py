from sqlalchemy.orm import Session
from . import repository
from .schemas import QuestionCreate

def get_questions(db: Session):
    return repository.get_all_questions(db)

def add_question(db: Session, question: QuestionCreate):
    return repository.create_question(db, question.title, question.difficulty)

def remove_question(db: Session, question_id: int):
    return repository.delete_question(db, question_id)