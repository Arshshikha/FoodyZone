import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
    const [orderData, setOrderData] = useState(null);
    

    const fetchMyOrder = async () => {
        const userEmail = localStorage.getItem('userEmail');
        console.log("Sending userEmail:", userEmail);

        try {
            const res = await fetch("http://localhost:5000/api/myOrderData", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: userEmail })
            });
            const response = await res.json();
            console.log("Fetched orderData:", response);

            setOrderData(response);
        } catch (error) {
            console.error("Error fetching order data:", error);
        }
    };

    useEffect(() => {
        fetchMyOrder();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    <h3 className="text-center mt-3 mb-4">My Orders</h3>

                    {console.log("Mapped data:", orderData?.orderData?.order_data)}

                    {orderData?.orderData?.order_data?.length > 0 ? (
                        orderData.orderData.order_data.slice(0).reverse().map((order, orderIndex) => (
                            <div key={orderIndex}>
                                {/* If data is in format: [ [ {item}, {item} ], "date" ] */}
                                {Array.isArray(order) && Array.isArray(order[0]) ? (
                                    <>
                                        <div className="m-auto mt-5">
                                            <strong>Order Date:</strong> {new Date(order[1]).toLocaleString()}
                                            <hr />
                                        </div>
                                        {order[0].map((item, itemIndex) => (
                                            <div key={itemIndex} className="col-12 col-md-6 col-lg-3">
                                                <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                    <div className="card-body">
                                                        <h5 className="card-title">{item.name}</h5>
                                                        <div className="container w-100 p-0" style={{ height: "38px" }}>
                                                            <span className="m-1">Qty: {item.qty}</span>
                                                            <span className="m-1">Size: {item.size}</span>
                                                            <div className="d-inline ms-2 h-100 w-20 fs-5">
                                                                ₹{item.price}/-
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                ) : (
                                    // Else if data is a flat array with order_date inside each item
                                    <>
                                        {order.map ? order.map((item, itemIndex) => (
                                            <div key={itemIndex}>
                                                <div className="m-auto mt-5">
                                                    <strong>Order Date:</strong> {new Date(item.order_date).toLocaleString()}
                                                    <hr />
                                                </div>
                                                <div className="col-12 col-md-6 col-lg-3">
                                                    <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                        <div className="card-body">
                                                            <h5 className="card-title">{item.name}</h5>
                                                            <div className="container w-100 p-0" style={{ height: "38px" }}>
                                                                <span className="m-1">Qty: {item.qty}</span>
                                                                <span className="m-1">Size: {item.size}</span>
                                                                <div className="d-inline ms-2 h-100 w-20 fs-5">
                                                                    ₹{item.price}/-
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )) : null}
                                    </>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="m-3 text-center">No orders found.</div>
                    )}
                </div>
            </div>

            <Footer />
        </div>
    );
}