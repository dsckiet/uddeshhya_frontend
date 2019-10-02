import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import * as apiService from "../../../utils/Services";
import Modal from "react-responsive-modal";

const Teams = () => {
  const Auth = useContext(AuthContext);

  const [teams, setTeams] = useState([]);
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
    const getTeamList = async () => {
      try {
        const response = await apiService.getTeamData();
        setTeams(response.team);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };
    getTeamList();
  }, [Auth]);

  const handleDeleteProject = async id => {
    setIsLoading(true);
    try {
      await apiService.deleteTeam(id, {
        headers: {
          "x-auth-token": Auth.token
        }
      });
      const response = await apiService.getTeamData();
      setTeams(response.team);
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
            <h2>Do you want to delete this?</h2>
            <button
              className="btn btn-danger"
              disabled={isLoading}
              onClick={() => handleDeleteProject(teams[current]._id)}
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
              <Link to="/admin"> Dashboard</Link> > Team
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Link to="/add-team" className="btn btn-success mb-2">
              Add Team Member
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
                  <th scope="col">Position</th>
                  <th scope="col">Role</th>
                  <th scope="col">Delete ?</th>
                </tr>
              </thead>
              <tbody>
                {teams.length !== 0 ? (
                  teams.map((team, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i}</th>
                        <td>{team.name}</td>
                        <td>{team.position}</td>
                        <td>{team.role}</td>
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
                    );
                  })
                ) : (
                  <>
                    <h3 className="mt-2">No team members found</h3>
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

export default Teams;
