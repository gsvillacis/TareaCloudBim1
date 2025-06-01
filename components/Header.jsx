import React from "react";

export default function Header({ user }) {
  return (
    <div className="header">
      <img src="/logo.png" alt="Logo" className="header-logo" />
      <div className="header-info">
        <div>{user?.name}</div>
        <div>{user?.email}</div>
      </div>
    </div>
  );
}