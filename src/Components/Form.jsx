import React, { useState } from 'react';

function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationality: '',
    isResident: false,
    idNumber: '',
    dob: '',
    gender: 'male', // Set a default value
    additionalQuestion: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

  const apiUrl = 'http://127.0.0.1:4010/api/755.4463297752901/programs/molestiae/application-form';
  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(formData),
    });

    if (response.ok) {

      // Handle a successful response, e.g., show a success message to the user
      console.log('Form submitted successfully',response);
    } else {
      // Handle errors, e.g., show an error message to the user
      console.error('Form submission failed');
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('An error occurred:', error);
  }
  };
  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="checkbox"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nationality:</label>
          <input
            type="checkbox"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Are you a current resident?</label>
          <input
            type="checkbox"
            name="isResident"
            checked={formData.isResident}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>ID Number:</label>
          <input
            type="checkbox"
            name="idNumber"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="checkbox"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="checkbox"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Additional Question:</label>
          <textarea
            name="additionalQuestion"
            value={formData.additionalQuestion}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormComponent;
