import React from 'react';
import './Product.css'; 

const Product = () => {
    return (
        <div>
            <table className="product-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Group</th>
                        <th>Material</th>
                        <th>Category</th>
                        <th>Subcategory</th>
                        <th>Country</th>
                        <th>State</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Product 1</td>
                        <td>cigarette</td>
                        <td>making</td>
                        <td>TP</td>
                        <td>TP_Color</td>
                        <td>White</td>
                        <td>India</td>
                        <td>Kerala</td>
                        <td>Kochi</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Product;
