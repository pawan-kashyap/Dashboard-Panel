import { useState, useEffect } from "react";
import { deleteProduct, getProducts } from "../services/product";
import { categoryHeader } from "../constant";
import { ListHeader } from "./ListHeader";

export const ProductListComponent = ({ permissions }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getProducts(function (res) {
      setProducts(res?.data);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id);
    setProducts(products.filter((user) => user._id !== id));
  };
  return (
    <table className="table table-bordered">
      <ListHeader data={categoryHeader} />
      <tbody>
        {products?.map((item, index) => (
          <tr key={item._id}>
            <th scope="row">{index}</th>
            <td>{item?.name ?? ""}</td>
            <td>{item?.description ?? ""}</td>

            <td>
              {permissions.delete && (
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(item._id)}
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
