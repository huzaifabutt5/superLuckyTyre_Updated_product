"use client";
import Link from "next/link";
import "./ProductListing.css";
import { useState } from "react";
import DeletedProduct from "./DeletedProduct/DeletedProduct";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "General",
    pattern: "Euro Tycoon",
    sizeCode: "195/65 R 15",
    rim: '15"',
  },
  {
    id: 2,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "General",
    pattern: "BG Luxo",
    sizeCode: "185/70 R 14",
    rim: '14"',
  },
  {
    id: 3,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "Yokohama",
    pattern: "BlueEarth",
    sizeCode: "205/55 R 16",
    rim: '16"',
  },
  {
    id: 4,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "Dunlop",
    pattern: "Direzza",
    sizeCode: "195/50 R 15",
    rim: '15"',
  },
  {
    id: 5,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "Bridgestone",
    pattern: "Ecopia",
    sizeCode: "215/60 R 16",
    rim: '16"',
  },
  {
    id: 6,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "Michelin",
    pattern: "Energy XM2",
    sizeCode: "185/65 R 15",
    rim: '15"',
  },
  {
    id: 7,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "Service",
    pattern: "Diamond",
    sizeCode: "175/70 R 13",
    rim: '13"',
  },
  {
    id: 8,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "Continental",
    pattern: "ComfortContact",
    sizeCode: "205/65 R 15",
    rim: '15"',
  },
  {
    id: 9,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "Kumho",
    pattern: "Solus",
    sizeCode: "195/60 R 15",
    rim: '15"',
  },
  {
    id: 10,
    name: "General Euro Tycoon",
    size: "195/65 R 15",
    brand: "Pirelli",
    pattern: "Cinturato",
    sizeCode: "225/45 R 17",
    rim: '17"',
  },
];

export default function ProductListing() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <div className="product-page">

      {/* ================= HEADER ================= */}

      <div className="product-header">

        <div>
          <div className="product-breadcrumb">
            Tyre Shop &gt;{" "}
            <Link href="/product" style={{ textDecoration: "none", color: "inherit" }}>
              Product Management
            </Link>{" "}
            &gt; Product Listing
          </div>

          <h1>Product Listing</h1>
        </div>

        {/* <button className="add-product-btn">
          <FaPlus />
          Add New Product
        </button> */}
        <Link
  href="/product/add"
  className="add-product-btn"
>
  <FaPlus />
  Add New Product
</Link>

      </div>


      {/* ================= PRODUCT CARD ================= */}

      <div className="product-card">

        {/* ================= TOOLBAR ================= */}

        <div className="product-toolbar">

          <div className="entries-section">

            <select defaultValue="10">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>

            <span>entries per page</span>

          </div>


          <div className="search-section">

            <label>Search:</label>

            <input
              type="text"
              placeholder="Search Product"
            />

          </div>

        </div>


        {/* ================= TABLE ================= */}

        <div className="product-table-wrapper">

          <table className="product-table">

            <thead>

              <tr>
                <th>SL</th>
                <th>Complete Product Name</th>
                <th>Brand Name</th>
                <th>Pattern/Model</th>
                <th>Full Size Code</th>
                <th>Rim Diameter</th>
                <th>Actions</th>
              </tr>

            </thead>


            <tbody>

              {products.map((product) => (

                <tr key={product.id}>

                  <td>{product.id}</td>

                  <td>
                    <div className="product-name">
                      {product.name}
                    </div>

                    <div className="product-size">
                      {product.size}
                    </div>
                  </td>

                  <td>{product.brand}</td>

                  <td>{product.pattern}</td>

                  <td>{product.sizeCode}</td>

                  <td>{product.rim}</td>

                  <td>

                    <div className="action-buttons">

                      <button className="view-btn">
                        <FaEye />
                      </button>

                      {/* <button className="edit-btn">
                        <FaEdit />
                      </button> */}
                      <Link
  href="/product/edit"
  className="edit-btn"
>
  <FaEdit />
</Link>

                      {/* <button className="delete-btn">
                        <FaTrash />
                      </button> */}
                     <button
  type="button"
  className="delete-btn"
  onClick={() => setShowDeleteModal(true)}
>
  <FaTrash />
</button>



                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* ================= PAGINATION ================= */}

        <div className="product-pagination">

          <span>
            Showing 1 to 10 of 20 entries
          </span>

          <div className="pagination-buttons">

            <button>«</button>

            <button>‹</button>

            <button className="active">1</button>

            <button>2</button>

            <button>›</button>

            <button>»</button>
  
 </div>

        </div>

      </div>
{showDeleteModal && (
  <DeletedProduct
    onClose={() => setShowDeleteModal(false)}
  />
)}
    </div>
  );
}