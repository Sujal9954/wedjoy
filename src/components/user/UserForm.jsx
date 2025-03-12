import React, { useState } from "react";

export const UserForm = () => {
  const [formData, setFormData] = useState({
    yourName: "",
    partnerName:"",
    email: "",
    phone: "",
    weddingDate:"",
    location:"",
    guests: "1",
    meal: "vegetarian",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your RSVP! Your details have been recorded.");
    console.log("Form Data:", formData);
    setFormData({
      yourName: "",
      partnerName:"",
      email: "",
      phone: "",
      weddingDate:"",
      location:"",
      guests: "1",
      meal: "vegetarian",
      message: "",
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={{fontFamily:"Great Vibes"}}>Charmingly Yours - Wedding Form</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
      <div> <label> Your Full Name:</label></div>
        <input type="text" name="yourName" value={formData.yourName} onChange={handleChange} required />
        <br /><br />

       <div><label> Your Partner's Full Name:</label></div>
        <input type="text" name="partnerName" value={formData.partnerName} onChange={handleChange} required />
        <br /><br />

       <div> <label>Email Address:</label></div>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        <br /><br />

        <div><label>Phone Number:</label></div>
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        <br /><br />

        <div><label>Location:</label></div>
        <input type="location" name="" value={formData.phone} onChange={handleChange} required />
        <br /><br />

        <div><label>Wedding Date:</label></div>
        <input type="date" name="Wedding Date" value={formData.weddingDate} onChange={handleChange} disabled={formData.noDatePicked} /><br />
        <label>
            <input type="checkbox" name="noDatePicked" checked={formData.noDatePicked} onChange={handleChange}  />We haven't picked a date yet
        </label>
        <br /><br />

    

       <div> <label>Number of Guests:</label></div>
        <input type="number" name="guests" value={formData.guests} min="1" onChange={handleChange} required />
        <br /><br />

       <div> <label>Meal Preference:</label></div>
        <select name="meal" value={formData.meal} onChange={handleChange}>
          <option value="vegetarian">Vegetarian</option>
          <option value="non-vegetarian">Non-Vegetarian</option>
          <option value="vegan">Vegan</option>
        </select>
        <br /><br />

        <div><label>Special Message for the Couple:</label></div>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="3"></textarea>
         <br /><br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};


const styles = {
 
  container: {
    textAlign: "center",
    padding: "20px",
  },
  form: {
    background: "#fff",
    maxWidth: "400px",
    margin: "auto",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
  },
  button: {
    backgroundColor: "#ff66b2",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    marginTop: "15px",
    cursor: "pointer",
  },
};

export default UserForm;
