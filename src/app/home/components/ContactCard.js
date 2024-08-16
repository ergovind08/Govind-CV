import Link from "next/link";
import SectionHeading from "./../../commons/components/elements/SectionHeading";
import SectionSubHeading from "./../../commons/components/elements/SectionSubHeading";
import { BiRocket } from "react-icons/bi";

export default function ContactCard() {
  return (
    <div className="space-y-6">
      <SectionHeading title={"What I've Been Aiming for "} />
      <SectionSubHeading>
        <p>
          In the coming five years, I wish to transform into multifaceted
          professional with efficient work experience. full-stack developer with
          a focus on slang and features of contemporary web. technologies and
          machine learning. The goal is to lead innovative activities that
          incorporate the best and state-of-the-art tools and platforms, thus
          about which I am confident that I am productive for my team and
          organization.
        </p>
      </SectionSubHeading>
      <div className="rounded-xl transition-all duration-300 flex items-center gap-5 p-8 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800">
        <div className="space-y-6">
          <div className="flex gap-2 items-center">
            <BiRocket size={26} />
            <p className="md:text-xl text-lg">Lets work together!</p>
          </div>
          <div>
            <p className="font-light">
              I'm open for freelance projects & Work, feel free to email me to
              see how can we collaborate.
            </p>
          </div>
          <div>
            <Link
              href="/contact"
              className="py-2 px-4 bg-neutral-950 hover:bg-lime-700 text-neutral-200 rounded-lg "
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
