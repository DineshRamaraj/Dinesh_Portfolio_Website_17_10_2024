import React from "react";
import { v4 as uuidv4 } from "uuid";

const frontEndSkills = [
  {
    id: uuidv4(),
    name: "HTML",
    progress: "95",
    iconElement: (
      <i className="fa-brands fa-html5 text-[50px] text-red-600"></i>
    ),
    type: "icon",
  },
  {
    id: uuidv4(),
    name: "CSS",
    progress: "85",
    iconElement: (
      <i class="fa-brands fa-css3-alt text-[50px] text-blue-600"></i>
    ),
    type: "icon",
  },
  {
    id: uuidv4(),
    name: "JavaScript",
    progress: "75",
    iconElement: (
      <i className="fa-brands fa-js text-[50px] text-yellow-400"></i>
    ),
    type: "icon",
  },
  {
    id: uuidv4(),
    name: "Bootstrap",
    progress: "90",
    iconElement: (
      <i className="fa-brands fa-bootstrap text-[50px] text-blue-700"></i>
    ),
    type: "icon",
  },
  {
    id: uuidv4(),
    name: "React.Js",
    progress: "85",
    iconElement: (
      <i className="fa-brands fa-react text-[50px] text-blue-500"></i>
    ),
    type: "icon",
  },
  {
    id: uuidv4(),
    name: "Redux",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    progress: "65",
    imageElement: (
      <center>
        <img
          className="w-[60px] h-[50px]"
          src="https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png"
          alt="redux"
        />
      </center>
    ),
    type: "img",
  },
];

const backEndSkills = [
  {
    id: uuidv4(),
    name: "Node.js",
    progress: "78",
    iconElement: (
      <i className="fa-brands fa-node-js text-[50px] text-green-600"></i>
    ),
    type: "icon",
  },
  {
    id: uuidv4(),
    name: "SQL",
    progress: "80",
    iconElement: (
      <i className="fa-solid fa-database text-[50px] text-slate-700"></i>
    ),
    type: "icon",
  },
  {
    id: uuidv4(),
    name: "MySql",
    progress: "80",
    imageElement: (
      <center>
        <img
          className="w-[50px] h-[50px]"
          src="https://cdn-icons-png.flaticon.com/128/5968/5968313.png"
          alt="mysql"
        />
      </center>
    ),
    type: "img",
  },
  {
    id: uuidv4(),
    name: "MongoDB",
    progress: "85",
    imageElement: (
      <center>
        <img
          className="w-[50px] h-[50px]"
          src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
          alt="mongoDB"
        />
      </center>
    ),
    type: "img",
  },
];

const programSkills = [
  {
    id: uuidv4(),
    name: "C++",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
    progress: "85",
  },
  {
    id: uuidv4(),
    name: "Python",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    progress: "80",
  },
  {
    id: uuidv4(),
    name: "Java",
    imageUrl: "https://cdn-icons-png.flaticon.com/128/226/226777.png",
    progress: "40",
  },
];

const toolsSkills = [
  {
    id: uuidv4(),
    name: "VS Code",
    progress: "100",
    imageElement: (
      <center>
        <img
          className="w-[50px] h-[50px]"
          src="data:image/png;base64,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"
          alt="vs"
        />
      </center>
    ),
    type: "img",
  },
  {
    id: uuidv4(),
    name: "Chrome",
    progress: "100",
    imageElement: (
      <center>
        <img
          className="w-[50px] h-[50px]"
          src="https://cdn-icons-png.flaticon.com/128/6125/6125000.png"
          alt="Chrome"
        />
      </center>
    ),
    type: "img",
  },
  {
    id: uuidv4(),
    name: "Github",
    progress: "80",
    iconElement: (
      <center>
        <i className="fa-brands fa-github text-[50px] text-slate-700"></i>
      </center>
    ),
    type: "icon",
  },
];

// const cloudSkills = [
//   {
//     id: uuidv4(),
//     name: "S3 Bucket",
//     progress: "40",
//     imageElement: (
//       <center>
//         <img
//           src="data:image/png;base64,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"
//           alt="aws s3 bucket"
//           className="w-[50px] h-[50px]"
//         />
//       </center>
//     ),
//     type: "img",
//   },
//   {
//     id: uuidv4(),
//     name: "AWS EC2",
//     progress: "45",
//     imageElement: (
//       <center>
//         <img
//           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAw1BMVEX2hTadUCX////v7u7/jTmORiL39/eZTiS4YCq4Xif9hzT7iDeUSiPddjHy8vL7+/vieDCZRxKVOwD1fye6i3fXczD1dQD28O71fCDWwrr2pHf74dWbSxv828v2p332gi/l1tCob1XjzMC4gGWaRQn/hiv25Nyyf2v1nm3fzcaxdlrq3tv1eBOUNADGoJL3lVvTdz76sozzy7iwb0/zh0L0wKWmXTW3UQD2uJiMIAD2mmTmo4fYbB71jk7Zgk3Vuq7TWwD9U7HoAAAEMklEQVR4nO2cfXeaMBTGg65xrTXRYoUpGGsdvm7Ot87Zbd33/1RLAgo6J3AMetly/+IcKfl578NzbzynQQUZpCiCymssr4m8pvK6GHsTtjpPzRZV8CQRSAUUJt3n3s1Hu+nBgSp0+07NuHmHTDbwMIEARYejTzXDEFAImY2mK7CuDNXpO45hbKE4lsm1Ra4IRYrj/oOPtIPiWJNBC58HRWRQGVhe48h18MHxm/DwWRbuAEoUceCKP0r8pIObUDEC7X8BHIEOlHz0JvrZCZH2oJCQvEtJ0icd3nQGFK5HmfahEGJC8tCgELJZuwUOihcRTa0LQ9FYKI5lt7m2UkP97UU48lIcfFBMAMWLiHgRY550uFwqnyIW7yLhTYmghG9NW9mZJ+6MvszmVlooYRA8WyQTqM7CqFVttpx5aaFEEQceVQ/VFQ2l9FjmCzTYyrOSamqXrcZGtGqVUON6TxCUKmWxALOXg7kVbwkHWHY76ImxUDhBjF+MYP1q2V+AmSbbLJxUUGKC2LT4KxYbCXwKh5OALN822G0pJZScIEQRzzdPywkzUo1Aoffpofw3kRbOhwoXvn88G0q06oGPpQjKqCiAEtlqugqhzi9fgFVue8F7dwyKHG1DBdptWRjLa9Xl88NuNFsEH+2A9KhPEdqtf0WD9ZyKb6O+fAEWmrmJzZOS8aLm3N5xL1oOuHcXw4VLKqGEnfLtK00CRYfPPd5Qbu+Q8MgJm64zg+LZmrRdjGOhOn3p3j6UCGZnIPQIFmu7fPmTUMNvvlOGUAhlIvRdlM0G74l4Dyq6HcO0MHwwTkApFXoYtsmzVQg5DnwKf7gGlNhibFqYHJhnIRlUFuULQu4TcRSqMHxd8VkHXy1TIkzk7xMlFMGdp9p3bks/1nPr7VqZklgTf4LgQ1531KvJ1Zht3/0sXS1TWywONawLX9qmoFy5Pwml3qf+wEJNDz3UonWJgcq4fAFWA+2vFpeprMu3tyKkTKWFuoCmolAViFAgy5cwUxCFrnzI+2ehQJYPpk9BzBRIKO1TQDOV54Z82fIlg4JZPohCL+lM5RkKptAhzuh6yMs1FEyf0g1Zv32KobSj51pTunx6RlcNBVLoIKG0T2mo/wJKCz3XUCAbst5iAd2MJiyfFjrM8uV58tSZyrPQQW6xQPqUhtJCTw6V4x9iQULBbDNa6HnWFMjygdw46ExpoauG0j6V6yEPJBTI8mmh5xoKZkOGmCmYQof4O7oun7YE1VAgMwUSCqbQIc7oIIc8DQVN6E4aqMsInaGFPN4GUENmjSmy3l56zjZT7K56ZU0xezm3UJHit5H433bTZmwze61dM1PM3qyCowkwz9avSXPtukV8+mSJjIXeWPrngMnzEgihHpVHrMSdl5Ch0BlbzvcOcUh63EV2mmL2dGXh42cFxUFlVT6TF47szgr6DTVCxXlt9jREAAAAAElFTkSuQmCC"
//           alt="aws EC2"
//           className="w-[50px] h-[50px]"
//         />
//       </center>
//     ),
//     type: "img",
//   },
//   {
//     id: uuidv4(),
//     name: "AWS Lambda",
//     progress: "35",
//     imageElement: (
//       <center>
//         <img
//           src="data:image/jpeg;base64,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"
//           alt="aws Lambda"
//           className="w-[50px] h-[50px]"
//         />
//       </center>
//     ),
//     type: "img",
//   },
// ];

const Skills = () => {
  return (
    <div className="min-h-[calc(100vh-76px)] py-5 px-10 sm:px-14 lg:px-32 font-[Roboto] pt-10 sm:pt-12 bg-slate-700">
      {/* Front-End Technologies */}

      <div className="py-3 pb-5">
        <h1 className="text-[18px] sm:text-[24px] text-white">
          Front-End Technologies
        </h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 py-3 gap-3">
          {frontEndSkills.map((skill) => (
            <li
              key={skill.id}
              className="relative text-center border border-slate-300 px-3 lg:px-14 py-3 rounded-md shadow-md space-y-2 bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-slate-700 opacity-0 hover:opacity-100 rounded-md z-50 flex justify-center items-center p-5 transition-all duration-300 delay-100">
                <div className="progress w-full h-5 bg-white rounded-lg">
                  <div
                    className={`rounded-lg ${skill.progress >= 75 ? 'bg-green-500' : skill.progress < 50 ? 'bg-red-600' : 'bg-yellow-400'} h-full`}
                    style={{ width: `${skill.progress}%` }}
                  >
                    {skill.progress}%
                  </div>
                </div>
              </div>

              {skill.type === "icon" && <>{skill.iconElement}</>}
              {skill.type === "img" && <>{skill.imageElement}</>}

              <h1 className="text-slate-600 text-[16px]">{skill.name}</h1>
            </li>
          ))}
        </ul>
      </div>

      {/* Back-End Technologies */}

      <div className="py-3 pb-5">
        <h1 className="text-[18px] sm:text-[24px] text-white">
          Back-End Technologies
        </h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 py-3 gap-3">
          {backEndSkills.map((skill) => (
            <li
              key={skill.id}
              className="relative text-center border border-slate-300 px-3 lg:px-14 py-3 rounded-md shadow-md space-y-2 bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-0 hover:opacity-100 rounded-md z-50 flex justify-center items-center p-5 transition-all duration-300 delay-100">
                <div className="progress w-full h-5 bg-white rounded-lg">
                  
                <div
                    className={`rounded-lg ${skill.progress >= 75 ? 'bg-green-500' : skill.progress < 50 ? 'bg-red-600' : 'bg-yellow-400'} h-full`}
                    style={{ width: `${skill.progress}%` }}
                  >
                    {skill.progress}%
                  </div>
                </div>
              </div>
              {skill.type === "icon" && <>{skill.iconElement}</>}
              {skill.type === "img" && <>{skill.imageElement}</>}
              <h1 className="text-slate-600 text-[16px]">{skill.name}</h1>
            </li>
          ))}
        </ul>
      </div>

      {/* Programming Languages */}

      <div className="py-3 pb-5">
        <h1 className="text-[18px] sm:text-[24px] text-white">
          Programming Languages
        </h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 py-3 gap-3">
          {programSkills.map((skill) => (
            <li
              key={skill.id}
              className="relative text-center border border-slate-300 px-3 lg:px-14 py-3 rounded-md shadow-md space-y-2 bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-0 hover:opacity-100 rounded-md z-50 flex justify-center items-center p-5 transition-all duration-300 delay-100">
                <div className="progress w-full h-5 bg-white rounded-lg">
                  
                <div
                    className={`rounded-lg ${skill.progress >= 75 ? 'bg-green-500' : skill.progress < 50 ? 'bg-red-600' : 'bg-yellow-400'} h-full`}
                    style={{ width: `${skill.progress}%` }}
                  >
                    {skill.progress}%
                  </div>
                </div>
              </div>
              <center>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-[50px] h-[50px]"
                />
              </center>
              <h1 className="text-slate-600 text-[16px]">{skill.name}</h1>
            </li>
          ))}
        </ul>
      </div>

      {/* Cloud Technologies */}
      {/* <div className="py-3 pb-5">
        <h1 className="text-[18px] sm:text-[24px] text-white">Cloud Technologies</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 py-3 gap-3">
        {cloudSkills.map((skill) => (
            <li
              key={skill.id}
              className="relative text-center border border-slate-300 px-3 lg:px-14 py-3 rounded-md shadow-md space-y-2 bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-0 hover:opacity-100 rounded-md z-50 flex justify-center items-center p-5 transition-all duration-300 delay-100">
                <div className="progress w-full h-5 bg-white rounded-lg">
                  <div
                    className={`rounded-lg ${skill.progress >= 75 ? 'bg-green-500' : skill.progress < 50 ? 'bg-red-600' : 'bg-yellow-400'} h-full`}
                    style={{ width: `${skill.progress}%` }}
                  >
                    {skill.progress}%
                  </div>
                </div>
              </div>
              {skill.type === "icon" && <>{skill.iconElement}</>}
              {skill.type === "img" && <>{skill.imageElement}</>}
              <h1 className="text-slate-600 text-[14px]">{skill.name}</h1>
            </li>
          ))}
          
        </ul>
      </div> */}

      {/* Tools Used */}

      <div className="py-3 pb-5">
        <h1 className="text-[18px] sm:text-[24px] text-white">Tools Used</h1>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 py-3 gap-3">
          {toolsSkills.map((skill) => (
            <li
              key={skill.id}
              className="relative text-center border border-slate-300 px-3 lg:px-10 py-3 rounded-md shadow-md space-y-2 bg-white transition-all duration-300 cursor-pointer"
            >
              <div className="absolute top-0 right-0 left-0 bottom-0 bg-black opacity-0 hover:opacity-100 rounded-md z-50 flex justify-center items-center p-5 transition-all ease-in-out duration-500">
                <div className="progress w-full h-5 bg-white rounded-lg">
                  
                <div
                    className={`rounded-lg ${skill.progress >= 75 ? 'bg-green-500' : skill.progress < 50 ? 'bg-red-600' : 'bg-yellow-400'} h-full`}
                    style={{ width: `${skill.progress}%` }}
                  >
                    {skill.progress}%
                  </div>
                </div>
              </div>
              {skill.type === "icon" && <>{skill.iconElement}</>}
              {skill.type === "img" && <>{skill.imageElement}</>}
              <h1 className="text-slate-600 text-[16px]">{skill.name}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
