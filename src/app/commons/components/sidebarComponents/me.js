import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Verified from "./../elements/verified";
import Status from "./../elements/Status";
import useHasMounted from "../hooks/useHasMounted";

export default function Me({ activeProps }) {
  const mounted = useHasMounted();

  if (!mounted) return null;

  return (
    <>
      <div className="self-center md:self-auto ">
        <div className=" rounded-lg hidden md:flex relative">
          <Status />
          <div className="dark:brightness-50 brightness-[0.96] relative w-full h-24 overflow-hidden rounded-xl">
            <Image
              src="https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1"
              width={240}
              height={280}
              alt="bgprofile"
              priority
              className="w-full rounded-xl aspect-auto scale-100"
            ></Image>
          </div>
        </div>

        <div
          className={`flex md:flex-col ${
            activeProps ? "flex-col" : "flex-row  items-center"
          } md:justify-center md:items-center gap-2 md:gap-0 transition-all duration-1000 ease-in-out`}
        >
          <motion.div
            className="md:-mt-12 mt-0 shadow-md md:border-2 md:z-10 z-0 md:border-white dark:md:border-dark border-transparent  w-fit rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              initial={{ filter: "blur(20px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="rounded-full overflow-hidden "
            >
              <Image
                src="https://media.licdn.com/dms/image/C5603AQFlvuBHJa48EQ/profile-displayphoto-shrink_200_200/0/1650993820696?e=2147483647&v=beta&t=cuZ8CDn_NOj36KSEgpILv-yVFl7KDSyMcvuxT7sTpS4"
                loading="lazy"
                width={90}
                height={90}
                alt="me"
                className={`rounded-full scale-110 aspect-square transition-all duration-300  delay-50 ease-linear md:w-[90px]  md:h-[90px]  ${
                  activeProps ? "w-[90px] h-[90px] " : "h-[40px] w-[40px]"
                } `}
              ></Image>
            </motion.div>
          </motion.div>
          <div className="md:mt-4 mt-2 text-xl font-semibold flex justify-center items-center gap-2">
            <h1 className="md:text-xl text-lg">Er Govind Jha</h1>
            <Verified />
          </div>

          <p className="text-sm text-neutral-700 dark:text-neutral-600 hidden md:flex">
            @succinic08
          </p>
        </div>
      </div>
    </>
  );
}
