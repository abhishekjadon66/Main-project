import Head from "next/head";
import Coursel1 from "../components/Slider1";
import Link from "next/link";
import Script from "next/script";


export default function Home({ blogs }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />

        <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

        <meta
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />

        <title>Cognicode</title>

        <meta property="og:title" content="Homepage | Atom Template" />

        <meta property="og:locale" content="en_US" />

        <link rel="canonical" href="//" />
        <link rel="shortcut icon" href="../images/favicon.ico" />

        <meta property="og:url" content="//" />

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

        <meta name="theme-color" content="#5540af" />

        <meta property="og:site_name" content="Atom Template" />

        <meta property="og:image" content="//assets/img/social.jpg" />

        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:site" content="@tailwindmade" />

        <link
          crossorigin="crossorigin"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />

        <link
          as="style"
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="preload"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
          rel="stylesheet"
        />

        <link
          crossorigin="anonymous"
          href="/assets/styles/main.min.css"
          media="screen"
          rel="stylesheet"
        />

        <script
          defer
          src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"
        ></script>

        <script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        ></script>
      </Head>
      <Coursel1 />
      <div>
        <div className="bg-grey-50" id="about">
          <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
            <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
              <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                About?
              </h2>
              <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Cognicode IT Solutions
              </h4>
              <p className="pt-6 font-body leading-relaxed text-grey-20">
                Welcome to Cognicode IT Solutions, This company working in WEB
                DEVELOPMENT, APP DEVELOPMENT, THESIS WRITING, ANDROID & IOS and
                all type thesis writing are available.
              </p>
              <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                <div className="flex items-center justify-center sm:justify-start">
                  <p className="font-body text-lg font-semibold uppercase text-grey-20">
                    Connect with me
                  </p>
                  <div className="hidden sm:block">
                    <i className="bx bx-chevron-right text-2xl text-primary"></i>
                  </div>
                </div>
                <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
                  <a href="/">
                    <i className="bx bxl-facebook-square text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-twitter text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-dribbble text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-linkedin text-2xl text-primary hover:text-yellow"></i>
                  </a>
                  <a href="/" className="pl-4">
                    <i className="bx bxl-instagram text-2xl text-primary hover:text-yellow"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
              <div>
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    HTML & CSS
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    85%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Python
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    70%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    Javascript
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    98%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: "98%" }}
                  ></div>
                </div>
              </div>
              <div className="pt-6">
                <div className="flex items-end justify-between">
                  <h4 className="font-body font-semibold uppercase text-black">
                    React.js
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    91%
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <div
                    className="h-3 rounded-full bg-primary"
                    style={{ width: "91%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-20" id="services">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            In this company working
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            These are the services providing
          </h3>

          <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/assets/img/icon-development-white.svg"
                    alt="development icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/assets/img/icon-development-black.svg"
                    alt="development icon"
                  />
                </div>
              </div>
              <Link href="/web" className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  <span>Web developments</span>
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Link>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/assets/img/icon-content-white.svg"
                    alt="content marketing icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/assets/img/icon-content-black.svg"
                    alt="content marketing icon"
                  />
                </div>
              </div>
              <Link href="/thesis" className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Thesis Writing
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Link>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/assets/img/icon-mobile-white.svg"
                    alt="Mobile Application icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/assets/img/icon-mobile-black.svg"
                    alt="Mobile Application icon"
                  />
                </div>
              </div>
              <Link href="/android" className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Android & IOS Development
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Link>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/assets/img/icon-email-white.svg"
                    alt="Email Marketing icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/assets/img/icon-email-black.svg"
                    alt="Email Marketing icon"
                  />
                </div>
              </div>
              <Link href="/email" className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Email Development
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Link>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/assets/img/icon-design-white.svg"
                    alt="Theme Design icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/assets/img/icon-design-black.svg"
                    alt="Theme Design icon"
                  />
                </div>
              </div>
              <Link href="/graphics" className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Graphic Design
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Link>
            </div>
            <div className="group rounded px-8 py-12 shadow hover:bg-primary">
              <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">
                  <img
                    src="/assets/img/icon-graphics-white.svg"
                    alt="Graphic Design icon"
                  />
                </div>
                <div className="block group-hover:hidden">
                  <img
                    src="/assets/img/icon-graphics-black.svg"
                    alt="Graphic Design icon"
                  />
                </div>
              </div>
              <Link href="/webdesign" className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                  Web Design
                </h3>
                <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-20" id="statistics">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Check into cognicode it solutions
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Here's what I have done with the past
          </h3>

          <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
            <a
              href="/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/cogni2.jpeg"
                className="w-full shadow"
                alt="Some occured"
              />
            </a>
            <a
              href="/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img src="/4.jpeg" className="w-full shadow" alt="Some occured" />
            </a>
            <a
              href="/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img
                src="/technical.jpg"
                className="w-full shadow"
                alt="Some occured"
              />
            </a>
            <a
              href="/"
              className="mx-auto transform transition-all hover:scale-105 md:mx-0"
            >
              <img src="/2.jpg" className="w-full shadow" alt="Some occured" />
            </a>
          </div>
        </div>

        <div className="bg-grey-50" id="career">
          <div className="container py-16 md:py-20">
            <div className="mx-auto w-full sm:w-3/4 lg:w-full">
              <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                My latest clients
              </h2>
              <div className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                <span className="m-8 block">
                  <img
                    src="/assets/img/logo-coca-cola.svg"
                    alt="client logo"
                    className="mx-auto block h-12 w-auto"
                  />
                </span>
                <span className="m-8 block">
                  <img
                    src="/assets/img/logo-apple.svg"
                    alt="client logo"
                    className="mx-auto block h-12 w-auto"
                  />
                </span>

                <span className="m-8 block">
                  <img
                    src="/assets/img/logo-netflix.svg"
                    alt="client logo"
                    className="mx-auto block h-12 w-auto"
                  />
                </span>

                <span className="m-8 block">
                  <img
                    src="/assets/img/logo-amazon.svg"
                    alt="client logo"
                    className="mx-auto block h-12 w-auto"
                  />
                </span>

                <span className="m-8 block">
                  <img
                    src="/assets/img/logo-stripe.svg"
                    alt="client logo"
                    className="mx-auto block h-12 w-auto"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-20" id="products">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Cognicode products
          </h2>
          <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Service based products
          </h3>

          <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
            <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0">
                    <img
                      src="/mtech.png"
                      className="h-auto w-32"
                      alt="company logo"
                    />
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                  <div className="mt-1 flex">
                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                    <div className="md:-mt-1 md:pl-8">
                      <span className="block font-body font-bold text-grey-40">
                        Rs. 30,000.00
                      </span>
                      <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                        M.Tech Thesis Writing Services
                      </span>
                      <div className="pt-2">
                        <span className="block font-body text-black">
                          We provide upgrad Thesis Writing services with LJMU
                          and European Formatting Style submission. Provide the
                          following co-service like.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0">
                    <img
                      src="/data.jpg"
                      className="h-auto w-32"
                      alt="company logo"
                    />
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                  <div className="mt-1 flex">
                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                    <div className="md:-mt-1 md:pl-8">
                      <span className="block font-body font-bold text-grey-40">
                        Rs. 15,000.00
                      </span>
                      <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                        Data Mining Thesis Writing Services
                      </span>
                      <div className="pt-2">
                        <span className="block font-body text-black">
                          Native writers who are experienced in writing Research
                          papers Thesis & dissertations. Formatting rules,
                          Language & Grammer, Authenticity, Citation,
                          Punctuality.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
              <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                  <span className="shrink-0">
                    <img
                      src="/sceince.jpg"
                      className="h-auto w-32"
                      alt="company logo"
                    />
                  </span>
                  <div className="relative ml-3 hidden w-full md:block">
                    <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <div className="relative flex md:pl-18">
                  <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                  <div className="mt-1 flex">
                    <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                    <div className="md:-mt-1 md:pl-8">
                      <span className="block font-body font-bold text-grey-40">
                        Rs. 25,000.00
                      </span>
                      <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                        NLP Thesis Writing Services
                      </span>
                      <div className="pt-2">
                        <span className="block font-body text-black">
                          Research Articles writing assistance & publication
                          support. Suggestion of university and Mentor in
                          research interests.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"
          style={{ backgroundImage: "url(/assets/img/experience-figure.png)" }}
          id="statistics"
        >
          <div className="container">
            <div className="mx-auto w-5/6 bg-white py-16 shadow md:w-11/12 lg:py-20 xl:py-24 2xl:w-full">
              <div className="grid grid-cols-2 gap-5 md:gap-8 xl:grid-cols-4 xl:gap-5">
                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                  <div>
                    <img
                      src="/assets/img/icon-project.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon project"
                    />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      20
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Finished Projects
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center text-center md:flex-row md:text-left">
                  <div>
                    <img
                      src="/assets/img/icon-award.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon award"
                    />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      3
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Awards Won
                    </h4>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                  <div>
                    <img
                      src="/assets/img/icon-happy.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon happy clients"
                    />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      6000
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Happy Clients
                    </h4>
                  </div>
                </div>

                <div className="mt-6 flex flex-col items-center justify-center text-center md:mt-10 md:flex-row md:text-left lg:mt-0">
                  <div>
                    <img
                      src="/assets/img/icon-puzzle.svg"
                      className="mx-auto h-12 w-auto md:h-20"
                      alt="icon puzzle"
                    />
                  </div>
                  <div className="pt-5 md:pl-5 md:pt-0">
                    <h1 className="font-body text-2xl font-bold text-primary md:text-4xl">
                      99
                    </h1>
                    <h4 className="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                      Bugs Fixed
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-grey-50" id="blog">
          <div className="container py-16 md:py-20">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
              I also like to Blog
            </h2>
            <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
              Check out my latest blog
            </h4>
            <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">
              <a href="/post" className="shadow">
                <div
                  style={{ backgroundImage: "url(/web.jpeg)" }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                >
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <span className="block font-body text-lg font-semibold text-black">
                    Software Development
                  </span>
                  <span className="block pt-2 font-body text-grey-20">
                    Software development is the work involved in developing a
                    website for the Internet (World Wide Web) or an intranet (a
                    private network). Web development can range from developing
                    a simple single static page of plain text to complex web
                    applications, electronic businesses, and social network
                    services
                  </span>
                </div>
              </a>

              <Link href="/post" className="shadow">
                <div
                  style={{ backgroundImage: "url(/app.jpeg)" }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                >
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <span className="block font-body text-lg font-semibold text-black">
                    Android & IOS Development
                  </span>
                  <span className="block pt-2 font-body text-grey-20">
                    Mobile application development is the process of creating
                    software applications that run on a mobile device, and a
                    typical mobile application utilizes a network connection to
                    work with remote computing resources.
                  </span>
                </div>
              </Link>

              <Link href="/post" className="shadow">
                <div
                  style={{ backgroundImage: "url(/graphics.jpeg)" }}
                  className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72"
                >
                  <span className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                  <span className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base">
                    Read More
                  </span>
                </div>
                <div className="bg-white py-6 px-5 xl:py-8">
                  <span className="block font-body text-lg font-semibold text-black">
                    Graphics Designing
                  </span>
                  <span className="block pt-2 font-body text-grey-20">
                    Graphic designers create visual communications such as
                    adverts, branding, publicity materials and magazine layouts.
                    Graphic designers (who may also be known as graphic artists)
                    utilise graphic design skills to create media products such
                    as magazines, labels, advertising and signage.
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="container py-16 md:py-20" id="contact">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Here's a contact form
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Have Any Questions?
          </h4>
          <div className="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
            <p className="font-body text-grey-10">
              Any Queries for Regarding the service
            </p>
          </div>
          <form className="mx-auto w-full pt-10 sm:w-3/4">
            <div className="flex flex-col md:flex-row">
              <input
                className="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
                placeholder="Name"
                type="text"
                id="name"
              />
              <input
                className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
                placeholder="Email"
                type="text"
                id="email"
              />
            </div>
            <textarea
              className="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
              placeholder="Message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
            <button className="mt-6 flex items-center justify-center rounded bg-primary px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20">
              Send
              <i className="bx bx-chevron-right relative -right-2 text-3xl"></i>
            </button>
          </form>
          <div className="flex flex-col pt-16 lg:flex-row">
            <div className="w-full border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3">
              <div className="flex items-center">
                <i className="bx bx-phone text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Phone
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                +91-7000515617
              </p>
            </div>
            <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-envelope text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Email
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                cognicodeitsolution@gmail.com
              </p>
            </div>
            <div className="w-full border-l-2 border-t-0 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8 lg:w-1/3 lg:border-l-0 lg:border-t-2">
              <div className="flex items-center">
                <i className="bx bx-map text-2xl text-grey-40"></i>
                <p className="pl-2 font-body font-bold uppercase text-grey-40 lg:text-lg">
                  My Address
                </p>
              </div>
              <p className="pt-2 text-left font-body font-bold text-primary lg:text-lg">
                Gwalior(M.P.) Tulsi Nagar near at Hotel Silver OAK
              </p>
            </div>
          </div>
        </div>

        <div
          className="h-72 bg-cover bg-center bg-no-repeat sm:h-64 md:h-72 lg:h-96"
          style={{ backgroundImage: "url(/assets/img/map.png)" }}
        ></div>
      </div>
      <Script src="/assets/js/main.js"></Script>
    </>
  );
}
