import Resume from '@/app/components/resume';

export default function Experience() {
  return (
    <div
      id="experience"
      className="text-foreground flex scroll-mt-4 flex-row pb-16 text-lg lg-pc:scroll-mt-8 lg-pc:text-3xl mobile:scroll-mt-20 mobile:flex-col mobile:pb-10"
    >
      <div className="w-6/12 pr-12 mobile:w-full">
        <h1 className="text-3xl font-bold lg-pc:pb-8 lg-pc:text-5xl">
          Education
        </h1>
        <ol className="border-color relative border-s">
          <li className="mb-5 ms-4">
            <div className="bg-secondary border-color ring-ring absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full"></div>
            <time className="text-muted-foreground mb-1 text-sm font-normal leading-none lg-pc:text-2xl">
              May 2020 - Aug 2024
            </time>
            <h3 className="text-lg font-semibold lg-pc:text-3xl">
              Computer Science @Stony Brook University
            </h3>
            <p className="text-muted-foreground mb-4 font-normal">
              GPA: 3.63 | Cum Laude
            </p>
          </li>
        </ol>

        <h1 className="text-3xl font-bold">Experience</h1>
        <ol className="border-color relative border-s">
          <li className="mb-5 ms-4">
            <div className="bg-secondary border-color ring-ring absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full"></div>
            <time className="text-muted-foreground mb-1 text-sm font-normal leading-none lg-pc:text-2xl">
              May 2024 - Aug 2024
            </time>
            <h3 className="text-lg font-semibold lg-pc:text-3xl">
              Software Engineer Intern @Develop For Good
            </h3>
            <p className="text-muted-foreground mb-4 font-normal">
              At Develop For Good, I played a key role in developing the Human
              Rights First Litigation Tracker, a full-stack web application
              designed to centralize and organize legal case data related to
              extremist actors and groups. By addressing the challenges of
              fragmented legal data, this platform now enables Human Rights
              First to manage and access litigation cases efficiently. My role
              in architecting the database and developing RESTful services using
              the T3 stack reinforces my commitment to using technology to drive
              positive social change.
            </p>
          </li>
          <li className="mb-5 ms-4">
            <div className="bg-secondary border-color ring-ring absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full"></div>
            <time className="text-muted-foreground mb-1 text-sm font-normal leading-none lg-pc:text-2xl">
              Jul 2023 - Aug 2023
            </time>
            <h3 className="text-lg font-semibold lg-pc:text-3xl">
              Special Initiatives Unit Intern @NYC Department for the Aging
            </h3>
            <p className="text-muted-foreground mb-4 font-normal">
              At the NYC Department for Aging, I used Python and data
              visualization tools to analyze the distribution of farmers&apos;
              market coupons, providing strategic insights for targeted outreach
              to essential services for underserved senior populations. This
              experience highlighted the importance of data-driven
              decision-making in public service and sharpened my ability to
              translate complex data into actionable insights.
            </p>
          </li>
          <li className="ms-4">
            <div className="bg-secondary border-color ring-ring absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full"></div>
            <time className="text-muted-foreground mb-1 text-sm font-normal leading-none lg-pc:text-2xl">
              Jun 2022 - Aug 2022
            </time>
            <h3 className="text-lg font-semibold lg-pc:text-3xl">
              Network Operations Intern @Spotify
            </h3>
            <p className="text-muted-foreground mb-4 font-normal">
              At Spotify, I migrated and renewed documentation, streamlining
              troubleshooting processes for the company&apos;s global IT
              infrastructure. This role enhanced my understanding of the
              operational challenges faced by large-scale technology companies
              and highlights the significance of maintaining robust, and secure
              IT systems.
            </p>
          </li>
        </ol>
      </div>
      <Resume />
    </div>
  );
}
