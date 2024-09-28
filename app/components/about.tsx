export default function About() {
  return (
    <div
      id="about"
      className="text-foreground scroll-mt-4 pb-16 text-lg lg-pc:scroll-mt-8 lg-pc:text-3xl mobile:scroll-mt-20 mobile:pb-10"
    >
      <h1 className="pb-5 text-6xl lg-pc:text-8xl mobile:text-3xl">
        Hello 👋
        <br />
        My name is Jaden Wong - software engineer based in NYC
      </h1>
      <h1 className="text-3xl font-bold lg-pc:pb-8 lg-pc:text-5xl">
        {' '}
        About Me
      </h1>
      <p>
        Welcome to my portfolio! My name is{' '}
        <strong className="">Jaden Wong</strong>. I am a{' '}
        <strong className="">software engineer </strong> based in NYC with a
        passion in full stack development and software engineering.
      </p>
      <br />

      <p>
        I recently graduated from Stony Brook University with a Bachelor&apos;s
        in Computer Science and am currently looking a full-time software
        developer position.
      </p>
      <br />
      <p>
        My technical expertise spans across full-stack development with a focus
        on both frontend and backend technologies. I am proficient in
        JavaScript, Python, Java and several other languages, as well as
        frameworks like Next.js and React.js.
      </p>
      <br />
      <p>
        I have interned at prominent organizations like Spotify and NYC
        Department for the Aging, where I honed my skills in data analysis,
        network operations, and software development. Most recently, I served as
        a Software Engineer Intern at Develop For Good, contributing to the
        development of a litigation tracking system for Human Rights First, a
        not-for-profit organization.
      </p>
      <br />
      <p>
        I am always looking for new challenges and opportunities to grow as a
        developer, with a strong commitment to delivering impactful,
        user-friendly solutions.
      </p>
      <br />
      <p>
        Outside of tech, you&apos;ll typically find me getting some gains at the
        gym, playing videogames and brewing a scrumptious latte.
      </p>
      {/* 
            <div className="text-foreground">This is standard body text.</div>
        <div className="card">
        <h2 className="text-card-foreground">Card Title</h2>
        <p className="text-card-foreground">Card description...</p>
        </div>
        <div className="text-muted-foreground">This is muted text for non-essential information.</div>
        <button className="text-primary-foreground">Primary Button</button>
        <button className="text-secondary-foreground">Secondary Button</button>
        <p className="text-accent-foreground">This is an accented text highlight.</p>
        <div className="text-destructive">Warning: This action is irreversible!</div> */}
    </div>
  );
}
