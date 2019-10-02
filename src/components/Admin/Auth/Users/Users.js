import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import * as apiService from "../../../../utils/Services";
import Modal from "react-responsive-modal";

const Users = () => {
  const Auth = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = i => {
    setShow(true);
  };

  const hideModal = () => {
    window.scrollTo(0, 0);
    setShow(false);
  };

  useEffect(() => {
    const getDonorsList = async () => {
      try {
        const response = await apiService.getUsers({
          headers: {
            "x-auth-token": Auth.token
          }
        });
        setUsers(response.users);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    getDonorsList();
  }, [Auth]);

  const handleDeleteUser = async id => {
    setIsLoading(true);
    try {
      await apiService.deleteUser(id, {
        headers: {
          "x-auth-token": Auth.token
        }
      });
      const response = await apiService.getUsers({
        headers: {
          "x-auth-token": Auth.token
        }
      });
      setUsers(response.users);
      hideModal();
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.response.data.message);
    }
  };

  return (
    <>
      <Modal open={show} onClose={hideModal} center>
        <div className="row">
          <div className="col-lg-12 m-2 p-3">
            <h2>Do you want to delete this user?</h2>
            <button
              className="btn btn-danger"
              disabled={isLoading}
              onClick={() => handleDeleteUser(users[current]._id)}
            >
              {isLoading ? "Please Wait.." : "Yes"}
            </button>
            <button
              className="btn btn-secondary m-2"
              disabled={isLoading}
              onClick={hideModal}
            >
              No
            </button>
          </div>
        </div>
      </Modal>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-12 mt-4 mb-4 abtmain">
            <p>
              <Link to="/admin"> Dashboard</Link> > Users
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Link to="/add-user" className="btn btn-success mb-2">
              Add User
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <table className="table table-striped table-responsive">
              <thead className="table-danger">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Delete ?</th>
                </tr>
              </thead>
              <tbody>
                {users.length !== 0 ? (
                  users.map((user, i) => {
                    return user.email !== Auth.user.email ? (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => {
                              setCurrent(i);
                              showModal(i);
                            }}
                          >
                            DELETE
                          </button>
                        </td>
                      </tr>
                    ) : null;
                  })
                ) : (
                  <>
                    <h3 className="mt-2">No users found</h3>
                  </>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
