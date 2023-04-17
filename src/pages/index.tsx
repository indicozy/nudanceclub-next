import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "~/components/ArrowDown";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>NU Dance Club</title>
        <meta
          name="description"
          content="NU Dance Club is a vibrant community of passionate dancers at the university. Join us to learn and explore various dance styles, participate in exciting events, and connect with like-minded individuals who share your love for dancing."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative h-screen overflow-hidden">
        <div className="absolute left-0 top-0 sm:left-0 sm:top-8">
          <h1 className="font-hor text-4xl font-bold sm:text-6xl">
            NU dance club
          </h1>
          <p className="text-sm font-medium text-gray-600 sm:text-lg">
            A way of creative life since 2010. All rights reserved.
          </p>
        </div>
        <div className="absolute left-8 top-32 ml-12 mt-12 text-sm text-gray-600 sm:left-80 sm:top-20 sm:text-lg">
          <div className="relative left-0 top-0 h-screen w-screen">
            <div className="absolute">
              <div className="group relative -left-[2rem] top-[0rem] sm:top-20">
                <span className="absolute left-0 top-0 font-hor font-bold group-hover:text-black">
                  practicing
                </span>
                <span className="absolute left-6 top-6 w-[14rem] sm:left-10 sm:top-10 sm:w-[40rem]">
                  <Image
                    src="/images/1.webp"
                    width={500}
                    height={500}
                    alt="NU dance club"
                    className="shadow-2xl"
                  />
                </span>
              </div>
              <div className="group relative left-24 top-[10.5rem] sm:left-[calc(36rem)] sm:top-[12rem]">
                <span className="absolute left-32 top-0 font-hor font-bold group-hover:text-black sm:left-0">
                  partying
                </span>
                <span className="absolute left-6 top-6 w-[12rem] sm:left-10 sm:top-10 sm:w-[20rem]">
                  <Image
                    src="/images/10.webp"
                    width={500}
                    height={500}
                    alt="NU dance club"
                    className="shadow-2xl"
                  />
                </span>
              </div>
              <div className="group relative -left-8 top-[30rem] sm:left-[calc(64rem)] sm:top-8">
                {/* <div className="group relative left-20 top-[9rem] sm:left-[calc(36rem)] sm:top-[12rem]"> */}
                <span className="absolute left-0 top-0 font-hor font-bold group-hover:text-black">
                  dancing
                </span>
                <span className="absolute left-6 top-6 w-[14rem] sm:left-10 sm:top-10 sm:w-[40rem]">
                  <Image
                    src="/images/9.webp"
                    width={500}
                    height={500}
                    alt="NU dance club"
                    className="shadow-2xl"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-80 left-8 mb-8 sm:bottom-24 sm:mb-0">
          <ArrowDown />
        </div>
      </section>
      <section className="my-20 mr-8">
        <h2 className="font-hor text-4xl font-bold">About us</h2>
        <div className="grid grid-cols-2">
          <div></div>
          <div>
            <div className="ml-2 space-y-4 border-l border-l-black py-4 pl-4 italic">
              <div>
                NUDC has been an active student club ever since Nazarbayev
                University was founded.
              </div>
              <div>
                NU Dance Club continuously shows its genuine commitment to
                promoting dance culture among the students of NU by organizing
                various events including dance festivals and contests like the
                NU Dance Cup, workshops, and performances, to showcase the
                beauty of dance and inspire students to learn and explore
                various dance styles.
              </div>
              <div>
                Moreover, NU Dance Club has also been actively participating in
                various dance competitions at both the national and
                international levels, representing the university with its
                outstanding performances. Our club has also always been a source
                of entertainment for the university community, delivering
                mesmerizing and captivating performances at various university
                events.
              </div>
            </div>
            <div>
              <div>
                <span>Aruzhan Umar</span> - Head of NU Dance Club
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="vote">
        <div className="text-center font-hor text-2xl font-bold">
          VOTE FOR NU DANCE CLUB
        </div>
        <div>
          SMALL-SCALE ENTERTAINING EVENT OF THE YEAR &#8211; NU DANCE CUP BY NU
          DANCE CLUB
        </div>
        <div>
          LARGE-SCALE ENTERTAINING EVENT OF THE YEAR &#8211; MOMENTS OF JOY:
          FIRST NUDC CONCERT
        </div>
      </section>
      <section id="recruitment">
        <div>
          NU Dance Club&#8217;s recruitment takes place at the beginning of
          every semester, including the summer term.
        </div>
        <div>
          We have our classes at 20:00 every Monday, Wednesday, and Friday.
          Follow us on Instagram to know when the recruitment for the next
          semester will begin
        </div>
        <div>
          <Link href={"https://www.instagram.com/nudanceclub"}>Instagram</Link>
        </div>
      </section>
      <footer className="my-4">
        <div className="text-center">
          Made with ❤️ by{" "}
          <Link
            className="font-medium underline"
            href={"https://github.com/indicozy"}
          >
            indicozy
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Home;
