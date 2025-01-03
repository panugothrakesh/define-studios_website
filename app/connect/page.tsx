'use client'
import {motion} from 'framer-motion'
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import banner from '../assets/connectbanner.jpg';

interface FormInputs {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  firstname?: string;
  email?: string;
  phone?: string;
}

export default function Connect() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(5); // Initial countdown timer value
  const [showRedirectMessage, setShowRedirectMessage] = useState(false);
  const [formData, setFormData] = useState<FormInputs>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const router = useRouter();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (showRedirectMessage) {
      intervalId = setInterval(() => {
        setRedirectTimer((prevTimer) => prevTimer - 1);
      }, 1000); // Update timer every second
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [showRedirectMessage]);

  const validateForm = () => {
    const newErrors: Errors = {};
    if (!formData.firstname) newErrors.firstname = 'First name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    return newErrors;
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('/api/connect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        setSubmitted(true);
        setShowRedirectMessage(true);

        // Scroll to the top of the page
        window.scrollTo(0, 0);

        setTimeout(() => {
          setShowRedirectMessage(false);
          router.push('/');
        }, redirectTimer * 1000); // Redirect after the dynamic timer value in seconds
      } else {
        console.error('Failed to submit:', res.statusText);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return isSubmitted ? (
    <div>
      <h1 className="text-center font-semibold text-3xl">Thank you for your message!</h1>
      {showRedirectMessage && (
        <p className="text-center text-sm mt-4 text-gray-600">
          Redirecting in {redirectTimer} seconds...
        </p>
      )}
    </div>
  ) : (
    <>
      <div className="flex flex-col items-center justify-center w-screen md:px-24 px-12 gap-14">
        <div className="w-full form flex justify-center items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.9 },
            }}
            className="top w-full flex flex-col items-center justify-center gap-10"
          >
            <span className="font-ponjoung">GET IN TOUCH</span>
            <form onSubmit={onSubmit} className="grid grid-cols-2 gap-5 max-w-4xl w-full">
              <div className="border-t-[1px] col-span-2 mb-7 border-black/30 flex flex-col justify-center items-center"></div>
              <div className="flex col-span-2 md:col-span-1 flex-col gap-1 text-base md:text-sm 2xl:text-xl font-haboro">
                <p className="text-black/50 tracking-wider">
                  First name <span className="text-black/30 text-xs">(required)</span>
                </p>
                <input
                    placeholder='Firstname'
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  type="text"
                  className="bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2"
                  required
                />
                {errors.firstname && (
                  <p className="text-red-500 text-xs mt-1">{errors.firstname}</p>
                )}
              </div>
              <div className="flex col-span-2 md:col-span-1 flex-col gap-1 text-base md:text-sm 2xl:text-xl font-haboro">
                <p className="text-black/50 tracking-wider">Last name</p>
                <input
                placeholder='Lastname'
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  type="text"
                  className="bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2"
                />
              </div>
              <div className="flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro">
                <p className="text-black/50 tracking-wider">
                  Email <span className="text-black/30 text-xs">(required)</span>
                </p>
                <input
                placeholder='abcd@gmail.com'
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  className="bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2"
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro">
                <p className="text-black/50 tracking-wider">
                  Phone <span className="text-black/30 text-xs">(required)</span>
                </p>
                <input
                placeholder='XXXXX XXXXX'
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="number"
                  className="bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div className="flex flex-col gap-1 col-span-2 text-base md:text-sm 2xl:text-xl font-haboro">
                <p className="text-black/50 tracking-wider">Message</p>
                <textarea
                placeholder='Type your message or query here..!'
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black/[2%] focus:outline-none text-sm leading-loose text-black tracking-widest border border-1 py-1 px-2"
                />
              </div>
              <button
                type="submit"
                className="col-span-2 bg-black text-white py-2 px-4 mt-4"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
}
