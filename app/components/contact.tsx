import ContactForm from '@/app/components/ui/contact-form';
export default function Contact() {
  return (
    <div className="flex items-center justify-center">
      {' '}
      <div
        id="contact"
        className="text-background mx-auto w-6/12 scroll-mt-4 pb-16 lg-pc:w-8/12 lg-pc:scroll-mt-8 mobile:w-full mobile:scroll-mt-20 mobile:pb-10"
      >
        <div className="bg-secondary-opacity flex w-full flex-col items-center justify-center rounded-lg p-10 text-center shadow-md">
          <h1 className="text-3xl font-bold leading-none tracking-tight lg-pc:text-5xl">
            Contact Me
          </h1>

          <p className="py-4 text-lg lg-pc:text-3xl">
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
