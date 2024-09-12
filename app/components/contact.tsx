
import ContactForm from "@/app/components/ui/contact-form"
export default function Contact() {
    return (
        <div id="contact" className="text-background pb-16 scroll-mt-4
        lg-pc:scroll-mt-8 mobile:scroll-mt-20 mobile:pb-10">
            <h1>Contact Me</h1>

            <p>
            I would love to hear from you and assist with any questions or needs you may have. Please fill out the form below and I will be in touch with you shortly.
            <br/>
            I look forward to connecting with you.
            </p>

            <ContactForm/>
        </div>
    )
}