import sql from "../../database.js";

const Task = {};

Task.getBlog = (req, result) => {
  let getAllPost = `select * from blog`;
  sql.query(getAllPost, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

Task.postBlog = (req, result) => {
  const { body, createdBy } = req.body;
  let query = `insert into blog (body, created_by) values ('${body}', '${createdBy}')`;
  sql.query(query, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

Task.updateBlog = (req, result) => {
  const { body, createdBy } = req.body;
  let query = `update blog set body="${body}", created_by = '${createdBy}' where id= '${req.params.id}'`;
  sql.query(query, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, response);
    }
  });
};
Task.deleteBlog = (req, result) => {
  const { rid } = req.params;
  let query = `delete from blog where id =${rid}`;
  sql.query(query, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, response);
    }
  });
};

export default Task;

// insert into `test`.`blog` (`body`, `created_by`) values ('final projec', 'raj');
// UPDATE blog SET body = 'New Post Isf', `created_by` = 's' WHERE (id = '10');
//DELETE FROM `test`.`blog` WHERE (`id` = '11');
