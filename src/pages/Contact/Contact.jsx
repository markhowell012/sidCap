import React, { useState } from "react";
import Button from "../../components/macros/Button";
import { GrSend } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import FormLayout from "../../components/form/Form";
import Input from "../../components/form/Input";
import SuccessModal from "../../components/macros/SuccessModal";

const Contact = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompanyName("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="bg-background flex flex-col items-center justify-center gap-24 py-8 text-secondary">
      <div className="marginBody grid grid-cols-1 md:grid-cols-2">
        <div>
          <h2 className="heading1-primary">Contact Us</h2>
          <p className="paragraph2 mb-8 mt-4">We’d love to hear from you.</p>
          <p className="paragraph1">
            Put all your programs and payment informations in one place so it’s easier to track your progress. You can
            access your online portal from any device and even see when you’re eligible for more money.
          </p>
          <div className="mt-16">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-8">
                <div>
                  <BsFillTelephoneFill className="text-primary" size={48} />
                </div>
                <div>
                  <h1 className="paragraph2">Call Us</h1>
                  <p className="text-gray text-sm">212-548-6541</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <MdEmail className="text-primary" size={48} />
                </div>
                <div>
                  <h1 className="paragraph2">Email Us</h1>
                  <p className="text-gray text-sm">info@Cidwellcapital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div>
                  <FaRegBuilding className="text-primary" size={48} />
                </div>
                <div>
                  <h1 className="paragraph2">Address</h1>
                  <p className="text-gray text-sm">175 5th Ave, New York, NY 10010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormLayout>
          <Input
            title="Name"
            required
            colSpan={2}
            twoInputInOneLine
            placeholder={"David"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title="Email"
            required
            colSpan={2}
            twoInputInOneLine
            placeholder={"mail@me.com"}
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
            title="Company Name"
            required
            colSpan={2}
            placeholder={"Name of your company"}
            twoInputInOneLine
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />

          <Input
            title="Subject"
            required
            placeholder={"What's your message about?"}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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

      {showSuccessModal && (
        <SuccessModal
          open={showSuccessModal}
          onClose={() => {
            resetForm();
            setShowSuccessModal(false);
          }}
          title="Success"
          description="Thanks. We will contact you shortly!"
        />
      )}
    </div>
  );
};

export default Contact;
