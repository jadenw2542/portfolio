export default function Resume() {
  const resumePDF = '/Jaden_Wong_Resume_2024.pdf';

  return (
    <div className="flex flex-grow pb-5 mobile:h-96 mobile:w-full mobile:flex-none">
      <iframe
        src={resumePDF}
        style={{ width: '100%', height: '100%', minHeight: '200px' }}
      ></iframe>
    </div>
  );
}
