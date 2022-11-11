import React from "react";
import {API} from "../backend";

const AllOrder = () => {
    const header = [ "Sub Type", "phone Number" , "Address" ]
    const [orders, setOrders] = React.useState([]);
    const user = JSON.parse(localStorage.getItem("vooshUser"));
    console.log(user);

    const fetchOrders = async() => {
        await fetch(`${API}/get-order/${user.user._id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + user.token
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrders(data.order);
            })
            .catch((err) => console.log(err));
    };
    React.useEffect(() => {
        if (user){
            fetchOrders();
        }
    }, []);

  return (
    <div>
      <div class="hidden md:table md:w-full border">
        <div class="table-row bg-teal-600">
          {header.map((item, index) => (
            <div class="table-cell py-2 px-4 text-white">{item}</div>
          ))}
        </div>
        {orders.map((item, index) => (
          <div class="table-row">
            <div class="table-cell py-2 px-3">{item.sub_type}</div>
            <div class="table-cell py-2 px-3">{item.phoneNumber}</div>
            <div class="table-cell py-2 px-3">{item.Address}</div>
          </div>
        ))}
      </div>

      <div class="flex flex-col md:hidden p-4">
        {orders.map((item, index) => (
          <div class="rounded shadow w-full p-3 my-3">
            <div class="flex flex-row justify-between">
              <h3 class="text-xl font-bold">{item.sub_type}</h3>
              <h3 class="text-xl font-bold">${item.phoneNumber}</h3>
            </div>
            <div class="text-left">
              <p>{item.Address}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllOrder;
