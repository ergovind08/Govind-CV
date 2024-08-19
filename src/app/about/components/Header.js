import SectionHeading from "./../../commons/components/elements/SectionHeading";
import SectionSubHeading from "./../../commons/components/elements/SectionSubHeading";

export default function Header() {
  return (
    <>
      <div className="space-y-6">
        <div className="space-y-2">
          <SectionHeading title="About" />
          <SectionSubHeading>
            <p className="text-sm dark:text-neutral-400">
              A glimpse into my journey as a software developer, where passion
              meets potential.
            </p>
          </SectionSubHeading>
        </div>
        <div className="border-b border-dashed border-neutral-600 dark:border-neutral-500"></div>
        <p className="font-light text-sm leading-7">
          Hi, I'm <strong className="text-blue-500">Govind Jha</strong>, an{" "}
          <span className="text-red-400">aspiring software developer</span> with
          a relentless drive to excel in the tech industry. Despite having just
          one month of experience, I have quickly demonstrated a remarkable
          ability to master web development frameworks and tools. My journey
          started with a solid grounding in{" "}
          <strong className="text-green-500">HTML, CSS, and JavaScript</strong>,
          and has rapidly expanded to include popular frameworks like{" "}
          <strong className="text-green-500">
            Bootstrap, Tailwind CSS, and React
          </strong>
          .
        </p>
        <p className="font-light text-sm leading-7">
          What sets me apart is my{" "}
          <strong className="text-yellow-500">quick adaptability</strong>
          and a strong eagerness to take on new challenges. I am committed to
          staying ahead in this fast-paced industry, actively seeking out
          resources and tutorials to enhance my skills. My dedication and
          versatility make me a promising front-end developer, ready to tackle
          complex projects and bring innovative ideas to life.
        </p>
        <p className="font-light text-sm leading-7">
          I am on a path to becoming a skilled professional, with a keen eye for
          detail and a strong{" "}
          <strong className="text-yellow-500">problem-solving mindset</strong>.
          My future goals include mastering a wide range of web frameworks and
          contributing significantly to a dynamic development team. By staying
          current with industry trends and best practices, I aim to deliver
          solutions that exceed expectations and drive success in every project
          I undertake.
        </p>
      </div>
    </>
  );
}
