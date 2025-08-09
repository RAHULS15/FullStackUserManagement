const API_BASE = "http://localhost:8081/api/users";

export async function login(username, password) {
  // Hardcoded login check
  if (username === "admin" && password === "admin123") {
    return { success: true };
  }
  return { success: false };
}

export async function getUsers() {
  const res = await fetch(API_BASE);
  return res.json();
}

export async function addUser(user) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

export async function updateUser(id, user) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return res.json();
}

export async function deleteUser(id) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  return res.ok;
}