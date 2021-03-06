import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import EditPrice from "./EditPrice";

const TableComponents = ({ trColor, products }) => {
  useEffect(() => {});

  return (
    <div>
      <Table className="table" bordered hover>
        <thead className="table__head">
          <tr className={trColor}>
            <th>#</th>
            <th className="table__head__fristTitle"> Photo</th>
            <th className="table__head__secondTitle"> Name</th>
            <th className="table__head__thirdTitle"> Price</th>
          </tr>
        </thead>
        {products.length === 0 ? (
          <h3 className="text-dark text-center my-5 border-0">
            no items added yet
          </h3>
        ) : (
          products.map((item, index) => {
            return (
              <tbody className="table__body" key={index}>
                <tr className="table__body__tr">
                  <td>
                    <h4 className="text-black">{index + 1} </h4>

                    <CheckBox item={item} />
                  </td>

                  <td>
                    <Link
                      className="noneHover"
                      to={`/market/buy/item/${item.id}`}
                    >
                      <img
                        src={item.imageUrl}
                        className="table__body__img"
                        alt=""
                      />
                    </Link>
                  </td>

                  <td>{item.deviceDetail.deviceName}</td>
                  <td>
                    <EditPrice item={item} />
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </Table>
    </div>
  );
};

export default TableComponents;
