import { HiCode } from "react-icons/hi";
import SkillCard from "./SkillCard";
import SectionHeading from "./../../commons/components/elements/SectionHeading";
import SectionSubHeading from "./../../commons/components/elements/SectionSubHeading";
import {
  STACKS,
  STACK_LANG,
  STACK_DATABASE,
  STACK_ML,
  STACK_TOOL,
} from "./../../commons/constants/stacks";

export default function SkillList() {
  return (
    <section className="space-y-6">
      <div className="space-y-4">
        <SectionHeading title="Skills" icon={<HiCode className="mr-2" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding skills.</p>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4 border border-gray-300 dark:border-slate-700 p-4 rounded-3xl">
          <h3 className="text-md text-center dark:text-gray-300 ">
            Languages:
          </h3>
          <div className="flex flex-wrap gap-4">
            {STACK_LANG.map((stack) => (
              <SkillCard key={stack.name} {...stack} />
            ))}
          </div>
        </div>

        <div className="space-y-4 border border-gray-300 dark:border-slate-700 p-4 rounded-md">
          <h3 className="text-md text-center dark:text-gray-300 ">
            Web Technologies:
          </h3>
          <div className="flex flex-wrap gap-4">
            {STACKS.map((stack) => (
              <SkillCard key={stack.name} {...stack} />
            ))}
          </div>
        </div>

        <div className="space-y-4 border  border-gray-300 dark:border-slate-700 p-4 rounded-md">
          <h3 className="text-md text-center dark:text-gray-300 ">Database:</h3>
          <div className="flex flex-wrap gap-4">
            {STACK_DATABASE.map((stack) => (
              <SkillCard key={stack.name} {...stack} />
            ))}
          </div>
        </div>

        <div className="space-y-4 border  border-gray-300 dark:border-slate-700 p-4 rounded-3xl">
          <h3 className="text-md text-center dark:text-gray-300 ">ML Tech:</h3>
          <div className="flex flex-wrap gap-4">
            {STACK_ML.map((stack) => (
              <SkillCard key={stack.name} {...stack} />
            ))}
          </div>
        </div>

        <div className="space-y-4 border  border-gray-300 dark:border-slate-700 p-4 rounded-3xl">
          <h3 className="text-md text-center dark:text-gray-300 ">
            Tools & Platform:
          </h3>
          <div className="flex flex-wrap gap-4">
            {STACK_TOOL.map((stack) => (
              <SkillCard key={stack.name} {...stack} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
