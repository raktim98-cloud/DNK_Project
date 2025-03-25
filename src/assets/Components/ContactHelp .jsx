// ContactHelp.jsx
import React from 'react';
import { Link } from 'react-router';

const ContactHelp = () => {
  const contactItems = [
    {
      title: "Sales",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      contact: "1800 123 4567"
    },
    {
      title: "Complaints",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      contact: "1900 223 8899"
    },
    {
      title: "Returns",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      contact: "returns@mail.com"
    },
    {
      title: "Marketing",
      description: "Vestibulum ante ipsum primis in faucibus orci luctus.",
      contact: "1700 444 5578"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center py-15">
          <h2 className="text-xl font-bold text-gray-900 py-4">Have any queries?</h2>
          <p className="text-4xl text-gray-600">We're here to help.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="mt-4">
                {item.contact.includes('@') ? (
                  <Link to={`mailto:${item.contact}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    {item.contact}
                  </Link>
                ) : (
                  <Link to={`tel:${item.contact.replace(/\s/g, '')}`} className="text-blue-600 hover:text-blue-800 font-medium">
                    {item.contact}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactHelp;