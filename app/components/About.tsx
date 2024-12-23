import { motion } from "framer-motion";
import { Skill } from "../json/get_skills";
import { caveat, jost } from "../fonts";

export default function About({ skills }: { skills: Skill[] }) {
  const rawSkills = skills.slice(0, 3);
  // const toolsDb = skills.slice(3, 5);

  return (
    <section className=" bg-emerald-100 w-screen h-screen flex flex-col items-start justify-start">
      {/* image div */}
      <div className="flex flex-row justify-between">
        {/* add an image avatar */}

        <img
          src="/images/avatar.png"
          alt="avatar"
          className="h-32 w-32 mr-1 rounded-full"
        ></img>
        {/*add name age and from  */}
        <div className="flex flex-row justify-between gap-2">
          <div className="flex flex-col items-start justify-center ">
            <h1>Name </h1>
            <h1> Jehadur Rahman</h1>
          </div>
          <div className="flex flex-col items-start justify-center ">
            <h1>Age </h1>
            <h1> 26</h1>
          </div>
          <div className="flex flex-col items-start justify-center ">
            <h1>From </h1>
            <h1> Bangladesh</h1>
          </div>
        </div>
      </div>

      {/* Skill Subsection with bar */}

      <div className="flex flex-col lg:flex-row md:gap-4 ">
        {rawSkills.map((skill, index) => {
          return (
            <div key={index}>
              <h1 className={`${jost.className} text-2xl font-bold`}>{skill.category}</h1>
              <div className="flex flex-row items-start justify-start ml-3 mu-2">
                {/* Skill Names */}
                <div className="flex flex-col items-start justify-start">
                  {skill.items.map((item, index) => {
                    return <h1 className={`${caveat.className}`} key={index}>{item.name}</h1>;
                  })}
                </div>

                {/* Skills Perchantage  */}
                <div className="flex flex-col items-start justify-start ml-2 ">
                  {skill.items.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="w-82 h-2 bg-gray-300 rounded-lg mt-2 mb-2"
                      >
                        <motion.div
                          className="h-full bg-blue-500 rounded-lg"
                          style={{ width: item.percentage + "%" }}
                          initial={{
                            scaleX: 0,
                            originX: 0,
                          }}
                          whileInView={{
                            scaleX: 1,
                            originX: 0,
                          }}
                          transition={{
                            duration: 1,
                            delay: index * 0.1,
                          }}
                        ></motion.div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* About Subsection */}
      <div className="flex flex-col items-start justify-start lg:m-10">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="pr-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec justo
          nec purus ultricies ultrices ac ac libero. Nullam nec nisi auctor,
          pulvinar nulla sit amet, lacinia nulla. Nulla facilisi.
        </p>
      </div>
    </section>
  );
}
