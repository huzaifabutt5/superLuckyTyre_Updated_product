"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./AddRole.css";
import {
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const SIDEBAR_ENTITIES = [
  "Manage Vendor",
  "Manage Customer",
  "Manage Product",
  "Stock Listing",
  "Sale",
  "Purchase",
  "Reporting",
  "Open Balance Sheet",
  "PnL Report",
  "Manage Expenses",
  "Manage Role",
];

const PERMISSIONS = [
  { key: "Edit", icon: FaEdit },
  { key: "View", icon: FaEye },
  { key: "Delete", icon: FaTrash },
];

export default function AddRole() {
  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedPermissions, setSelectedPermissions] = useState({});

  const dropdownRef = useRef(null);

  const togglePermission = (entity, permission) => {
    setSelectedPermissions((previous) => {
      const current = previous[entity] || [];

      const updated = current.includes(permission)
        ? current.filter((item) => item !== permission)
        : [...current, permission];

      const next = { ...previous };

      if (updated.length === 0) {
        delete next[entity];
      } else {
        next[entity] = updated;
      }

      return next;
    });
  };

  const removeEntity = (entity) => {
    setSelectedPermissions((previous) => {
      const next = { ...previous };
      delete next[entity];
      return next;
    });
  };

  const selectedAccess = Object.entries(selectedPermissions);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="add-role-page">

      {/* BREADCRUMB */}

      <div className="role-breadcrumb">
        Tyre Shop &gt;{" "}
        <Link href="/role" className="breadcrumb-link">
          Role Management
        </Link>{" "}
        &gt; Add New Role
      </div>

      {/* PAGE HEADER */}

      <div className="role-title-row">
        <h1>Add New Role</h1>
      </div>

      {/* USER INFORMATION */}

      <div className="role-information-card">

        <div className="role-card-heading">
          User Information
        </div>

        <div className="role-form">

          {/* FULL NAME */}

          <div className="role-field">
            <label>
              Full Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="eg. Usama Aslam"
            />
          </div>

          {/* EMAIL */}

          <div className="role-field">
            <label>
              Email Address <span>*</span>
            </label>

            <input
              type="email"
              placeholder="example@company.com"
            />
          </div>

          {/* PHONE */}

          <div className="role-field">
            <label>
              Phone Number <span>*</span>
            </label>

            <input
              type="text"
              placeholder="eg. +92 XXX XX XX XXX"
            />
          </div>

          {/* ROLE NAME */}

          <div className="role-field">
            <label>
              Role Name <span>*</span>
            </label>

            <input
              type="text"
              placeholder="Role Name"
            />
          </div>

          {/* ACCESS */}

          <div className="role-field role-access-field">

            <label>
              Access <span>*</span>
            </label>

            <div className="access-dropdown-wrapper" ref={dropdownRef}>

              <button
                type="button"
                className="access-select-button"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                -- Select Option --
              </button>

              {/* SELECTED ACCESS PILLS */}

              {selectedAccess.length > 0 && (
                <div className="selected-access">

                  {selectedAccess.map(
                    ([entity, permissions]) => (
                      <div
                        className="access-pill"
                        key={entity}
                      >

                        <span className="access-pill-name">
                          {entity}
                        </span>

                        {permissions.map(
                          (permission) => {
                            const IconComponent = PERMISSIONS.find(
                              (p) => p.key === permission
                            )?.icon;

                            return (
                              <span
                                className="permission-pill"
                                key={permission}
                              >
                                {IconComponent && <IconComponent className="permission-icon" />}
                              </span>
                            );
                          }
                        )}

                        <button
                          type="button"
                          className="access-remove"
                          onClick={() =>
                            removeEntity(entity)
                          }
                        >
                          ×
                        </button>

                      </div>
                    )
                  )}

                </div>
              )}

              {/* DROPDOWN */}

              {showDropdown && (
                <div className="access-dropdown-card">

                  <div className="access-dropdown-header">
                    Select Access
                  </div>

                  <div className="access-dropdown-body">

                    {/* HEADER ROW */}

                    <div className="access-dropdown-header-row">

                      <span className="access-dropdown-header-title">
                        Entity
                      </span>

                      <div className="access-dropdown-header-permissions">

                        <span>Edit</span>

                        <span>View</span>

                        <span>Delete</span>

                      </div>

                    </div>

                    {SIDEBAR_ENTITIES.map((entity) => (
                      <div
                        className="access-dropdown-row"
                        key={entity}
                      >

                        <span className="access-entity-name">
                          {entity}
                        </span>

                        <div className="access-checkboxes">

                          {PERMISSIONS.map(({ key, icon: IconComponent }) => (
                            <label
                              className="access-checkbox-label"
                              key={key}
                            >
                              <input
                                type="checkbox"
                                checked={
                                  selectedPermissions[entity]?.includes(key) || false
                                }
                                onChange={() =>
                                  togglePermission(entity, key)
                                }
                              />

                              <span className="access-checkbox-custom">
                                {selectedPermissions[entity]?.includes(key)}
                              </span>

                            </label>
                          ))}

                        </div>

                      </div>
                    ))}

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>
      </div>

      {/* BUTTON AREA */}

      <div className="role-action-card">

        <button
          type="button"
          className="role-cancel-btn"
        >
          Cancel
        </button>

        <button
          type="button"
          className="role-submit-btn"
        >
          Add Expense
        </button>

      </div>

    </div>
  );
}
