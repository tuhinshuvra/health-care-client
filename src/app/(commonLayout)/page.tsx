import Hero from "@/components/modules/Home/Hero";
import Specialties from "@/components/modules/Home/Specialties";
import Steps from "@/components/modules/Home/Steps";
import Testimonials from "@/components/modules/Home/Testimonials";
import TopRatedDoctors from "@/components/modules/Home/Toprateddoctors";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>RealHealth Doc | Trusted Online Healthcare Platform</title>
        <meta
          name="description"
          content="Book appointments, consult experienced doctors, receive e-prescriptions, and manage your healthcare online."
        />

        <meta
          name="keywords"
          content="doctor appointment, online consultation, healthcare, telemedicine"
        />

        <meta
          property="og:title"
          content="RealHealth Doc | Trusted Online Healthcare Platform"
        />

        <meta
          property="og:description"
          content="Book appointments and connect with trusted healthcare professionals online."
        />

        <meta property="og:type" content="website" />

        <link rel="canonical" href="https://realhealthdoc.com" />
      </Head>

      <main>
        <Hero />
        <Specialties />
        <TopRatedDoctors />
        <Steps />
        <Testimonials />
      </main>
    </>
  );
}
