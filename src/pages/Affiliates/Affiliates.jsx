import React, { useState } from "react";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import { Accordion } from "../../components";
import { FAQ_AFFILIATES } from "../../utils/mock";
import SuccessModal from "../../components/macros/SuccessModal";

const Affiliates = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [websiteSocialMedia, setWebsiteSocialMedia] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setCompanyName("");
    setContactName("");
    setEmail("");
    setPhone("");
    setWebsiteSocialMedia("");
    setMessage("");
  };

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-24 py-8 text-secondary">
      <div className="marginBody grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="heading1-primary">Join our Program!</h2>
          <p className="paragraph2 mb-8 mt-4">We’d love to work with you.</p>
          <p className="paragraph1">
            Do you cater to business owners that need funding solutions? Feel
            free to send us your traffic, you’ll be able to track the process
            directly, and get paid for every referral you send us!
          </p>
          <div className="mt-16">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-8">
                <div>
                  <BsFillTelephoneFill className="text-primary" size={48} />
                </div>
                <div>
                  <h1 className="paragraph2">Call Us</h1>
                  <p className="text-gray text-sm">404-920-4946</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <MdEmail className="text-primary" size={48} />
                </div>
                <div>
                  <h1 className="paragraph2">Email Us</h1>
                  <p className="text-gray text-sm">info@sidwellcapitalgroup.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <FaRegBuilding className="text-primary" size={48} />
                </div>
                <div>
                  <h1 className="paragraph2">Address</h1>
                  <p className="text-gray text-sm">
                    55 Water St, New York, NY 10038
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormLayout>
          <Input
            title="Company Name"
            required
            colSpan={2}
            twoInputInOneLine
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <Input
            title="Contact Name"
            required
            colSpan={2}
            twoInputInOneLine
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
          />
          <Input
            title="Email"
            required
            colSpan={2}
            placeholder={"mail@me.com"}
            twoInputInOneLine
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Phone"
            required
            colSpan={2}
            placeholder={"555-555-5555"}
            twoInputInOneLine
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Input
            title="Website + Social Media"
            required
            placeholder={"Paste Your Links"}
            value={websiteSocialMedia}
            onChange={(e) => setWebsiteSocialMedia(e.target.value)}
          />

          <Input
            title="Message"
            required
            placeholder={"Write your message here"}
            textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <div className="col-span-2 w-full">
            <Button
              icon={<GrSend font="white" />}
              width={"w-full"}
              height={"h-12"}
              className="rounded-3xl"
              title="Submit"
              variant={2}
              onClick={() => setShowSuccessModal(true)}
            />
          </div>
        </FormLayout>
      </div>
      <div className="bg-secondary w-full py-24">
        <div className="max-w-[1024px] mx-auto ">
          <h1 className="text-center heading1-primary mb-12">
            Frequently Asked Questions
          </h1>

          <Accordion DATA={FAQ_AFFILIATES} />
        </div>
      </div>

      {showSuccessModal && (
        <SuccessModal
          open={showSuccessModal}
          onClose={() => {
            resetForm();
            setShowSuccessModal(false);
          }}
          title="Success"
          description="Your information has been submitted successfully!"
        />
      )}
    </div>
  );
};

export default Affiliates;
