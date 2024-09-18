// import Coffee from "./elements/Coffee";
import Link from "next/link";

export default function HeaderHome() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <h1 className="md:text-3xl text-2xl font-small underline underline-offset-8 decoration-teal-800 flex gap-1">
            Hare Krishna !, I'm Govind <p className="animate-shake">📂</p>
          </h1>
        </div>
        <ul className="flex md:space-x-8  space-x-0 px-5 py-2 md:flex-row flex-col ">
          <li className="list-disc text-zinc-500 text-md">
            Aspiring Software Developer
          </li>
          <li className="list-disc text-zinc-500 text-md">Kolkata,IN</li>
        </ul>
        <p className="my-3 md:leading-6 leading-7 text-sm">
          An enthusiastic and experienced Full stack developer with a strong
          focus on <span className="text-cyan-500">Front-end development</span>{" "}
          as well as <span className="text-green-600">Backend-Dev</span>{" "}
          including{" "}
          <span className="text-amber-600">DevOps and microservices</span>.
          Proficient in design and possessing a deep understanding of all
          aspects of web technology. A collaborative team player dedicated to
          creating efficient, scalable, and visually appealing web applications.
        </p>
      </div>
      <Link
        href="/myResume.pdf"
        className="py-2 px-2 bg-neutral-600 hover:bg-neutral-700 text-neutral-200 rounded-lg "
      >
        Check CV <span className="">📂</span>
      </Link>
    </>
  );
}
