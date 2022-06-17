import { NextPage } from "next";
import { contactData } from "@/data/contacts";
import { NextSeo } from "next-seo";

const ContactPage: NextPage = () => {
  const contactCard = `
rounded-lg border shadow border-gray-200 p-4
  `;
  return (
    <>
      <NextSeo
        title={`${process.env.NEXT_PUBLIC_SITE_TITLE} -  Contact`}
        description="AV Scanner News Contact"
      />
      <div className="max-w-4xl mx-auto">
        <div className="my-8">
          <h1 className="text-center ">
            We are not law enforcement,{" "}
            <em>
              if you have an emergency, call 911 or use the contacts below:
            </em>
          </h1>
        </div>
        <div className="grid grid-cols-2 md:gap-4 gap-3">
          {contactData.map((contact) => (
            <a href="tel:{contact.linkedPhone}" className={contactCard}>
              <h2 className="font-bold ">{contact.name}</h2>
              <p className="">{contact.phone}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
