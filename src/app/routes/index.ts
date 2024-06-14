import { Router } from "express";
import { userRoute } from "../module/user/user.route";

const router = Router();

const modulesRutes = [
  {
    path: "/user",
    route: userRoute,
  },
];

modulesRutes.forEach((route) => router.use(route.path, route.route));

export default router;
