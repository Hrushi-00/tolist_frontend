import React, { useState, useEffect } from 'react'
import mobile from '../Image/mobile.jpg'
import EditUserModal from './EditUserModal'

const Contact = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/users');
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          console.error('Failed to fetch users');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/users/${userId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
         setUsers(users.filter(user => user._id !== userId));
      } else {
        console.error('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleUpdate = (updatedUser) => {
    setUsers(users.map(user => 
      user._id === editingUser._id ? { ...user, ...updatedUser } : user
    ));
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row mt-10 px-4 sm:px-8 lg:px-16 gap-10 items-center">
        {/* image  */}
        <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden">
          <img
            src={mobile}
            alt="App Preview"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div className="w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
            Start Organizing Your Life Today
          </h1>
          <p className="text-base sm:text-lg mb-6 px-2 sm:px-4 max-w-xl">
            Join us now and transform your productivity with our intuitive to-do list platform!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
            <button className="p-3 px-6 border font-medium border-[#FF3E54] bg-[#FF3E54] text-white hover:bg-[#f15668f5] hover:text-white transition rounded-xl">
              Get Started Today
            </button>
            <button className="p-3 px-12 border font-normal border-[#FF3E54] bg-white text-[#1e1b1b] hover:bg-[#f15668f5] hover:text-white transition rounded-xl">
              Learn more
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto px-4 sm:px-6 lg:px-8 py-4">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Gender</th>
              <th className="px-4 py-2 border">Language</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border" colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-4 py-2 border">{user.gender}</td>
                <td className="px-4 py-2 border">{user.language.join(', ')}</td>
                <td className="px-4 py-2 border">{user.email}</td>
                <td className="px-4 py-2 border">
                  <button 
                    onClick={() => handleEdit(user)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-xs sm:text-sm"
                  >
                    Edit
                  </button>
                </td>
                <td className="px-4 py-2 border">
                  <button 
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-xs sm:text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingUser && (
        <EditUserModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onUpdate={handleUpdate}
        />
      )}
    </>
  )
}

export default Contact
