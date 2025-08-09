import React, { useState, useEffect } from 'react';

export default function UserForm({ user, onClose, onSuccess }) {
  const isEdit = Boolean(user);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  // Populate form when editing
  useEffect(() => {
    if (isEdit && user) {
      setName(user.name || '');
      setAge(user.age || '');
      setAddress(user.address || '');
    } else {
      setName('');
      setAge('');
      setAddress('');
    }
  }, [user, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !age || !address) {
      setError('Please fill all fields');
      return;
    }

    const payload = { name, age: Number(age), address };

    try {
      const res = await fetch(
        `http://localhost:8081/api/users${isEdit ? '/' + user.id : ''}`,
        {
          method: isEdit ? 'PUT' : 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }
      );
      if (!res.ok) throw new Error('Failed to save user');
      onSuccess();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>{isEdit ? 'Update User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit} className="user-form">
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <input
            type="number"
            placeholder="Enter age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="0"
          />
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {error && <p className="error-msg">{error}</p>}
          <div className="form-buttons">
            <button
              type="submit"
              style={{ backgroundColor: '#40dcc9', color: '#fff' }}
            >
              {isEdit ? 'Update' : 'Add'}
            </button>
            <button
              type="button"
              className="btn-cancel"
              style={{ backgroundColor: '#ff4d4f', color: '#fff' }}
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}