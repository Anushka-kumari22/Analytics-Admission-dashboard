from fastapi import HTTPException

NotFoundException = HTTPException(status_code=404, detail="Not found")
UnauthorizedException = HTTPException(status_code=401, detail="Could not validate credentials")

