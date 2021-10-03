import appModel from "../model/appmodel.js";
const Task = {};

Task.getBlog = (req, res) => {
  appModel.getBlog(req.body, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};

Task.postBlog = (req, res) => {
  appModel.postBlog(req, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};

Task.updateBlog = (req, res) => {
  appModel.updateBlog(req, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};

Task.deleteBlog = (req, res) => {
  appModel.deleteBlog(req, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};
export default Task;
