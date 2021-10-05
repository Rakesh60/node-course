import sql from "../../database.js";
import jwt from "jsonwebtoken";

const Task = {};

Task.getBlog = (req, result) => {
  console.log(req.id);
  let getAllPost = `select * from blog;`;
  sql.query(getAllPost, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      const data = response.map((val) => {
        return { ...val, owner: val.user_id === req.id };
      });
      result(null, data);
    }
  });
};

Task.postBlog = (req, result) => {
  const { body, createdBy } = req.body;
  let query = `insert into blog (body, user_id) values ('${body}', '${req.id}')`;
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
Task.registerBlog = (req, result) => {
  const { user_name, pass_word } = req.body;
  let query = `INSERT INTO login_master (user_name, pass_word) VALUES ('${user_name}','${pass_word}')`;
  sql.query(query, async (err, response) => {
    if (err) {
      if (err.code === "ER_DUP_ENTRY") {
        result({ status: "duplicate" }, null);
      } else {
        console.log(err);
        result(err, null);
      }
    } else {
      result(null, response);
    }
  });
};
Task.loginBlog = (req, result) => {
  const { user_name, pass_word } = req.body;
  let query = `SELECT user_id,user_name, pass_word FROM test.login_master where user_name="${user_name}";
  `;
  sql.query(query, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      const value = JSON.parse(JSON.stringify(response));
      const data = value[0];
      if (response.length === 0) {
        result(null, { status: false, message: "invalid credentials" });
      } else {
        if (data.pass_word === pass_word) {
          const token = jwt.sign(
            {
              id: data.user_id,
            },
            "ABC",
            { expiresIn: "2d" }
          );
          result(null, { status: true, token });
        } else {
          result(null, { status: false });
        }
      }
    }
  });
};

Task.transfer = (req, result) => {
  const { value, id } = req.body;
  let query = `SELECT amount FROM bank_acc`;
  sql.query(query, async (err, response) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      const data = JSON.parse(JSON.stringify(response))[0];
      const { amount } = data;
      if (amount < value) {
        result(null, { message: "amount unavailable" });
      } else {
        sql.query(
          `select user_id from login_master where user_id = "${id}"`,
          (err, response) => {
            if (err) {
              console.log(err);
              result(err, null);
            } else {
              const data1 = JSON.parse(JSON.stringify(response));
              if (data1.length === 0) {
                result(null, { message: "user does not exist" });
              } else {
                sql.query(
                  `UPDATE login_master SET bal = bal + '${value}' WHERE (user_id = '${id}')`,
                  (err, response) => {
                    if (err) {
                      console.log(err);
                      result(err, null);
                    } else {
                      const data2 = JSON.parse(JSON.stringify(response));
                      if (data2.changedRows > 0) {
                        sql.query(
                          `UPDATE bank_acc SET amount = amount-"${value}"`,
                          (err, resp) => {
                            if (err) {
                              console.log(err);
                              result(err, null);
                            } else {
                              result(null, { message: "successfull" });
                            }
                          }
                        );
                      }
                    }
                  }
                );
              }
            }
          }
        );
      }
      // result(null, { amount });
    }
  });
};

export default Task;

// insert into `test`.`blog` (`body`, `created_by`) values ('final projec', 'raj');
// UPDATE blog SET body = 'New Post Isf', `created_by` = 's' WHERE (id = '10');
//DELETE FROM `test`.`blog` WHERE (`id` = '11');
