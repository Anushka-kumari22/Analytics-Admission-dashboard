from sqlalchemy.orm import Session
from .models import Question

def get_all_questions(db: Session):
    return db.query(Question).all()

def create_question(db: Session, title: str, difficulty: str):
    question = Question(title=title, difficulty=difficulty)
    db.add(question)
    db.commit()
    db.refresh(question)
    return question

def delete_question(db: Session, question_id: int):
    question = db.query(Question).filter(Question.id == question_id).first()
    if question:
        db.delete(question)
        db.commit()
    return question
