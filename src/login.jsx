import { useState } from "react";

const loginform = () => {
  const [ formData, setFormData ] = useState({
    username: '',
    password: '',
  });

  const handleOnchange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value, }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submited");
    console.log(formData);
  };

  return (
    <section className="w-screen h-screen bg-teal-400">
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="border-black bg-white border-2 flex flex-col  items-center h-min w-min pr-5 pl-5 pb-5"
        >
          <div>
            <h1 className="text-black font-medium text-xl my-3">Lonin form</h1>
          </div>
          <div className="flex flex-col justify-center">
            <label
              htmlFor="username"
              className="text-black font-medium text-xl"
            >
              username:
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleOnchange}
              placeholder="Username"
              className="h-10 w-60 outline-none border-2 border-black font-mono font-medium"
            />
            <label
              htmlFor="password"
              className="text-black font-medium text-xl"
            >
              password:
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleOnchange}
              id="password"
              placeholder="Password"
              className="h-10 w-60 outline-none border-2 border-black font-mono font-medium"
            />
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="text-white border-black border-2 px-4 py-1 bg-black font-mono"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default loginform;
