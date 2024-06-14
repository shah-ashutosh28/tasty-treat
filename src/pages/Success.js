import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-center">Order Successful!</h2>
          <p>Your Order has been Placed Successfully.</p>
        </div>
      )}
    </div>
  );
};

export default Success;
