import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let url = process.env.REACT_APP_BACKEND_URL;
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get(`${url}/order`);
        setOrders(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-2 text-muted">Loading orders...</p>
      </div>
    );

  if (error)
    return (
      <div className="text-center mt-5 text-danger">
        <p>{error}</p>
      </div>
    );

  if (!orders.length)
    return (
      <div className="container text-center mt-5">
        <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: "400px" }}>
          <p className="fs-5 text-muted mb-3">
            You haven’t placed any orders yet
          </p>
          <a href="/" className="btn btn-primary px-4">
            Get started
          </a>
        </div>
      </div>
    );

  return (
    <>
      <h3 className="title">Orders ({orders.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Mode</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>P&L</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => {
              
              const profitLoss =
                order.mode === "Buy"
                  ? -order.price * order.qty
                  : order.price * order.qty;

              const isProfit = profitLoss >= 0;
              const profClass = isProfit ? "profit" : "loss";

              return (
                <tr key={order._id || index}>
                  <td>{order.name}</td>
                  <td>{order.mode}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td className={profClass}>{profitLoss.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
