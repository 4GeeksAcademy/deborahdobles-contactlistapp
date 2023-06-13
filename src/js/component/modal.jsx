import React, { useState, useEffect } from 'react';

const AddContact = ({ contactId, onAddContact, onUpdateContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    if (contactId) {
      fetchContact(contactId);
    }
  }, [contactId]);

  const fetchContact = async (id) => {
    try {
      const response = await fetch(`/api/contacts/${id}`); // Replace with your actual API endpoint
      const data = await response.json();
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
      setAddress(data.address);
    } catch (error) {
      console.log('Error fetching contact:', error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input fields here

    const updatedContact = {
      name,
      email,
      phone,
      address,
    };

    if (contactId) {
      onUpdateContact(contactId, updatedContact);
    } else {
      onAddContact(updatedContact);
    }

    // Reset the form
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  };

  return (
   <div>
      <h2>{contactId ? 'Edit Contact' : 'Create a New Contact'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" value={address} onChange={handleAddressChange} />
        </div>
        <button type="submit">{contactId ? 'Update Contact' : 'Add Contact'}</button>
      </form>
    </div>
  );
};

export default AddContact;