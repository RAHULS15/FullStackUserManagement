import React, { useEffect, useState } from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [reloadFlag, setReloadFlag] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [searchParams, setSearchParams] = useState({ name: '', age: '', address: '' });
  const [searchResults, setSearchResults] = useState([]);
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, [reloadFlag]);

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:8081/api/users');
      if (!res.ok) throw new Error('Failed to fetch users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      alert('Error loading users: ' + err.message);
    }
  };

  const handleSearch = async () => {
    // Remove empty fields from params
    const filteredParams = Object.fromEntries(
      Object.entries(searchParams).filter(([_, v]) => v !== '')
    );

    if (Object.keys(filteredParams).length === 0) {
      alert('Please enter at least one search field');
      return;
    }

    try {
      setSearchAttempted(true);
      const query = new URLSearchParams(filteredParams).toString();
      const res = await fetch(`http://localhost:8081/api/users/search?${query}`);
      if (!res.ok) throw new Error('Failed to search users');
      const data = await res.json();
      setSearchResults(data);
    } catch (err) {
      alert('Search error: ' + err.message);
    }
  };

  const closeSearchPopup = () => {
    setShowSearchPopup(false);
    setSearchResults([]);
    setSearchAttempted(false);
    setSearchParams({ name: '', age: '', address: '' });
  };

  return (
    <div className="dashboard-container">
      <h1 style={{ color: '#40dcc9', marginBottom: '20px' }}>
        User Management Dashboard
      </h1>

      <button
        className="btn-add-user"
        onClick={() => setShowAddForm(true)}
        style={{ marginRight: '10px' }}
      >
        Add User
      </button>

      <button
        className="btn-search-user"
        onClick={() => setShowSearchPopup(true)}
      >
        Search Users
      </button>

      {showAddForm && (
        <UserForm
          onClose={() => setShowAddForm(false)}
          onSuccess={() => {
            setShowAddForm(false);
            setReloadFlag(!reloadFlag);
          }}
        />
      )}

      {showSearchPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 style={{ marginBottom: '10px' }}>Search Users</h2>
            <input
              type="text"
              placeholder="Name"
              value={searchParams.name}
              onChange={(e) => setSearchParams({ ...searchParams, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Search by Age"
              value={searchParams.age}
              onChange={(e) => setSearchParams({ ...searchParams, age: e.target.value })}
            />
            <input
              type="text"
              placeholder="Address(optional)"
              value={searchParams.address}
              onChange={(e) => setSearchParams({ ...searchParams, address: e.target.value })}
            />
            <div style={{ marginTop: '10px' }}>
              <button className="btn-search" onClick={handleSearch}>
                Search
              </button>
              <button className="btn-close" onClick={closeSearchPopup} style={{ marginLeft: '10px' }}>
                Close
              </button>
            </div>

            {searchAttempted && (
              searchResults.length > 0 ? (
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((u) => (
                      <tr key={u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.age}</td>
                        <td>{u.address}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p style={{ marginTop: '10px' }}>No search results found</p>
              )
            )}
          </div>
        </div>
      )}

      <UserList
        users={users}
        onUsersChange={() => setReloadFlag(!reloadFlag)}
      />

      <style jsx>{`
        .btn-add-user,
        .btn-search-user {
          padding: 8px 14px;
          border: none;
          background-color: #40dcc9;
          color: white;
          font-weight: bold;
          cursor: pointer;
          border-radius: 4px;
        }
        .btn-search-user {
          background-color: #3ca0e7;
        }
        .btn-search {
          padding: 8px 14px;
          border: none;
          background-color: #3ca0e7;
          color: white;
          font-weight: bold;
          cursor: pointer;
          border-radius: 4px;
        }
        .btn-close {
          padding: 8px 14px;
          border: none;
          background-color: #f44336;
          color: white;
          font-weight: bold;
          cursor: pointer;
          border-radius: 4px;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          width: 500px;
          max-height: 80vh;
          overflow-y: auto;
        }
        input {
          display: block;
          width: 100%;
          margin: 8px 0;
          padding: 6px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }
        table, th, td {
          border: 1px solid #ddd;
        }
        th, td {
          padding: 8px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}