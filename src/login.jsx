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
    <section className="w-screen min-h-screen bg-teal-400 flex items-center justify-center">
  <form
    onSubmit={handleSubmit}
    className="border-black bg-white border-2 flex flex-col items-center w-80 p-5"
  >
    <div>
      <h1 className="text-black font-medium text-xl my-3">Login form</h1>
    </div>
    <div className="flex flex-col justify-center">
      <label
        htmlFor="username"
        className="text-black font-medium text-xl"
      >
        Username:
      </label>
      <input
        type="text"
        name="username"
        id="username"
        value={formData.username}
        onChange={handleOnchange}
        placeholder="Username"
        className="h-10 w-full outline-none border-2 border-black font-mono font-medium my-2"
      />
      <label
        htmlFor="password"
        className="text-black font-medium text-xl"
      >
        Password:
      </label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleOnchange}
        id="password"
        placeholder="Password"
        className="h-10 w-full outline-none border-2 border-black font-mono font-medium my-2"
      />
    </div>
    <div className="mt-5">
      <button
        type="submit"
        className="text-white border-black border-2 px-4 py-2 bg-black font-mono"
      >
        Login
      </button>
    </div>
  </form>
</section>

  );
};

export default loginform;
