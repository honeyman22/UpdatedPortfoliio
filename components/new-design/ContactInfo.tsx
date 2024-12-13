import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import SocialLinks from "./SocialLink";
export default function ContactInfo() {
  const contactDetails = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: (
        <a
          href="mailto: nissan5301@gmail.com"
          className="text-white hover:text-primary-500 transition-colors"
        >
          nissan5301@gmail.com
        </a>
      ),
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: (
        <a
          href="tel:+977 9825275948"
          className="text-white hover:text-primary-500 transition-colors"
        >
          +977 9825275948
        </a>
      ),
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Available for Remote Work",
    },
  ];

  return (
    <div>
      <div className="bg-neutral-800/50 rounded-xl border border-neutral-700 p-6">
        <h3 className="text-xl font-bold text-white mb-6">
          Contact Information
        </h3>
        <div className="space-y-4">
          {contactDetails.map((item, index) => (
            <div key={index + 6} className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-500/10 text-primary-500 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <div>
                <p className="text-neutral-400">{item.title}</p>
                <p className="text-white">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-700">
          <h4 className="text-lg font-bold text-white mb-4">Connect With Me</h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
