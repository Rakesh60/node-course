import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const token = req.header("auth");
    const decoded = jwt.verify(token, "ABC");
    console.log(decoded);
    req.id = decoded.id;
    next();
  } catch (error) {
    console.log("Auth Error");
    res.status(401).send({ error: "Requires Authentication" });
  }
};

export default auth;
