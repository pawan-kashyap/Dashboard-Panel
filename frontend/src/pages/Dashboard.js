import { useState, useMemo } from "react";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { ModalDialog } from "../components/Modal";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { addRoles, getRoles } from "../services/roles";
import { permissionArray } from "../constant";
import { UsersListComponent } from "../components/UsersListComponent";
import { RolesListComponent } from "../components/RolesListComponent";
import { ProductListComponent } from "../components/ProductListComponent";

export const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [roles, setRoles] = useState([]);

  const user = useMemo(() => JSON.parse(localStorage.getItem("User")), []);

  const formik = useFormik({
    initialValues: {
      role: "",
      permissions: {
        user: {
          add: false,
          edit: false,
          view: false,
          delete: false,
        },
        role: {
          add: false,
          edit: false,
          view: false,
          delete: false,
        },
        category: {
          add: false,
          edit: false,
          view: false,
          delete: false,
        },
      },
    },
    onSubmit: (values) => {
      console.log(values);
      addRoles(values);
      setShow(false);
      getRoles(function (res) {
        console.log(res);
        setRoles(res?.data);
      });
    },
  });

  return (
    <div className="container">
      <Navbar />
      {user.permissions.role.add && (
        <div>
          <button onClick={() => setShow(true)}>Add Roles</button>
        </div>
      )}

      <div className="table-responsive mt-3">
        {user.permissions.user.view && (
          <>
            <h1>Users List</h1>
            <UsersListComponent permissions={user.permissions.user} />
          </>
        )}
        {user.permissions.role.view && (
          <>
            <h1>Roles List</h1>
            <RolesListComponent
              roles={roles}
              setRoles={setRoles}
              permissions={user.permissions.role}
            />
          </>
        )}
        {user.permissions.product.view && (
          <>
            <h1>Product List</h1>
            <ProductListComponent
              permissions={user.permissions.product}
            />
          </>
        )}

        <ModalDialog
          show={show}
          title={"Add Roles"}
          setShow={setShow}
          buttonTitle={"Add Roles"}
        >
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <Col className="mx-2 py-2">
                <label>Role Name</label>
                <input
                  id={"role-name"}
                  name="role"
                  onChange={formik.handleChange}
                  value={formik.values.role}
                />
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 py-2">
                <label> User Permissions</label>
                {permissionArray.map((per) => (
                  <div className="px-2">
                    <label className="px-1">{per}</label>
                    <input
                      type="checkbox"
                      id={`user-${per}`}
                      name={`permissions.user.${per}`}
                      onChange={formik.handleChange}
                      value={formik.values.permissions.user.per}
                    />
                  </div>
                ))}
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 py-2">
                <label> Role Permissions</label>
                {permissionArray.map((per) => (
                  <div className="px-2">
                    <label className="px-1">{per}</label>
                    <input
                      type="checkbox"
                      id={`role-${per}`}
                      name={`permissions.role.${per}`}
                      onChange={formik.handleChange}
                      value={formik.values.permissions.role.per}
                    />
                  </div>
                ))}
              </Col>
            </Row>
            <Row>
              <Col className="mx-2 py-2">
                <label> Product Permissions</label>
                {permissionArray.map((per) => (
                  <div className="px-2">
                    <label className="px-1">{per}</label>
                    <input
                      type="checkbox"
                      id={`category-${per}`}
                      name={`permissions.category.${per}`}
                      onChange={formik.handleChange}
                      value={formik.values.permissions.category.per}
                    />
                  </div>
                ))}
              </Col>
            </Row>
            <button type="submit">Add role</button>
            <button onClick={() => setShow(false)}>Close</button>
          </form>
        </ModalDialog>
      </div>
    </div>
  );
};
