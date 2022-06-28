import { contactData } from "@/data/contacts";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";
import Logo from "./Logo";
const classes = `pr-4 py-2 leading-5 font-medium`;
const icons = `text-2xl`;

function Footer() {
  return (
    <footer className="border-t border-gray-400 px-4 rounded-md">
      <div className="max-w-4xl mx-auto">
        <div className="my-12">
          <Logo />
          <small className="capitalize my-2">
            community safety through citizen awareness
          </small>
          <nav className="flex justify-items-end font-mono">
            <a href="/" className={classes}>
              News
            </a>
            <a href="/codes" className={classes}>
              Codes
            </a>

            <a href="/contact" className={classes}>
              Contact
            </a>
            <a href="/privacy" className={classes}>
              Privacy
            </a>
          </nav>
          <div className="flex md:space-x-7 space-x-4 mt-6">
            <div className="  h-8">
              <a href="https://facebook.com/avscannernews">
                <FaFacebook className={icons} />
              </a>
            </div>
            <div className="  h-8">
              <a href="https://twitter.com/avscannernews">
                <FaTwitter className={icons} />
              </a>
            </div>
            <div className="  h-8">
              <a href="https://instagram.com/avscannernews">
                <FaInstagram className={icons} />
              </a>
            </div>
          </div>
          <div className="pt-4">
            <a href="mailto:admin@avscannernews.com" className="flex space-x-2">
              <FaRegEnvelope className={icons} />
              <h2>admin@avscannernews.com</h2>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {contactData.map((contact) => (
            <a href="tel:{contact.linkedPhone}">
              <h2 className="font-bold ">{contact.name}</h2>
              <p className=" ">{contact.phone}</p>
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 pb-20 md:pb-0">
        <div className="md:mt-16 mt-8 border-t border-gray-400 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm   mb-2 md:text-lg">
              {new Date().getFullYear()} AV Scanner News
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
