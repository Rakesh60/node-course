import appController from "../controller/appController.js";
import auth from "../auth.js";
const appRoutes = (app) => {
  app.route("/blogs").get(auth, appController.getBlog);
  app.route("/blogs").post(auth, appController.postBlog);
  app.route("/update/:id").post(appController.updateBlog);
  app.route("/delete/:rid").get(appController.deleteBlog);
  app.route("/register").post(appController.registerBlog);
  app.route("/login").post(appController.loginBlog);
  app.route("/transfer").post(appController.transfer);
};

export default appRoutes;
