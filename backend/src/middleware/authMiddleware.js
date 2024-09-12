const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Access denied, no token provided.' });
    }
    try {
      // Token verification logic (JWT, etc.)
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };
  
  module.exports = authMiddleware;
  