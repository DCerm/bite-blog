import Image from "next/image";
import { Tag, Toggle, Testimonials, LeftImageSection, RightImageSection } from './modules';
import { Button, BigButton } from "./buttons";
import { MdOutlineAlarm, MdOutlineStar, MdOutlineWorkspacePremium } from 'react-icons/md';
import { FaHeart, FaUserNurse } from "react-icons/fa";


export default function Home() {
  return (
    <>
    <div className="pt-2 lg:mt-2 text-black">
      <div className="p-1 lg:p-2.5 -mt-[70px] lg:-mt-75px text-white">
        <section className=" px-2.5 md:px-15p text-center bg-home-hero bg-cover bg-center rounded-xl min-h-100vh flex flex-col items-center">
          <div className=" ph10p py-36">
            <div className="pt-12 center">
              <div className="">
                <h1 className=" text-mxl md:text-[70px] lg:text-3xl lg:leading-6vw font-bold">
                  Quality In-Home Care, Whenever You Need It.
                </h1>

                <div className="py-2.5" />

                <p className="px0 md:px-10p text-xl font-medium lg:font-semibold">
                We provide 24/7 care for the aged, recuperating patients, people with disabilities, 
                dementia patients, and people in need of companionship, all in the comfort of their home.
                </p>

                <div className='py-5 lg:py-5' />
                <BigButton url="/contact-benison-home-medicare" className="bg-blue  hover:bg-white hover:text-black" text="Get Home Care" />
              </div>
            </div>
          </div>
        </section>
      </div>
      
      {/*    HEALTH SERVICES FOR YOUR WELL BEING     */}

      <div className="p-1 lg:p-2.5 lg:pt-0">
        <section className="bg-grey rounded-xl px-2.5 lg:px-50 py-12 lg:py-100">
          <div className='rounded-xl lg:flex items-center bg-light-green lg:gap-50 p-5 lg:p-50'>
            <div className="w-1/3">
              <Image 
              src="https://res.cloudinary.com/dzfqshhzu/image/upload/e_improve,w_300,h_600,c_thumb/v1737667321/CMS-Unveils-New-Telehealth-Program-to-Treat-Acute-Care-Patients-at-Home_zx9jvp.png" 
              alt="" 
              width={250} height={300} className="rounded-xl hidden lg:block" 
              />
            </div>

            <div className="flex flex-col items-start ">
              <Tag className="rounded-xl" text="Our Services" />
              <h3 className="capitalize text-25px font-bold leading-10 md:text-[35px] lg:text-2xl mt-2.5 py-2.5">Home Medicare Services Like You Want It</h3>
              <p className="text-black text-xl  py-2.5 lg:pt-0">We provide personalized in-home care that cater for your health needs and those of your loved ones.</p>

              <div className="flex flex-col lg:flex-row gap-12 pt-12">
                <div className="lg:w-1/2 flex flex-col items-start">
                  <h4 className="capitalize text-xl font-semibold pt-5">Comprehensive Range of Services</h4>
                  <p className="text-xl lg:text-lg pt-2.5">We offer a wide array of services including skilled nursing, medication management, companionship and personal 
                    care.
                  </p>
                </div>

                <div className="lg:w-1/2 flex flex-col items-start">
                  <h4 className="capitalize text-xl font-semibold pt-5">Compassionate Care Like Family</h4>
                  <p className="text-black text-xl lg:text-lg pt-2.5">We provide care rooted in kindness, empathy, and respect; just like family</p>
                </div>
              </div>

              <div className="p-5" />
              <Button url="/contact-benison-home-medicare" className="" text="Get Homecare" />
            </div>
          </div>

        </section>
      </div>

      {/*   WHY CHOOSE US 1      */}

      <div className="p-1 lg:p-2.5 lg:pt-0">
        <section className='bg-light-green rounded-xl text-lg px-2.5 lg:px-50 py-24 lg:py-100'>
          <div className="lg:flex gap-2.5 ">
            <div className="lg:w-2/5">
              <h2 className='text-30px md:text-[40px] lg:text-2xl font-semibold px-5 pb-5 lg:px-0'>Why <br/> Choose Us</h2>
            </div>

            <div className="flex gap-2.5 ">
              <div className=' w-1/2 lg:w-1/3 p-5 bg-light-blue rounded-2xl flex flex-col justify-between items-start'>
                <MdOutlineWorkspacePremium className="text-[50px]" />
                <div className="py-5" />
                <p className="font-extrabold text-xl md:text-[25px] lg:text-25px leading-8">Certified Care Professionals</p>
              </div>

              <div className='w-1/2 lg:w-1/3 p-5 bg-light-grey rounded-2xl flex flex-col justify-between items-start'>
              <MdOutlineStar className="text-[50px]" />
                <div className="py-5" />
                <p className="font-extrabold text-xl md:text-[25px] lg:text-25px leading-8">Reliable and Accessible Services</p>
              </div>   

              <div className='w-1/3 hidden'></div> 
            </div>

            
          </div>

          <div className='py-12  lg:py-20'></div>

          <div className="lg:flex gap-2.5 items-end">
            <div className="lg:w-3/5">
              <h2 className='lg:w-1/2  font-bold text-25px px-5 lg:px-0'>Expert Care for Your Loved Ones You Can Rely on Anytime</h2>
            </div>

            <div className="flex gap-2.5 lg:w-2/5 pt-8 lg:pt-0">
              <div className='w-1/2  p-5 bg-light-green rounded-2xl flex flex-col justify-between items-start'>
                <MdOutlineAlarm className="text-[50px]" />
                <div className="py-5" />
                <p className="font-extrabold text-xl md:text-[25px] lg:text-25px leading-8">Caregivers Available Round the Clock</p>
              </div>

              <div className='w-1/2  p-5 bg-blue rounded-2xl text-white flex flex-col justify-between items-start'>
                <MdOutlineWorkspacePremium className="text-[50px]" />
                <div className="py-5" />
                <p className="font-extrabold text-xl md:text-[25px] lg:text-25px leading-8">Commitment to Excellence You Can Trust</p>
              </div>
            </div>
          </div>
        
        </section>
      </div>

      {/*    WHY CHOOSE US 2     */}

      <div className="p-1 lg:p-2.5 lg:pt-0 ">
        <section className="px-5 lg:px-50 py-12 lg:py-100 rounded-xl bg-grey">
          <div className=" flex flex-col items-start lg:items-center">
            <Tag className="rounded-xl" text="Why Choose Us?" />
            <h2 className="text-30px lg:text-2xl pt-5 font-semibold">What Sets Us Apart</h2>
            <p className="pt-2.5 text-xl">Core Traits That Make Us The Go-to Home Medicare Agency for Many.</p>
            <div className="p-5" />
          </div>
      
          <LeftImageSection 
            src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1737662494/care-process_pemvhc.webp"
            alt="tailored homecare plans - Benison Home Medicare"
            imgClass=""
            title="Tailored Care Plans"
            text="We understand that no two individuals are the same. That&apos;s why we develop customized 
                care plans that address your specific health needs, lifestyle preferences, and personal goals. 
                These range from medical assistance to daily living support."
          />

          <RightImageSection 
            src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1737662495/flexible-schedule-handwritten-memo-on-the-calendar--1202291839-9864ad4e70cc4a49be1d2dafb0695dac_wqsrxf.jpg"
            alt=""
            imgClass=""
            title="Reliable and Accessible Services"
            text="We are committed to being there when you need us. With 24/7 
                availability and flexible scheduling, you can trust us to provide consistent, timely care 
                tailored to your routine."
          />

          <LeftImageSection 
            src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1737665562/black-people-nurse-senior-patient-elderly-care-wheelchair-healthcare-home-happy-african-female-medical-professional-caregiver-helping-old-age-person-with-disability-house_590464-210351_lhales.jpg"
            alt=""
            imgClass=""
            title="Holistic Approach to Care"
            text="We go beyond physical care by addressing emotional, 
                mental, and social well-being. Whether it’s engaging activities, meaningful companionship, 
                or connecting with loved ones, we foster a fulfilling and enriched life."
          />

          <RightImageSection 
            src="https://res.cloudinary.com/dzfqshhzu/image/upload/v1737665454/happy-senior-man-having-his-600nw-2413425657_ofz6xw.jpg"
            alt=""
            imgClass=""
            title="Commitment to Excellence and Trust"
            text="At Benison Home Medicare, we hold ourselves to the highest 
                standards of service, professionalism, and integrity. Our goal is to build lasting 
                relationships with our clients and their families, founded on trust and mutual respect."
          />
      
        </section>
      </div>
      

      { /* TESTIMONIALs  */}

      <Testimonials />

      { /* FAQS           FAQS              FAQS                 FAQS            FAQS     */ }

      <section className="lg:flex gap-100 px-5 lg:px-50 py-24 lg:py-100">

        <div className="rounded-xl w-1/3 hidden lg:block bg-blue" >
        
        </div>

        <div className="lg:w-2/3">
          <h2 className="text-30px lg:text-2xl font-semibold capitalize pb-8 lg:pb-12">frequently asked questions</h2>
          <Toggle 
            q="What services does Benison Homecare offer?"
            a="We offer a range of services, including: skilled nursing, medication management, companionship, and personal care."
          />
          <Toggle 
            q="How can I schedule a consultation?"
            a="You can schedule an homecare visit by contacting us via phone or email. Our team will respond promptly to set up a time that works best for you."
          />
          <Toggle 
            q="How do you ensure the safety and privacy of clients?"
            a="We follow strict safety and privacy protocols to protect our clients. All caregivers undergo background checks, and we adhere to industry standard regulations to safeguard personal information."
          />

          <Button className="mt-8" url="/faqs" text="View all FAQs" />
        </div>
      </section>

      
    </div>
    </>
  );
}
