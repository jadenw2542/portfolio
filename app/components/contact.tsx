
import ContactForm from "@/app/components/ui/contact-form"
export default function Contact() {
    return (
      <div className="flex justify-center items-center"> {/* Centering the whole section */}
        <div
          id="contact"
          className="text-background pb-16 w-6/12 scroll-mt-4 lg-pc:scroll-mt-8 mobile:scroll-mt-20 mobile:pb-10 mx-auto"
        >
          <div className="flex flex-col w-full justify-center items-center text-center p-10 shadow-md bg-secondary-opacity rounded-lg">
            <h1 className="font-bold text-3xl lg-pc:text-5xl leading-none tracking-tight">Contact Me</h1>
  
            <p className="text-lg lg-pc:text-2xl py-4">
              I would love to hear from you and assist with any questions or needs
              you may have. Please fill out the form below and I will be in touch
              with you shortly. I look forward to connecting with you.
            </p>
  
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }