import { useEffect } from "react";
import { deleteRoles, getRoles } from "../services/roles";
import { rolesHeader } from "../constant";
import { ListHeader } from "./ListHeader";

export const RolesListComponent = ({ roles, setRoles, permissions }) => {
  const handleDeleteRoles = (id) => {
    deleteRoles(id);
    setRoles(roles.filter((role) => role._id !== id));
  };

  useEffect(() => {
    getRoles(function (res) {
      setRoles(res?.data);
      console.log("WERWEE=",roles, res?.data?.data);
    });
  }, [setRoles]);

  return (
    <table className="table table-bordered">
      <ListHeader data={rolesHeader} />
      <tbody>
        {roles?.map((role, index) => (
          <tr key={role._id}>
            <th scope="row">{index}</th>
            <td>{role?.role ?? ""}</td>

            <td>
              {/* {permissions.edit && (
                <button className="btn btn-info btn-sm">Edit</button>
              )} */}
              {permissions.delete && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDeleteRoles(role._id)}
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
