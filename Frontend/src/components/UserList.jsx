import React, { useState } from 'react';
import UserForm from './UserForm';
import ConfirmDialog from './ConfirmDialog';

export default function UserList({ users, onUsersChange }) {
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8081/api/users/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete user');
      onUsersChange();
      setDeletingUser(null);
    } catch (err) {
      alert('Delete failed: ' + err.message);
    }
  };

  return (
    <>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No users found.
              </td>
            </tr>
          )}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => setEditingUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn-delete"
                  onClick={() => setDeletingUser(user)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingUser && (
        <UserForm
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSuccess={() => {
            setEditingUser(null);
            onUsersChange();
          }}
        />
      )}

      {deletingUser && (
        <ConfirmDialog
          message={`Are you sure you want to delete user "${deletingUser.name}"?`}
          onConfirm={() => handleDelete(deletingUser.id)}
          onCancel={() => setDeletingUser(null)}
        />
      )}
    </>
  );
}