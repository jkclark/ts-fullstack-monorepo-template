import type { User } from "@ts-monorepo/common";
import { formatUser, isValidEmail } from "@ts-monorepo/common";
import React, { useEffect, useState } from "react";

const defaultUser: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
};

export const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>(defaultUser);
  const [formattedUser, setFormattedUser] = useState<string>("");
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);

  useEffect(() => {
    setFormattedUser(formatUser(user));
    setIsEmailValid(isValidEmail(user.email));
  }, [user]);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setUser((prev) => ({
      ...prev,
      email: newEmail,
    }));
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "2rem auto",
        padding: "1.5rem",
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h2>User Profile</h2>
      <div style={{ marginBottom: "1rem" }}>
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <div style={{ margin: "1rem 0" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "0.5rem" }}>
            <strong>Email:</strong>
          </label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={handleEmailChange}
            style={{
              width: "100%",
              padding: "0.5rem",
              border: `1px solid ${isEmailValid ? "#ccc" : "red"}`,
              borderRadius: "4px",
            }}
          />
          {!isEmailValid && (
            <p style={{ color: "red", fontSize: "0.875rem", marginTop: "0.25rem" }}>
              Please enter a valid email address
            </p>
          )}
        </div>
      </div>
      <div
        style={{
          padding: "1rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
          fontFamily: "monospace",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        <strong>Formatted User:</strong> {formattedUser}
      </div>
      <div
        style={{
          marginTop: "1rem",
          padding: "0.75rem",
          backgroundColor: isEmailValid ? "#e8f5e9" : "#ffebee",
          borderRadius: "4px",
          color: isEmailValid ? "#2e7d32" : "#c62828",
        }}
      >
        {isEmailValid ? "✓ Email is valid" : "✗ Invalid email format"}
      </div>
    </div>
  );
};

export default UserProfile;
