import React, { useState } from 'react';

const Form = () => {
    const [data, setData] = useState({ name: '', description: '', category: 'Convenience', quantity: '', price: '' });
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the form from submitting by default
    
        const { name, description, category, quantity, price } = data;
    
        if (!name || !description || !category || !quantity || !price) {
            // Show an alert if any field is empty
            alert('Please fill in all the fields');
        } else {
            // Format the price to two decimal places
            const formattedPrice = `$${parseFloat(price).toFixed(2)}`;

            // Display data in the console
            console.log('Name:', name);
            console.log('Description:', description);
            console.log('Category:', category);
            console.log('Quantity:', quantity);
            console.log('Price:', price);
            // Display data in the alert
            alert(`Name: ${name}\nDescription: ${description}\nCategory: ${category}\nQuantity: ${quantity}\nPrice: ${formattedPrice}`);
        }
    };

    const handleCancel = () => {
        // Clear all form fields
        setData({ name: '', description: '', category: '', quantity: '', price: '' });
    };
    return (
        <form>
            <h1>New <span>Product</span></h1>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='Product Name' />
            <label htmlFor="categories">Categories:</label>
            <select name="category" id="category" onChange={handleChange} value={data.category}>
                <option value="Convenience">Convenience Goods</option>
                <option value="Shopping">Shopping Goods</option>
                <option value="Specialty">Specialty Products</option>
                <option value="Unsought">Unsought Goods</option>
            </select>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" name="quantity" id="" onChange={handleChange} value={data.quantity} placeholder='Quantity' />
            <label htmlFor="price">Price:</label>
            <input type="number" name="price" id="" onChange={handleChange} value={data.price} placeholder='Price' />
            <label htmlFor="description">Description:</label>
            <textarea type="text" name="description" id="" cols="30" rows="10" onChange={handleChange} value={data.description} placeholder='----Product Description----' />
            <div className="form-buttons">
                <button type='submit' onClick={handleSubmit}>SUBMIT</button>
                <button type='button' onClick={handleCancel}>CANCEL</button>
            </div>
        </form>
    );
};

export default Form;
