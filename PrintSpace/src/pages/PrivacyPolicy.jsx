import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      className="max-w-4xl mx-auto mb-5 px-4 mt-[20vh] text-white"
      initial={{ y: 100, opacity: 0 }} // Initial state, off-screen and invisible
      animate={{ y: 0, opacity: 1 }} // Animation when component is in viewport
      transition={{ type: "spring", duration: 0.8, delay: 0.2 }} // Animation properties
    >
      <h1 className="mt-5 text-4xl font-bold text-center">Privacy Policy</h1>
      <p className="text-center text-slate-300 my-3">
        Effective Date: 02/04/2024
      </p>

      <p className="mb-4 text-center">
        This Privacy Policy outlines how Techspace collects, uses, discloses,
        and protects the personal information of users who access our platform
        and services related to connecting with 3D makerspaces.
      </p>

      <h3 className="mt-5 privacyHeader">Information We Collect</h3>
      <ul>
        <li>
          Personal Information: We may collect and store personal information,
          including but not limited to names, email addresses, and location
          data, to facilitate the connection process with makerspaces.
        </li>
        <li>
          User Content: Information shared voluntarily by users within the
          platform, such as project descriptions, preferences, and other
          relevant details.
        </li>
      </ul>

      <h3 className="privacyHeader">How We Use Your Information:</h3>
      <ul>
        <li>
          Facilitating Connections: Personal information is used to connect
          users with makerspaces based on their preferences and project
          requirements.
        </li>
      </ul>

      <h3 className="privacyHeader">Information Sharing:</h3>
      <ul>
        <li>
          Makerspaces: Necessary information may be shared with makerspaces to
          facilitate connections and collaborations.
        </li>
        <li>
          Legal Compliance: We may disclose information if required by law or to
          protect our rights and users’ safety.
        </li>
      </ul>

      <h3 className="privacyHeader">Data Security:</h3>
      <p>
        We implement industry-standard security measures to protect your
        personal information. However, no method of transmission or storage is
        entirely secure, and we cannot guarantee absolute security.
      </p>

      <h3 className="privacyHeader">Your Choices:</h3>
      <ul>
        <li>
          Account Information: Users can review, update, or delete their account
          information by contacting us. There is also a way to do it in
          Settings.
        </li>
      </ul>

      <h3 className="privacyHeader">Cookies and Tracking:</h3>
      <p className="text-center">
        We use cookies and local storage to enhance the user experience and
        essential features.
      </p>

      <h3 className="privacyHeader">Children’s Privacy:</h3>
      <p className="text-center">
        Our services are not directed at individuals under the age of 13. We do
        not knowingly collect personal information from children.
      </p>

      <h3 className="privacyHeader">Changes to Privacy Policy:</h3>
      <p className="text-center">
        We reserve the right to update this Privacy Policy. Users will be
        notified of significant changes.
      </p>

      <h3 className="privacyHeader">Contact Us:</h3>
      <p className="text-center">
        If you have any questions or concerns about this Privacy Policy, please
        contact us on our socials.
      </p>

      <p className="text-center">
        By using our platform, you agree to the terms outlined in this Privacy
        Policy.
      </p>

      <h3 className="privacyHeader">Disclaimer:</h3>
      <p className="text-center">
        While we strive to provide accurate and up-to-date information on our
        website, including events, we cannot guarantee the authenticity of all
        information. Users are advised to verify the details of events and other
        content independently.
      </p>
    </motion.div>
  );
};

export default PrivacyPolicy;
