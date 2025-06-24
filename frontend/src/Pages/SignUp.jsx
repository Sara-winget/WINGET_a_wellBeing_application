import React, { useState } from 'react';

const SignUpPage = () => {
  const [role, setRole] = useState('');
  const [resume, setResume] = useState(null);
  const [proofPhoto, setProofPhoto] = useState(null);
  const [profilePic, setProfilePic] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sign Up Submitted");
    console.log("Role:", role);
    console.log("Profile Pic:", profilePic);
    if (role !== "user") {
      console.log("Resume:", resume);
      console.log("Proof Photo:", proofPhoto);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Phone Number */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          {/* Profile Picture (for all) */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Profile Picture</label>
            <input
              type="file"
              accept=".jpg,.jpeg,.png"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="w-full"
            />
          </div>

          {/* Role Dropdown */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="phycologist">Phycologist</option>
            <option value="physiotherapist">Physiotherapist</option>
            <option value="gym trainer">Gym Trainer</option>
            <option value="yoga trainer">Yoga Trainer</option>
            <option value="zumba trainer">Zumba Trainer</option>
            <option value="nutritionist">Nutritionist</option>
            <option value="dermatologist">Dermatologist</option>
          </select>

          {/* Conditional Resume & Proof Photo Upload */}
          {role && role !== "user" && (
            <>
              <div className="text-sm text-gray-500">
                Proof of work: Minimum 2 years experience
              </div>

              {/* Resume Upload */}
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files[0])}
                className="w-full"
              />

             
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-green-500 hover:underline">
            Login
          </a>
        </p>

        {/* Google Sign Up */}
        <button
          onClick={() => console.log("Sign up with Google")}
          className="w-full mt-4 flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
