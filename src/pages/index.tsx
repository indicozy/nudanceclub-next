import { IconBrandInstagram } from "@tabler/icons-react";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ArrowDown from "~/components/ArrowDown";
import Logo from "~/components/logo";
import { navigation } from "~/data/navigation";

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
      <header className="fixed z-10 w-screen bg-[#ebeae9] ">
        <div className="mx-4 flex h-20 items-center justify-between sm:mx-16">
          <div>
            <Logo />
          </div>
          <div>
            <Link
              className="text-xl font-semibold underline"
              href={"https://www.instagram.com/nudanceclub/"}
            >
              <IconBrandInstagram size={32} />
            </Link>
          </div>
        </div>
      </header>
      <div className="h-20"></div>
      <section className="relative">
        <div className="flex flex-col-reverse justify-between sm:flex-row">
          <div className="sm:h-[calc(100vh-5rem)] sm:w-[60%]">
            <div className="hidden w-full justify-end sm:flex">
              <div>
                {navigation.map((n, k) => (
                  <Link href={n.href} key={k}>
                    <div className="w-60 border-b border-[#454c52] py-2 text-right text-xl font-semibold uppercase">
                      {n.name}{" "}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            <div className="sm:ml-16">
              <h1 className="my-4 border-y border-y-[#454c52] py-8 font-hor text-5xl font-bold sm:text-9xl">
                NU dance club
              </h1>
              <p className="text-right text-sm font-medium text-gray-600 sm:text-2xl">
                A way of creative life since 2010
              </p>
            </div>
            <div className="mt-6 flex sm:ml-16">
              <ArrowDown />
            </div>
          </div>
          <div className="shadow-2xl shadow-yellow-500 sm:block sm:w-[38%]">
            <Image
              src={"/images/6.webp"}
              height={1000}
              width={1000}
              alt="nu dance club"
            />
          </div>
        </div>
      </section>
      <section className="my-20 mr-8" id="about">
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <h2 className="mb-8 text-center font-hor text-4xl font-bold">
            About us
          </h2>
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
            <div className="m-8">
              <Image
                src={"/images/3.webp"}
                height={1000}
                width={1000}
                alt="nu dance club"
                className="shadow-2xl shadow-cyan-500"
              />
            </div>
            <div>
              <div className="ml-2 space-y-6 border-l border-l-black py-4 pl-4 italic">
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
                  Moreover, NU Dance Club has also been actively participating
                  in various dance competitions at both the national and
                  international levels, representing the university with its
                  outstanding performances. Our club has also always been a
                  source of entertainment for the university community,
                  delivering mesmerizing and captivating performances at various
                  university events.
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <span className="font-medium">Aruzhan Umar</span> - Head of NU
                  Dance Club
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="vote"
        className="bg-red-400 px-2 py-8 text-center text-gray-900 sm:px-0"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="mb-2 text-center font-hor text-2xl font-bold">
            VOTE FOR NU DANCE CLUB!
          </div>
          <div className="mb-8">
            Please vote for us at NU Student awards! Check you email and choose
            us at:
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col items-center">
              <Image
                src={"/images/12.webp"}
                height={600}
                width={540}
                alt="nu dance club"
              />
              <div className="mt-6 max-w-sm text-2xl font-semibold">
                SMALL-SCALE ENTERTAINING EVENT OF THE YEAR
              </div>
              <div className="italic">NU DANCE CUP BY NU DANCE CLUB</div>
            </div>

            <div className="flex flex-col items-center">
              <Image
                src={"/images/11.webp"}
                height={600}
                width={600}
                alt="nu dance club"
              />
              <div className="mt-6 max-w-sm text-2xl font-semibold">
                LARGE-SCALE ENTERTAINING EVENT OF THE YEAR
              </div>
              <div className="italic">MOMENTS OF JOY: FIRST NUDC CONCERT</div>
            </div>
          </div>
        </div>
      </section>
      <section id="events">
        <div className="mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 place-items-center sm:grid-cols-2">
            <div className="m-8">
              <Image
                src={"/images/3.webp"}
                height={1000}
                width={1000}
                alt="nu dance club"
                className="shadow-2xl shadow-cyan-500"
              />
            </div>
            <div>
              <h2 className="mb-8 font-hor text-4xl font-bold">About us</h2>
              <div className="ml-2 space-y-6 border-l border-l-black py-4 pl-4 italic">
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
                  Moreover, NU Dance Club has also been actively participating
                  in various dance competitions at both the national and
                  international levels, representing the university with its
                  outstanding performances. Our club has also always been a
                  source of entertainment for the university community,
                  delivering mesmerizing and captivating performances at various
                  university events.
                </div>
              </div>
              <div>
                <div className="mt-4">
                  <span className="font-medium">Aruzhan Umar</span> - Head of NU
                  Dance Club
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="recruitment" className="">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="order-2 mr-auto place-self-center sm:order-1 lg:col-span-7">
            <h1 className="mb-4 mt-4 max-w-2xl font-hor text-2xl font-extrabold leading-none tracking-tight sm:mt-0  md:text-5xl xl:text-4xl">
              Recruitment
            </h1>
            <p className="mb-6 max-w-2xl font-light md:text-lg lg:mb-8 lg:text-lg">
              NU Dance Club&#8217;s recruitment takes place at the beginning of
              every semester, including the summer term.
            </p>
            <p className="mb-6 max-w-2xl font-light md:text-lg lg:mb-8 lg:text-lg">
              We have our classes at 20:00 every Monday, Wednesday, and Friday.
              Follow us on Instagram to know when the recruitment for the next
              semester will begin
            </p>
            <Link
              href="https://www.instagram.com/nudanceclub/"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg py-3 text-center text-base font-medium underline focus:ring-4"
            >
              Instragram
            </Link>
          </div>
          <div className="order-1 sm:order-2 lg:col-span-5 lg:mt-0 lg:flex">
            <Image
              src={"/images/11.webp"}
              height={1000}
              width={1000}
              alt="nu dance club"
            />
          </div>
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
