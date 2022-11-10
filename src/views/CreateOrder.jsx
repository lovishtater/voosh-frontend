import {LockClosedIcon} from "@heroicons/react/20/solid";
import {useState} from "react";
import {API} from "../backend";
export default function CreateOrder() {
  const [order , setOrder] = useState({
    user_id : localStorage.getItem("vooshUser") ? JSON.parse(localStorage.getItem("vooshUser")).user._id : "",
    sub_type : "",
    phoneNumber : "",
    address : "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleChange = name => event => {
    setError("");
    setOrder({...order , [name] : event.target.value});
  };

  const onSubmit = event => {
    event.preventDefault();
    setError("");
    setLoading(true);
    fetch(`${API}/add-order`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${JSON.parse(localStorage.getItem("vooshUser")).token}`
      },
      body: JSON.stringify(order),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
          setLoading(false);
        } else {
          setSuccess(true);
          setLoading(false);
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
    setLoading(false);
  };

  return (
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://bookface-images.s3.amazonaws.com/logos/545e403209c1c7a3d7a847b1eafd0a622c4554e6.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Create New Order
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="st" className="sr-only">
                  Sub Type
                </label>
                <input
                  id="st"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange("sub_type")}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="sr-only">
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  autoComplete="phoneNumber"
                  required
                  onChange={handleChange("phoneNumber")}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Phone Number"
                />
                </div>
                <div>
                <label htmlFor="address" className="sr-only">
                  Address
                </label>
                <input

                  id="address"
                  name="address"
                  type="text"
                  autoComplete="address"
                  required
                  onChange={handleChange("address")}
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Address"
                />
            </div>
            </div>
            { error && <div className="text-red-500 text-center">error</div>}
            { success && <div className="text-green-500 text-center">Order Created Successfully</div>}
            { loading && <div className="text-green-500 text-center">Loading...</div>}

            <div>
              <button
              onClick={onSubmit}
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Create an Order
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
