import "./Contact.css";

function Contact() {

    const handleSubmit = (event) => {
        event.preventDefault();

        alert("Thank you! Your message has been submitted.");
    };

    return (
        <div className="contact-page">

            {/* Header */}
            <div className="contact-header">
                <p className="small-title">GET IN TOUCH</p>

                <h1>Contact Me</h1>

                <p>
                    Have a project, opportunity, or question?
                    Feel free to get in touch with me.
                </p>
            </div>


            {/* Contact Content */}
            <div className="contact-container">

                {/* Left Side */}
                <div className="contact-info">

                    <h2>Let's Connect</h2>

                    <p>
                        I am interested in Data Analytics, Business Intelligence
                        and technology opportunities. If you have an opportunity
                        or would like to discuss a project, feel free to contact me.
                    </p>


                    {/* Email */}
                    <div className="contact-item">

                        <div className="contact-icon">
                            ✉
                        </div>

                        <div>
                            <span>Email</span>
                            <strong>
                                nallanithinkumar6@gmail.com
                            </strong>
                        </div>

                    </div>


                    {/* Phone */}
                    <div className="contact-item">

                        <div className="contact-icon">
                            ☎
                        </div>

                        <div>
                            <span>Phone</span>
                            <strong>
                                +91 9347832511
                            </strong>
                        </div>

                    </div>


                    {/* Location */}
                    <div className="contact-item">

                        <div className="contact-icon">
                            📍
                        </div>

                        <div>
                            <span>Location</span>
                            <strong>
                                Hyderabad, India
                            </strong>
                        </div>

                    </div>


                    {/* Social Links */}
                    <div className="social-section">

                        <h3>Follow Me</h3>

                        <div className="social-links">

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>


                {/* Right Side - Form */}
                <div className="contact-form-container">

                    <h2>Send Me a Message</h2>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">

                            <label>Name</label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label>Email</label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label>Subject</label>

                            <input
                                type="text"
                                placeholder="Enter subject"
                                required
                            />

                        </div>


                        <div className="form-group">

                            <label>Message</label>

                            <textarea
                                rows="6"
                                placeholder="Write your message..."
                                required
                            ></textarea>

                        </div>


                        <button type="submit">
                            Send Message →
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default Contact;
