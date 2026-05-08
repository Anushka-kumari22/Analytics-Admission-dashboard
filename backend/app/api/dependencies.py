from fastapi import Depends, HTTPException, status
from sqlalchemy.orm import Session
from .router import api_router
from ..db.session import get_db
from ..core.security import verify_token

async def get_current_user(token: str = Depends(api_router.api_key_resolver), db: Session = Depends(get_db)):
    payload = verify_token(token)
    if not payload:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    return payload

