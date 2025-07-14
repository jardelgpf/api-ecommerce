import { Router } from "express";
import { UsuarioController } from "../controllers/UsuarioController";
import { authJwt } from "../middleware/authJwt";

const routes = Router()
routes.get("/", authJwt, UsuarioController.getAll)
routes.get("/:id", authJwt, UsuarioController.getOne)
routes.post("/", UsuarioController.create)
routes.put("/:id", authJwt, UsuarioController.update)
routes.delete("/:id", authJwt, UsuarioController.delete)

export default routes