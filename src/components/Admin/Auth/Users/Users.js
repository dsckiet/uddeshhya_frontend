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

  return (
    <>
      <Modal open={show} onClose={hideModal} center>
        <div className="row">
          <div className="col-lg-12">
            <h2>Donor Details</h2>
            {users.length > 0 ? (
              current >= 0 ? (
                <>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Address:{" "}
                    </span>

                    {users[current].address}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Phone:{" "}
                    </span>
                    {users[current].phone}
                  </div>
                  <div>
                    <span style={{ color: "gray", fontSize: "14px" }}>
                      Email:{" "}
                    </span>
                    {users[current].email}
                  </div>
                </>
              ) : null
            ) : null}
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
                  <th scope="col">Blood Group</th>
                  <th scope="col">Has Donated</th>
                  <th scope="col">More Details</th>
                </tr>
              </thead>
              <tbody>
                {users.length !== 0 ? (
                  users.map((user, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{user.name}</td>
                        <td>{user.bloodGroup}</td>
                        <td>{user.hasDonated ? "Yes" : "No"}</td>
                        <td>
                          <button
                            className="btn btn-sm"
                            onClick={() => {
                              setCurrent(i);
                              showModal(i);
                            }}
                          >
                            More
                          </button>
                        </td>
                      </tr>
                    );
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
