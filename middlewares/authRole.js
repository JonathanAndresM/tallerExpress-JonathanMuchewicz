export const authRole = (roleRequired) => {
    return (req, res, next) => {
      const user = req.user;
      if (!user) {
        return res.status(401).json({ message: "Usuario no autenticado" });
      }
  
      if (user.role !== roleRequired) {
        return res.status(403).json({ message: "No tienes permisos para realizar esta acción" });
      }
  
      next();
    };
  };