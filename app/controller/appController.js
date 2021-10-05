import appModel from "../model/appmodel.js";
const Task = {};

Task.getBlog = (req, res) => {
  appModel.getBlog(req, (err, response) => {
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

Task.registerBlog = (req, res) => {
  appModel.registerBlog(req, (err, response) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.send(response);
    }
  });
};

Task.loginBlog = (req, res) => {
  appModel.loginBlog(req, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};

Task.transfer = (req, res) => {
  appModel.transfer(req, (err, response) => {
    if (err) {
      res.send(err);
    } else {
      res.send(response);
    }
  });
};

export default Task;
