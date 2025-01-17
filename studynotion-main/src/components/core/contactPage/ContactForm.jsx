import React from 'react'
import ContactForm1 from '../../common/ContactForm'

const ContactForm = () => {
  return (
    <div>
      <div className="justify-centre  flex min-w-[400px] flex-col gap-3 rounded-xl border-2 border-richblack-600 p-7 text-richblack-300  lg:p-14">
      <h1 className="text-4xl font-semibold leading-10 text-richblack-5">
        Got a Idea? We&apos;ve got the skills. Let&apos;s team up
      </h1>
      <p className="">
        Tell us more about yourself and what you&apos;re got in mind.
      </p>

      <div className="mt-7 ">
        <ContactForm1 width={" w-full "} />
      </div>
    </div>
    </div>
  )
}

export default ContactForm