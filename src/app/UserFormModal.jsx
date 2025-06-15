import React, { useState, useEffect } from "react";

function UserFormModal() {
  const [showThankYou, setShowThankYou] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    language: [],
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => ({
        ...prev,
      language: checked
        ? [...prev.language, value]
        : prev.language.filter((lang) => lang !== value),
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      console.log("Form Submitted:", form);
      setShowThankYou(true);
    } else {
      const data = await response.json();
      if (response.status === 400) {
        alert("Email already exists. Please use a different email.");
      } else {
        alert("An error occurred. Please try again later.");
      }
      console.error("Server Error:", data.error);
    }
  } catch (error) {
    console.error("Network Error:", error);
    alert("An error occurred. Please check your connection.");
  }
};


  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (showThankYou) {
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showThankYou]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 z-50">
      {!showThankYou ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg w-full max-w-md"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            Get Started Today!
          </h2>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={form.firstName}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={form.lastName}
              onChange={handleChange}
              className="w-1/2 p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Gender</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Languages Known</label>
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="language"
                  value="English"
                  onChange={handleCheckboxChange}
                />
                English
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="language"
                  value="Hindi"
                  onChange={handleCheckboxChange}
                />
                Hindi
              </label>
              <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                  name="language"
                  value="Marathi"
                  onChange={handleCheckboxChange}
                  />
                Marathi
                </label>
            </div>
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Submit
            </button>
            <button 
              type="button"
              onClick={closeModal} 
              className="w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="bg-white p-6 rounded-lg w-full max-w-sm text-center">
          <div className="text-3xl mb-2">❤️</div>
          <h2 className="text-lg font-semibold mb-1">
            Thank you for connecting with us.
          </h2>
          <p className="text-sm mb-4 text-gray-600">
            Our team will contact you soon.
          </p>
          <button
            onClick={closeModal}
            className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Done
          </button>
      </div>
      )}
    </div>
  );
}

export default UserFormModal;
