import Head from "next/head";

import Navbar from "../components/Navbar/Navbar";
import Main from "../components/Main/Main";
import CustomerCard from "../components/CustomerCard/CustomerCard";
import SectionDescription from "../components/SectionDescription/SectionDescription";
import TeamCard from "../components/TeamCard/TeamCard";
import Section from "../components/Section//Section";
import ContactForm from "../components/ContactForm/ContactForm";

export default function Home() {
  const customerCards = [
    {
      image: "/azeron.png",
      shortDescription:
        "Azeron produces uniquely designed ergonomic computer game controllers that make gaming especially convenient",
      description:
        "Full IT infrastructure audit and modernisation including CI/CD pipelines, remote-to-site VPN, site-to-site VPN, smart backup soultions and infrastructure as a code ",
    },
    {
      image: "/dpd.png",
      shortDescription:
        "DPD is a leading company on the market of parcel and shipment delivery in the Baltic States and Europe alike.",
      description:
        "Development and implementation of microservice architecture. solutions to networking issues, secure implementation of Remote to Site VPN",
    },
    {
      image: "/latelectrics.png",
      shortDescription:
        "Latelectrics helping their clients to automate, develop and implement conveyor systems",
      description:
        "A platform that allows companies to effectively integrate shipment digitization, sorting and tracking functionality into existing infrastructure.",
    },
  ];

  const teamMembers = [
    {
      image: "",
      title: "Co-Founder / CEO  ",
      name: "Sergejs Zikovs",
    },
    {
      image: "",
      title: "Co-Founder / CTO     ",
      name: "Kristaps Felzenbergs",
    },
    {
      image: "",
      title: "DevOps Engineer ",
      name: "Oskars Birģelis",
    },
  ];
  return (
    <div className="flex flex-col items-center  min-h-screen  bg-black ">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />

        <title>RoutedIn</title>
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Podkova&family=Roboto:wght@500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />

      <Main />

      <div className="w-full lg:px-[10%] px-4">
        <Section id={"services"}>
          {/* section paragraph/header */}
          <SectionDescription
            number={"01"}
            title={"Services"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie lacus aliquam aliquam nibh sed ac vestibulum nibh mi. In lorem risus natoque enim venenatis enim vestibulum. Urna interdum massa velit, penatibus amet, mattis arcu. Arcu orci, tellus, et vel, ornare in. Eget mauris, at malesuada vulputate odio id at integer. Imperdiet viverra nulla cras ipsum ullamcorper vitae. Duis dolor massa facilisis purus nulla nulla quis."
            }
          />

          {/* cards */}

          <div className="w-full    flex flex-col lg:gap-10 gap-5  ">
            <div className=" w-full bg-grey lg:p-12 p-10 grid lg:grid-cols-[1fr,96px] grid-cols-[1fr,mincontent]  ">
              <div>
                <div className="text-2xl font-roboto text-white mb-4">
                  Title 2
                </div>
                <ul className="list-disc list-inside text-white text-4.5 mb-12 ">
                  <li>Analysis of current IT infrastructure</li>
                  <li>Definition of improvement scope</li>
                  <li>Adaption of secure remote work</li>
                </ul>
              </div>
              <img src="/audit.png" alt="" />
              <span className="justify-self-end font-podkova text-4xl text-white col-span-2 ">
                Consulting & Audit
              </span>
            </div>
            <div className=" w-full bg-grey p-12 grid grid-cols-[1fr,96px]  ">
              <div>
                <div className="text-2xl font-roboto text-white mb-4">
                  Title 2
                </div>
                <ul className="list-disc list-inside text-white text-4.5 mb-12 ">
                  <li>Secure remote work solutions implementation</li>
                  <li>
                    Implementation of IT infrastructure process improvement
                    solutions
                  </li>
                </ul>
              </div>
              <img src="/infrastructure.png" alt="" />
              <span className="justify-self-end font-podkova text-4xl text-white col-span-2 ">
                Consulting & Audit
              </span>
            </div>
          </div>

          {/* technology stack */}

          <div className="w-full lg:col-span-2 lg:mt-44    grid lg:grid-cols-2 gap-x-40 justify-between">
            <div className="lg:col-span-2 lg:relative left-20 mb-20">
              <h1 className="text-5xl font-podkova text-white	">
                Technology stack
              </h1>
              <h2 className="text-base text-green font-roboto">
                DevOPS / CloudOPS / SecOPS
              </h2>
            </div>

            <img className="lg:relative left-20" src="/tech_stack.png" alt="" />
            <h1 className="text-white lg:text-16 text-[48px] text-right ">
              Core capabilities & Skills
            </h1>
          </div>
        </Section>

        <Section id={"customers"}>
          <SectionDescription
            number={"02"}
            title={"Our customers"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie lacus aliquam aliquam nibh sed ac vestibulum nibh mi. In lorem risus natoque enim venenatis enim vestibulum. Urna interdum massa velit, penatibus amet, mattis arcu. Arcu orci, tellus, et vel, ornare in. Eget mauris, at malesuada vulputate odio id at integer. Imperdiet viverra nulla cras ipsum ullamcorper vitae. Duis dolor massa facilisis purus nulla nulla quis."
            }
          />
          {/* customer card */}
          <div className="flex flex-col  lg:gap-20 gap-10 ">
            {customerCards.map((card, id) => (
              <CustomerCard
                key={id}
                image={card.image}
                shortDescription={card.shortDescription}
                description={card.description}
              />
            ))}
          </div>
        </Section>

        <Section id={"team"}>
          <SectionDescription
            number={"03"}
            title={"team"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie lacus aliquam aliquam nibh sed ac vestibulum nibh mi. In lorem risus natoque enim venenatis enim vestibulum. Urna interdum massa velit, penatibus amet, mattis arcu. Arcu orci, tellus, et vel, ornare in. Eget mauris, at malesuada vulputate odio id at integer. Imperdiet viverra nulla cras ipsum ullamcorper vitae. Duis dolor massa facilisis purus nulla nulla quis."
            }
          />

          {/* team cards */}

          <div className="text-white grid desktop:grid-cols-2 justify-center gap-y-8">
            {teamMembers.map((member, id) => (
              <TeamCard
                key={id}
                image={member.image}
                title={member.title}
                name={member.name}
              />
            ))}
          </div>
        </Section>
        <Section id={"contact"}>
          <SectionDescription
            number={"04"}
            title={"Contact us"}
            content={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie lacus aliquam aliquam nibh sed ac vestibulum nibh mi. In lorem risus natoque enim venenatis enim vestibulum. Urna interdum massa velit, penatibus amet, mattis arcu. Arcu orci, tellus, et vel, ornare in. Eget mauris, at malesuada vulputate odio id at integer. Imperdiet viverra nulla cras ipsum ullamcorper vitae. Duis dolor massa facilisis purus nulla nulla quis."
            }
          />

          <ContactForm />
        </Section>
      </div>
    </div>
  );
}
