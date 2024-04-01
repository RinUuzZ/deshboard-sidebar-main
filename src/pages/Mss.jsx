import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './mssStyles.css'; 

const Mss = () => {
  return (
    <div className="container-mss">
      <div className="item">
        <select id="group" className="dropdown">
          <option value="group1">Group</option>
          <option value="group2">Filter</option>
          <option value="group3">Making</option>
          <option value="group3">Packing</option>
          <option value="group3">Pricing</option>
        </select>
      </div>
      <div className="item">
        <select id="material" className="dropdown">
          <option value="material1">Material</option>
          <option value="material2">Material 1</option>
          <option value="material3">Material 2</option>
          <option value="material3">Material 3</option>
          <option value="material3">Material 4</option>
        </select>
      </div>
      <div className="item">
        <select id="category" className="dropdown">
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
      <div className="item">
        <select id="subCategory" className="dropdown">
          <option value="subCategory1">Sub Category 1</option>
          <option value="subCategory2">Sub Category 2</option>
          <option value="subCategory3">Sub Category 3</option>
        </select>
      </div>
      <div className="item">
    <select id="country" className="dropdown">
    <option value="Afghanistan">Country</option>
        <option value="Afghanistan">America</option>
        <option value="Bahrain">Bahrain</option>
        <option value="Canada">Canada</option>
        <option value="Ecuador">Ecuador</option>
        <option value="Finland">Finland</option>
        <option value="India">India</option>
        <option value="Russia">Russia</option>
        <option value="Spain">Spain</option>
    </select>
</div>

<div className="item">
  <select id="state" className="dropdown">
    <option value="">Select a state</option>

      <option value="California">California</option>
      <option value="New York">New York</option>
      <option value="Florida">Florida</option>
      <option value="Ontario">Ontario</option>
      <option value="Quebec">Quebec</option>
      <option value="Azuay">Azuay </option>
      <option value="Manabí">Manabí</option>
      <option value="Maharashtra">Kerala</option>
      <option value="Uttar Pradesh">Karnadaka</option>
      <option value="Bihar">Tamilnadu</option>
      <option value="West Bengal">Kashmir</option>
      <option value="Madhya Pradesh">Delhi</option>
  </select>
</div>


      <div className="item">
        <select id="location" className="dropdown">
        <option value="location1">Location</option>
          <option value="location1">Kochi</option>
          <option value="location2">Malappuram</option>
          <option value="location3">Manjeri</option>
          <option value="location3">Karnadaka</option>
          <option value="location3">New York</option>
          <option value="location3">Tamilnadu</option>
          <option value="location3">Delhi</option>
          <option value="location3">Azuay</option>
          <option value="location3">Florida</option>
        </select>
      </div>


      <div className="search-icon">
        <FaSearch style={{cursor:'pointer'}}/>
      </div>
    </div>
  );
};

export default Mss;
