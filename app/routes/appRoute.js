import appController from "../controller/appController.js";
const appRoutes = (app) => {
  app.route("/blogs").get(appController.getBlog);
  app.route("/blogs").post(appController.postBlog);
  app.route("/update/:id").post(appController.updateBlog);
  app.route("/delete/:rid").get(appController.deleteBlog);
};

export default appRoutes;
