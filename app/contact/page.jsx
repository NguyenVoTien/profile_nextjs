/* eslint-disable react/no-unescaped-entities */
'use client';

//*LIB
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

//* IMPORT
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';


const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+84) 829 310 012"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "tienfrontend@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Nha Trang city, Viet Nam"
  },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyl0XkebmeyKRNDvytPrVl_RsToQ7afXsePju4MoDp-ikMratLrCTdfv1XkD8FAX4-wNA/exec', {
        method: 'POST',
        contentType: 'application/json',
        body: JSON.stringify(formData)
      });
      alert('Form submitted successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          {/* form */}
          <div className='xl:w-[54%] order-2 xl:order-none'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
              <h3 className='text-4xl text-accent '>Let's Work Together</h3>
              <p className='text-white/60'>Please send me what you want me to do and answer</p>

              {/* input */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                <Input name="firstName" type="text" placeholder="First Name" onChange={handleChange} />
                <Input name="lastName" type="text" placeholder="Last Name" onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email address" onChange={handleChange} />
                <Input name="phone" type="phone" placeholder="Phone Number" onChange={handleChange} />
              </div>

              {/* select */}
              <Select value={formData.service}
                onValueChange={(value) => setFormData(prevState => ({
                  ...prevState,
                  service: value
                }))}>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent >
                  <SelectGroup >
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea name="message" className="h-[200px]" placeholder="Type message here." onChange={handleChange} />

              {/* button */}
              <Button size="md" className="max-w-40 h-14">Send message</Button>
            </form>
          </div>
          {/* info */}
          <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none m-8 xl:m-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => (
                <li key={index} className='flex items-center gap-6 '>
                  <div className='w-[52px] h-[52px] xl:w-[72] xl:h-[72] bg-[#27272c]
                    text-accent rounded-md flex items-center'>
                    <div className='text-[28px]'>{item.icon}</div>
                  </div>
                  <div className='flex-1 '>
                    <p className='text-white/60'>{item.title}</p>
                    <h3 className='text-xl'>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;
