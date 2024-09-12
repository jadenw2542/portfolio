import Resume from '@/app/components/resume'

export default function Experience() {
    return (
        <div id="experience" className="scroll-mt-4 pb-16 text-lg text-foreground flex flex-row   
        lg-pc:scroll-mt-8  lg-pc:text-3xl
        mobile:flex-col mobile:scroll-mt-20 mobile:pb-10">
            <div className='pr-12 w-6/12 mobile:w-full'>
                <h1 className='font-bold text-3xl
                lg-pc:text-5xl lg-pc:pb-8'>Education</h1>
                <ol className="relative border-s border-color">                  
                    <li className="mb-5 ms-4">
                        <div className="absolute w-3 h-3 bg-secondary  rounded-full mt-1.5 -start-1.5 border-color ring-ring"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-muted-foreground lg-pc:text-2xl">May 2020 - Aug 2024</time>
                        <h3 className="text-lg font-semibold lg-pc:text-3xl">Computer Science @Stony Brook University</h3>
                        <p className="mb-4 text-muted-foreground font-normal ">
                            GPA: 3.63 | Cum Laude
                        </p>
                    </li>
                </ol>

                <h1 className='font-bold text-3xl'>Experience</h1>
                <ol className="relative border-s border-color">                  
                    <li className="mb-5 ms-4">
                        <div className="absolute w-3 h-3 bg-secondary  rounded-full mt-1.5 -start-1.5 border-color ring-ring"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-muted-foreground lg-pc:text-2xl">May 2024 - Aug 2024</time>
                        <h3 className="text-lg font-semibold lg-pc:text-3xl">Software Engineer Intern @Develop For Good</h3>
                        <p className="mb-4 text-muted-foreground font-normal ">
                            At Develop For Good, I played a key role in developing the Human Rights First Litigation Tracker, a full-stack web application designed to centralize and organize legal case data related to extremist actors and groups. By addressing the challenges of fragmented legal data, this platform now enables Human Rights First to manage and access litigation cases efficiently. My role in architecting the database and developing RESTful services using the T3 stack reinforces my commitment to using technology to drive positive social change. 
                        </p>
                    </li>
                    <li className="mb-5 ms-4">
                        <div className="absolute w-3 h-3 bg-secondary  rounded-full mt-1.5 -start-1.5 border-color ring-ring"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-muted-foreground lg-pc:text-2xl">Jul 2023 - Aug 2023</time>
                        <h3 className="text-lg font-semibold lg-pc:text-3xl">Special Initiatives Unit Intern @NYC Department for the Aging</h3>
                        <p className="mb-4 text-muted-foreground font-normal ">
                        At the NYC Department for Aging, I used Python and data visualization tools to analyze the distribution of farmers' market coupons, providing strategic insights for targeted outreach to essential services for underserved senior populations. This experience highlighted the importance of data-driven decision-making in public service and sharpened my ability to translate complex data into actionable insights.
                        </p>
                    </li>
                    <li className="ms-4">
                        <div className="absolute w-3 h-3 bg-secondary  rounded-full mt-1.5 -start-1.5 border-color ring-ring"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-muted-foreground lg-pc:text-2xl">Jun 2022 - Aug 2022</time>
                        <h3 className="text-lg font-semibold lg-pc:text-3xl">Network Operations Intern @Spotify</h3>
                        <p className="mb-4 text-muted-foreground font-normal ">
                        At Spotify, I migrated and renewed documentation, streamlining troubleshooting processes for the company's global IT infrastructure. This role enhanced my understanding of the operational challenges faced by large-scale technology companies and highlights the significance of maintaining robust, and secure IT systems.
                        </p>
                    </li>
                </ol>
            </div>
            <Resume />
        </div>
    )
}
