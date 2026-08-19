"use client";

import Link from "next/link";
import "./ManageRole.css";

export default function ManageRole() {

  const users = [
    {
      id: 1,
      name: "Usama Aslam",
      email: "theeusamaaa@gmail.com",
      phone: "+923207852636",
      role: "Cashier",
      access: ["Stock Listing", "Expense Management"],
    },
    {
      id: 2,
      name: "Orhan Khan",
      email: "orhankhan098@gmail.com",
      phone: "+923207852636",
      role: "Owner",
      access: ["Full Access"],
    },
  ];

  return (
    <div className="role-page">

      {/* Breadcrumb */}
      <div className="role-breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/role" className="breadcrumb-link">
          Role Management
        </Link>{" "}
        &gt; Manage Role
      </div>

      {/* Header */}
      <div className="role-header">
        <h1>Manage Roles</h1>

        <Link href="/role/add" className="add-role-btn">
          <span>+</span>
          Add New Role
        </Link>
      </div>

      {/* Main Card */}
      <div className="roles-card">

        <h3>All Users</h3>

        {/* Toolbar */}
        <div className="role-toolbar">

          <div className="entries-control">
            <span>10</span>
            <span>entries per page</span>
          </div>

          <div className="role-search">
            <label>Search:</label>
            <input
              type="text"
              placeholder="Search User"
            />
          </div>

        </div>

        {/* Table */}
        <div className="role-table-wrapper">

          <table className="role-table">

            <thead>
              <tr>
                <th>SL</th>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Phone Number</th>
                <th>Role Name</th>
                <th>Access</th>
              </tr>
            </thead>

            <tbody>

              {users.map((user) => (

                <tr key={user.id}>

                  <td>{user.id}</td>

                  <td>{user.name}</td>

                  <td>{user.email}</td>

                  <td>{user.phone}</td>

                  <td>{user.role}</td>

                  <td>
                    <div className="access-list">

                      {user.access.map((access, index) => (

                        <span
                          className="access-badge"
                          key={index}
                        >
                          {access}
                        </span>

                      ))}

                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}