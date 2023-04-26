import { useState, useEffect } from "react";
import { deleteUser } from "../services/users";
import { getUsers } from "../services/users";
import { userHeader } from "../constant";
import { ListHeader } from "./ListHeader";

export const UsersListComponent = ({ permissions }) => {
  const [users, setUsers] = useState([]);
  const handleDeleteUser = (id) => {
    deleteUser(id);
    setUsers(users.filter((user) => user._id !== id));
  };

  useEffect(() => {
    getUsers(function (res) {
      setUsers(res?.data);
    });
  }, []);

  return (
    <table className="table table-bordered">
      <ListHeader data={userHeader} />
      <tbody>
        {users?.map((user, index) => (
          <tr key={user._id}>
            <th scope="row">{index}</th>
            <td>{user?.firstName ?? ""}</td>
            <td>{user?.lastName ?? ""}</td>
            <td>{user?.email ?? ""}</td>
            <td>
              {permissions.delete && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteUser(user._id)}
                >
                  Delete
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
