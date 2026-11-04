import React from "react";

const contactDetails = [
  {
    title: "LinkedIn",
    value: "linkedin.com/in/gao-yiping",
    href: "https://www.linkedin.com/in/gao-yiping/",
  },
  {
    title: "GitHub",
    value: "github.com/pinguin247",
    href: "https://github.com/pinguin247",
  },
  {
    title: "Email",
    value: "gaoyiping1012@gmail.com",
    href: "mailto:gaoyiping1012@gmail.com",
  },
  {
    title: "Location",
    value: "Singapore",
    href: "#",
  },
];

function Contact() {
  return (
    <div className="contact-page">
      <div className="page-header">
        <span className="eyebrow">Contact</span>
        <h1 className="section-heading">Let’s connect</h1>
      </div>

      <div className="contact-grid">
        {contactDetails.map((contact) => (
          <div className="contact-card" key={contact.title}>
            <h3>{contact.title}</h3>
            {contact.href && contact.href !== "#" ? (
              <a href={contact.href} target="_blank" rel="noreferrer">
                <p>{contact.value}</p>
              </a>
            ) : (
              <p>{contact.value}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
