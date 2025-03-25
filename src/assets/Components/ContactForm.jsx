// Form.jsx
import React, { useState } from 'react';

const ContactForm = () => {
    const [user, setUser] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', user);
        
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="pt-30 pb-45 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="container mx-auto">
                <div className='grid grid-cols-1 lg:grid-cols-[1fr,600px] gap-8'>
                    <div className="text-start py-12">
                        <h2 className="text-md font-bold text-gray-900 mb-4">Don't be a stranger!</h2>
                        <p className="text-4xl text-black font-bold mb-6">You tell us. We listen.</p>
                        <p className="text-gray-600 text-xl pr-0 lg:pr-30">
                            Cras elementum finibus lacus nec lacinia. Quisque non convallis nisl, eu condimentum sem. Proin dignissim libero lacus, ut eleifend magna vehicula et. Nam mattis est sed tellus.
                        </p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="NAME"
                                    value={user.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="SUBJECT"
                                    value={user.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="EMAIL"
                                value={user.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                placeholder="MESSAGE"
                                value={user.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <div className="pt-2">
                            <button
                                type="submit"
                                className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
                            >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;