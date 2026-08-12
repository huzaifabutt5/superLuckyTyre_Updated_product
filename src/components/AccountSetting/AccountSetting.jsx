"use client";

import { useState } from "react";
import {
  FaPlus,
  FaCamera,
  FaTimes,
} from "react-icons/fa";

import "./AccountSetting.css";

export default function AccountSetting() {
  /* =========================
     MAIN ACCOUNT STATES
  ========================= */

  const [firstName, setFirstName] = useState("Usama");
  const [lastName, setLastName] = useState("Aslam");
  const [phone, setPhone] = useState("0320 7852636");
  const [email, setEmail] = useState("theeusama@gmail.com");

  const [profileImage, setProfileImage] = useState(
    "/profile.png"
  );

  /* =========================
     POPUP STATES

     null       = no popup
     password   = password popup
     email      = change email popup
     newEmail   = third popup
  ========================= */

  const [activePopup, setActivePopup] = useState(null);

  /* =========================
     PASSWORD STATES
  ========================= */

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /* =========================
     EMAIL STATES
  ========================= */

  const [newEmail, setNewEmail] = useState("");
  const [emailOtp, setEmailOtp] = useState("");

  /* =========================
     THIRD EMAIL POPUP STATES
  ========================= */

  const [newEmailOtp, setNewEmailOtp] = useState("");

  /* =========================
     IMAGE UPLOAD
  ========================= */

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      alert("Image must be less than 2MB");
      return;
    }

    const allowedTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, JPEG and PNG images are supported");
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setProfileImage(imageUrl);
  };

  /* =========================
     REMOVE IMAGE
  ========================= */

  const handleRemoveImage = () => {
    setProfileImage("");
  };

  /* =========================
     SAVE ACCOUNT
  ========================= */

  const handleSave = () => {
    alert("Account settings saved successfully");
  };

  /* =========================
     UPDATE PASSWORD
  ========================= */

  const handleUpdatePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all password fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    alert("Password updated successfully");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    setActivePopup(null);
  };

  /* =========================
     GET OTP
  ========================= */

  const handleGetOtp = () => {
    if (!email) {
      alert("Please enter email address");
      return;
    }

    /*
      First Get OTP:
      email popup -> third popup
    */

    setActivePopup("newEmail");
  };

  /* =========================
     UPDATE EMAIL
  ========================= */

  const handleUpdateEmail = () => {
    if (!newEmail || !emailOtp || !newEmailOtp) {
      alert("Please fill all email fields");
      return;
    }

    setEmail(newEmail);

    alert("Email address updated successfully");

    setNewEmail("");
    setEmailOtp("");
    setNewEmailOtp("");

    setActivePopup(null);
  };

  return (
    <main className="account-page">

      {/* ==========================================
          BREADCRUMB
      ========================================== */}

      <div className="account-breadcrumb">
        <span>Tyre Shop</span>
        <span>&gt;</span>
        <strong>Account Setting</strong>
      </div>

      {/* ==========================================
          PAGE TITLE
      ========================================== */}

      <h1 className="account-title">
        Account Setting
      </h1>

      {/* ==========================================
          MAIN ACCOUNT CARD
      ========================================== */}

      <section className="account-card">

        {/* ========================================
            PROFILE SECTION
        ======================================== */}

        <div className="profile-section">

          <div className="profile-image-wrapper">

            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="profile-image"
              />
            ) : (
              <div className="profile-placeholder">
                <FaCamera />
              </div>
            )}

          </div>

          <div className="profile-content">

            <h3>
              Profile Picture
            </h3>

            <div className="profile-buttons">

              <label
                htmlFor="profileUpload"
                className="upload-btn"
              >
                <FaPlus />
                Upload Image
              </label>

              <input
                id="profileUpload"
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleImageUpload}
                hidden
              />

              <button
                type="button"
                className="remove-btn"
                onClick={handleRemoveImage}
              >
                Remove
              </button>

            </div>

            <p className="profile-note">
              we only support jpeg, png image less then 2MB
            </p>

          </div>

        </div>

        {/* ========================================
            DIVIDER
        ======================================== */}

        <div className="account-divider"></div>

        {/* ========================================
            FORM
        ======================================== */}

        <div className="account-form">

          {/* FIRST NAME */}

          <div className="form-group">

            <label>
              First Name
            </label>

            <input
              type="text"
              value={firstName}
              onChange={(e) =>
                setFirstName(e.target.value)
              }
            />

          </div>

          {/* LAST NAME */}

          <div className="form-group">

            <label>
              Last Name
            </label>

            <input
              type="text"
              value={lastName}
              onChange={(e) =>
                setLastName(e.target.value)
              }
            />

          </div>

          {/* PHONE */}

          <div className="form-group">

            <label>
              Phone Number
            </label>

            <input
              type="text"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />

          </div>

          {/* EMAIL */}

          <div className="form-group email-group">

            <label>
              Email Address
            </label>

            <div className="email-input-row">

              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

              <button
                type="button"
                className="change-email-btn"
                onClick={() =>
                  setActivePopup("email")
                }
              >
                Change Email
              </button>

            </div>

            <span className="input-note">
              Used to login your account
            </span>

          </div>

        </div>

        {/* ========================================
            CHANGE PASSWORD SECTION
        ======================================== */}

        <div className="account-divider"></div>

        <div className="change-password-section">

          <div>

            <h3>
              Change Password
            </h3>

            <p>
              Use your old password to change it.
            </p>

          </div>

          <button
            type="button"
            className="change-password-btn"
            onClick={() =>
              setActivePopup("password")
            }
          >
            Change Password
          </button>

        </div>

      </section>

      {/* ==========================================
          BOTTOM SAVE BAR
      ========================================== */}

      <section className="account-save-bar">

        <button
          type="button"
          className="cancel-main-btn"
        >
          Cancel
        </button>

        <button
          type="button"
          className="save-main-btn"
          onClick={handleSave}
        >
          Save
        </button>

      </section>


      {/* =====================================================
          POPUP OVERLAY
      ===================================================== */}

      {activePopup && (
        <div className="popup-overlay">

          {/* ================================================
              POPUP 1 - CHANGE PASSWORD
          ================================================ */}

          {activePopup === "password" && (

            <div className="popup-box password-popup">

              <div className="popup-header">

                <h2>
                  Change Password
                </h2>

                <button
                  type="button"
                  onClick={() =>
                    setActivePopup(null)
                  }
                >
                  <FaTimes />
                </button>

              </div>

              <div className="popup-body">

                {/* CURRENT PASSWORD */}

                <div className="popup-field">

                  <label>
                    Current Password <span>*</span>
                  </label>

                  <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) =>
                      setCurrentPassword(
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* NEW PASSWORD */}

                <div className="popup-field">

                  <label>
                    New Password <span>*</span>
                  </label>

                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) =>
                      setNewPassword(
                        e.target.value
                      )
                    }
                  />

                </div>

                {/* CONFIRM PASSWORD */}

                <div className="popup-field">

                  <label>
                    Confirm Password <span>*</span>
                  </label>

                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(
                        e.target.value
                      )
                    }
                  />

                </div>

              </div>

              <div className="popup-footer">

                <button
                  type="button"
                  className="popup-cancel-btn"
                  onClick={() =>
                    setActivePopup(null)
                  }
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="popup-primary-btn"
                  onClick={handleUpdatePassword}
                >
                  Update Password
                </button>

              </div>

            </div>
          )}


          {/* ================================================
              POPUP 2 - CHANGE EMAIL
          ================================================ */}

          {activePopup === "email" && (

            <div className="popup-box email-popup">

              <div className="popup-header">

                <h2>
                  Change Email Address
                </h2>

                <button
                  type="button"
                  onClick={() =>
                    setActivePopup(null)
                  }
                >
                  <FaTimes />
                </button>

              </div>

              <div className="popup-body">

                {/* EMAIL ADDRESS */}

                <div className="popup-field">

                  <label>
                    Email Address
                  </label>

                  <div className="otp-input-row">

                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        setEmail(e.target.value)
                      }
                    />

                    <button
                      type="button"
                      className="get-otp-btn"
                      onClick={handleGetOtp}
                    >
                      Get OTP
                    </button>

                  </div>

                </div>

                {/* VERIFY OTP */}

                <div className="popup-field">

                  <label>
                    Verify OTP
                  </label>

                  <input
                    type="text"
                    placeholder="XXX-XXX"
                    value={emailOtp}
                    onChange={(e) =>
                      setEmailOtp(e.target.value)
                    }
                  />

                </div>

              </div>

              <div className="popup-footer">

                <button
                  type="button"
                  className="popup-cancel-btn"
                  onClick={() =>
                    setActivePopup(null)
                  }
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="popup-disabled-btn"
                >
                  Continue
                </button>

              </div>

            </div>
          )}


          {/* ================================================
              POPUP 3 - NEW EMAIL
          ================================================ */}

          {activePopup === "newEmail" && (

            <div className="popup-box new-email-popup">

              <div className="popup-header">

                <h2>
                  Change Email Address
                </h2>

                <button
                  type="button"
                  onClick={() =>
                    setActivePopup(null)
                  }
                >
                  <FaTimes />
                </button>

              </div>

              <div className="popup-body">

                {/* OLD EMAIL */}

                <div className="popup-field">

                  <label>
                    Email Address
                  </label>

                  <div className="otp-input-row">

                    <input
                      type="email"
                      value={email}
                      readOnly
                    />

                    <button
                      type="button"
                      className="get-otp-btn"
                    >
                      Get OTP
                    </button>

                  </div>

                </div>

                {/* OLD EMAIL OTP */}

                <div className="popup-field">

                  <label>
                    Verify OTP
                  </label>

                  <input
                    type="text"
                    placeholder="XXX-XXX"
                    value={emailOtp}
                    onChange={(e) =>
                      setEmailOtp(e.target.value)
                    }
                  />

                </div>

                {/* NEW EMAIL */}

                <div className="popup-field">

                  <label>
                    New Email Address
                  </label>

                  <div className="otp-input-row">

                    <input
                      type="email"
                      placeholder="New Email Address"
                      value={newEmail}
                      onChange={(e) =>
                        setNewEmail(e.target.value)
                      }
                    />

                    <button
                      type="button"
                      className="get-otp-btn"
                    >
                      Get OTP
                    </button>

                  </div>

                </div>

                {/* NEW EMAIL OTP */}

                <div className="popup-field">

                  <label>
                    Verify OTP
                  </label>

                  <input
                    type="text"
                    placeholder="XXX-XXX"
                    value={newEmailOtp}
                    onChange={(e) =>
                      setNewEmailOtp(e.target.value)
                    }
                  />

                </div>

              </div>

              <div className="popup-footer">

                <button
                  type="button"
                  className="popup-cancel-btn"
                  onClick={() =>
                    setActivePopup(null)
                  }
                >
                  Cancel
                </button>

                <button
                  type="button"
                  className="popup-primary-btn"
                  onClick={handleUpdateEmail}
                  
                >
                  Update Email Address
                </button>

              </div>

            </div>
          )}

        </div>
      )}

    </main>
  );
}