import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import * as apiService from "../../../utils/Services";

const Donors = () => {
  const Auth = useContext(AuthContext);

  const [bloodGroup, setBloodgroup] = useState("A+");
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDonorsList = async () => {
      setIsLoading(true);
      try {
        const response = await apiService.getDonorsList(
          { bloodGroup },
          {
            headers: {
              "x-auth-token": Auth.token
            }
          }
        );
        setDonors(response.donors);
        setIsLoading(false);
      } catch (err) {
        console.log(err.response.data.message);
        setIsLoading(false);
      }
    };
    getDonorsList();
  }, [bloodGroup, Auth]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-12 mt-5 mb-4 abtmain">
          <p>Dashboard > Available Donors</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* <form onSubmit={handleSubmit}> */}
          <label>Blood Group</label>
          <div className="row">
            <div className="col-lg-3">
              <div className="form-group">
                <select
                  className="form-control"
                  required
                  onChange={e => setBloodgroup(e.target.value)}
                  name="bloodgroup"
                >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6 mb-2">
              <h3>{isLoading ? "Please Wait..." : null}</h3>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <table className="table table-striped">
            <thead className="table-danger">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Blood Group</th>
                <th scope="col">Phone</th>
                <th scope="col">Has Donated</th>
                <th scope="col">More Details</th>
              </tr>
            </thead>
            <tbody>
              {donors.length !== 0 ? (
                donors.map((donor, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{i}</th>
                      <td>{donor.name}</td>
                      <td>{donor.bloodGroup}</td>
                      <td>{donor.phone}</td>
                      <td>{donor.hasDonated ? "Yes" : "No"}</td>
                      <td>More</td>
                    </tr>
                  );
                })
              ) : (
                <>
                  <h3 className="mt-2">No donors found</h3>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Donors;
