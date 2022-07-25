import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/5ba62f30-0c53-11ed-9bdb-53c785fa3343";

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <div className='flex-col items-center justify-center'>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">
                    <p>I'll be in touch soon.</p>
                </div>
            </div>
        );
    }

    return (
        <form
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
        >
            <div className="mb-3 pt-0">
                <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-2 border-slate-200 focus:outline-none focus:ring w-full"
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-2 border-slate-200 focus:outline-none focus:ring w-full"
                    required
                />
            </div>
            <div className="mb-3 pt-0">
                <textarea
                    placeholder="Your message"
                    name="message"
                    className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-2 border-slate-200 focus:outline-none focus:ring w-full"
                    required
                />
            </div>
            <div className="mb-3 pt-0 flex justify-center">
                <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                >
                    Send a message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;