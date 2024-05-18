import jwt from 'jsonwebtoken'

export const protect = async (req, res, next) => {
	const token = req.headers.authorization

  if (!token || !token.startsWith('Bearer ')) {
    return res.status(401).json({
			message: "Token has invalid format"
		})
  }
  const tokenWithoutBearer = token.split(" ")[1];
//ตรวจสอบว่า Token ถูกต้องและยังไม่หมดอายุหรือไม่
  jwt.verify(tokenWithoutBearer, process.env.SECRET_KEY, (err, payload) => {
    
    //ถ้า Token ไม่ผ่านเงื่อนไข ก็ให้ส่ง Response กลับไปว่า Token ที่ส่งเข้ามานั้น Invalid
    if (err) {
      return res.status(401).json({
        message: "Token is invalid",
      });
    }
    req.user = payload;
    next();
  });
}
