import { useState, useEffect } from "react";
import bannerImage1 from "../assets/image/banner1.png";
import bannerImage2 from "../assets/image/banner2.png";
import backtohome from "../assets/image/backtohome.png";
import interviewbanner from "../assets/image/interviewbanner.png";
import sustainable from "../assets/image/sustainable.png";
import innovative from "../assets/image/innovative.png";
import future from "../assets/image/future.png";
import accaflashcard from "../assets/image/accaflashcard.png";
import videoicon from "../assets/image/videoicon.png";
import { useNavigate, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Impactfulcv from "../assets/image/Impactfulcv.jpeg";
import firstimpression from "../assets/image/firstimpression.jpeg";
import linkedin from "../assets/image/linkedin.jpeg";
import dressing from "../assets/image/dressing.jpeg";
import crafting1 from "../assets/image/crafting1.png";
import questions1 from "../assets/image/questions1.png";
import stregnth from "../assets/image/stregnth.jpeg";
import learning from "../assets/image/learning.jpeg";
import company from "../assets/image/company.jpeg";
import conversation from "../assets/image/conversation.jpeg";
import expertise from "../assets/image/expertise.jpeg";
import asking2 from "../assets/image/asking2.png";
import practice from "../assets/image/practice.jpeg";
import sample from "../assets/image/sample.pdf";
import car from "../assets/image/car.pdf";
import kad from "../assets/image/kad.pdf";
import dla from "../assets/image/dla.pdf";
import reflect from "../assets/image/reflect.png";
import { icon } from "@fortawesome/fontawesome-svg-core";

const Interview = () => {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const location = useLocation();
  const currentRoute = location.pathname;
  const [userCountry, setUserCountry] = useState<string | null>(null);

  // Determine user geolocation via IP on mount
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.country_code) {
          setUserCountry(data.country_code);
        } else {
          setUserCountry(null);
        }
      })
      .catch((err) => {
        console.error("Geolocation fetch error:", err);
        setUserCountry(null);
      });
  }, []);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const theme = e.dataTransfer.getData("theme");

    if (theme === "sustainable") navigate("/sustainable-business");
    else if (theme === "innovative") navigate("/innovative-tech");
    else if (theme === "future") navigate("/future-skills");
  };

  const videos = [
    {
      id: "video1",
      img: Impactfulcv,
      title: "Create an impactful CV",
      desc: "Craft a CV that stands out and showcases your skills and experience.",
      alt: "Man in a white shirt speaking about creating an impactful CV",
      iconLabel: "Play video on creating an impactful CV",
      additionalInfo: (
        <a
          id="download-vid1"
          href={sample}
          target="_blank"
          rel="noopener noreferrer"
          className=" underline"
          style={{ color: "#c80000" }}
        >
          Download our sample introductory letter and email template (PDF file,
          59.8 KB)
        </a>
      ),
      urls: {
        india: "https://www.youtube.com/embed/6-liW6XjIHI",
        global:
          "https://www.youtube.com/embed/gSPoXh-NYso?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=2",
        china:
          "https://play.webvideocore.net/popplayer.php?it=4j7fhilmxwcg&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video2",
      img: firstimpression,
      title: "Make a great first impression",
      desc: "Learn how to build confidence and present yourself professionally for interviews.",
      alt: "Woman in a white shirt speaking about making a great first impression",
      iconLabel: "Play video on making a great first impression",
      urls: {
        india: "https://www.youtube.com/embed/La_bgTB2KpQ",
        global:
          "https://www.youtube.com/embed/w3z2luoImbA?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=4",
        china:
          "https://play.webvideocore.net/popplayer.php?it=aljoltv1x28k&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video3",
      img: linkedin,
      title: "Crafting a strong LinkedIn profile",
      desc: "Learn to craft a powerful LinkedIn profile that gets you noticed.",
      alt: "Woman and man on split screen speaking about crafting a strong LinkedIn profile",
      iconLabel: "Play video on crafting a strong LinkedIn profile",
      urls: {
        india:
          "https://www.youtube-nocookie.com/embed/VOj5X9UM6u0?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=11",
        global:
          "https://www.youtube.com/embed/GOZZWuxafIM?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=5",
        china:
          "https://play.webvideocore.net/popplayer.php?it=2tbit3m63z6s&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video4",
      img: dressing,
      title: "Dressing for interview success",
      desc: "Discover how the right attire and grooming can boost your confidence.",
      alt: "Woman in a blue top speaking about dressing for interview success",
      iconLabel: "Play video on dressing for interview success",
      urls: {
        india: "https://www.youtube.com/embed/HWGRJMSFNtQ",
        global:
          "https://www.youtube.com/embed/7pPoEVPsZjw?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=3",
        china:
          "https://play.webvideocore.net/popplayer.php?it=36ee0oaif328&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video5",
      img: crafting1,
      title: "Crafting a strong introduction",
      desc: "Learn to craft an introduction that highlights your value and makes an impact.",
      alt: "Man in a white shirt smiling while speaking about crafting a strong introduction",
      iconLabel: "Play video on crafting a strong introduction",
      urls: {
        india:
          "https://www.youtube.com/embed/5oAyw8_wkJA?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=9",
        global:
          "https://www.youtube.com/embed/8JbwV3xL2xk?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=7",
        china:
          "https://play.webvideocore.net/popplayer.php?it=5du2329sf74s&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video6",
      img: questions1,
      title: "Questions on challenges faced",
      desc: "Learn to use the CAR model to answer tough questions with confidence.",
      alt: "Man in a dark shirt speaking about challenges faced in interviews",
      iconLabel: "Play video on handling questions about challenges faced",
      additionalInfo: (
        <a
          id="download-vid6"
          href={car}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: "#c80000" }}
        >
          Download the CAR model worksheet (PDF file, 91.3 KB)
        </a>
      ),
      urls: {
        india:
          "https://www.youtube.com/embed/_yC-krL_pFk?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=8",
        global:
          "https://www.youtube.com/embed/eRbfSU4NdzQ?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=6",
        china:
          "https://play.webvideocore.net/popplayer.php?it=81rthdxmss8w&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video7",
      img: stregnth,
      title: "Share strengths and growth areas",
      desc: "Learn to be authentic and show growth when discussing strengths and weaknesses.",
      alt: "Two presenters, a woman smiling and a man giving an OK sign, discussing sharing strengths",
      iconLabel: "Play video on sharing strengths and growth areas",
      urls: {
        india:
          "https://www.youtube.com/embed/x1dczGAiAdM?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=7",
        global:
          "https://www.youtube.com/embed/-qIPEw8gslk?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=8",
        china:
          "https://play.webvideocore.net/popplayer.php?it=9zba881v7fcc&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video8",
      img: learning,
      title: "Speak with impact about your learning",
      desc: "Learn to use the DLA model to showcase your skills and learning with impact.",
      alt: "Woman speaking about learning and career impact",
      iconLabel: "Play video on speaking with impact about your learning",
      additionalInfo: (
        <a
          id="download-vid8"
          href={dla}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: "#c80000" }}
        >
          Download the DLA model worksheet (PDF file, 93.4 KB)
        </a>
      ),
      urls: {
        india:
          "https://www.youtube.com/embed/z6jc1EWAdJM?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=1",
        global:
          "https://www.youtube.com/embed/U9o1Mrw0LXk?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=9",
        china:
          "https://play.webvideocore.net/popplayer.php?it=1ckcu6ctez8g&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video9",
      img: company,
      title: "Align with company values",
      desc: "Learn the KAD model to showcase your knowledge, attitude and drive.",
      alt: "Two women on split screen discussing aligning with company values",
      iconLabel: "Play video on aligning with company values",
      additionalInfo: (
        <a
          id="download-vid9"
          href={kad}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
          style={{ color: "#c80000" }}
        >
          Download the KAD model template (PDF file, 94.7 KB)
        </a>
      ),
      urls: {
        india:
          "https://www.youtube.com/embed/2GlePBy_rNs?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=5",
        global:
          "https://www.youtube.com/embed/ItUJV_Of4Cw?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=10",
        china:
          "https://play.webvideocore.net/popplayer.php?it=4i7kpp9kwayo&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video10",
      img: conversation,
      title: "Navigate salary and growth conversations",
      desc: "Learn to navigate salary and career growth conversations with confidence.",
      alt: "Man in a blue shirt discussing salary and growth conversations",
      iconLabel: "Play video on navigating salary and growth conversations",
      urls: {
        india:
          "https://www.youtube.com/embed/Vt-3DNffKqY?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=6",
        global:
          "https://www.youtube.com/embed/qqzWfAV7NGE?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=11",
        china:
          "https://play.webvideocore.net/popplayer.php?it=kzpjqzez91ws&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video11",
      img: expertise,
      title: "Address questions beyond your expertise",
      desc: "Learn to show your adaptability and growth mindset in an interview.",
      alt: "Three presenters on split screen discussing questions beyond your expertise",
      iconLabel: "Play video on addressing questions beyond your expertise",
      urls: {
        india:
          "https://www.youtube.com/embed/Oiu77R4y6LA?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=4",
        global:
          "https://www.youtube.com/embed/tBjN4Ynzc2U?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=12",
        china:
          "https://play.webvideocore.net/popplayer.php?it=4kemznvetncw&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video12",
      img: asking2,
      title: "Ask the right questions",
      desc: "Learn what questions to ask in an interview to show initiative.",
      alt: "Woman speaking about asking the right questions",
      iconLabel: "Play video on asking the right questions",
      urls: {
        india:
          "https://www.youtube.com/embed/bAuMjFsX1b0?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=3",
        global:
          "https://www.youtube.com/embed/tMoRNjRi7Ck?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=13",
        china:
          "https://play.webvideocore.net/popplayer.php?it=2s8paki17ois&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video13",
      img: practice,
      title: "Top interview practice tips",
      desc: "Master your interview with our step-by-step guide to effective practice.",
      alt: "Man in a dark shirt speaking about top interview practice tips",
      iconLabel: "Play video on top interview practice tips",
      urls: {
        india: "https://www.youtube.com/embed/sg3mZQaniF0",
        global:
          "https://www.youtube.com/embed/-BVe0ux1EdE?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=14",
        china:
          "https://play.webvideocore.net/popplayer.php?it=crhdxgwu8lc0&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },

    {
      id: "video14",
      img: reflect,
      title: "Reflect after your interview",
      desc: "Learn to manage post-interview stress and turn waiting into learning.",
      alt: "Four presenters on quad split screen speaking about reflecting after an interview",
      iconLabel: "Play video on reflecting after your interview",
      urls: {
        india: "https://www.youtube.com/embed/lZ6123JBNdg",
        global:
          "https://www.youtube.com/embed/AtLPKAXQlLM?list=PLhCTkN6YWdPkU7e2o8uHlj4cPuL_lMscY&index=15",
        china:
          "https://play.webvideocore.net/popplayer.php?it=5xwfqfcsbt8o&is_link=1&auto_play=0&aspect_ratio=16:9",
      },
    },
  ];

  const getVideoUrlForCountry = (video: (typeof videos)[number]): string => {
    if (userCountry === "IN") {
      return video.urls.india;
    } else if (userCountry === "CN") {
      return video.urls.china;
    } else {
      return video.urls.global;
    }
  };

  const handlePlayVideo = (video: (typeof videos)[number]) => {
    const selectedUrl = getVideoUrlForCountry(video);
    setCurrentVideoUrl(selectedUrl);
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    setCurrentVideoUrl("");
  };

  return (
    <div className="remove-scrollbar min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[200px]">
        <div className="absolute inset-0">
          <img
            src={interviewbanner}
            alt="Interview Prep Series banner. Close-up of hands over a desk, one writing notes or providing feedback with a pen."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="margin-acca container mx-auto relative z-10 flashcard-banner">
          <div className="">
            <h1
              className=""
              style={{
                fontSize: "70px",
                lineHeight: "60px",
                color: "#ffff",
                whiteSpace: "0%",
                fontWeight: 700,
              }}
            >
              Interview Prep Series<span style={{ color: "#D20024" }}>.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Sidebar Mobile*/}
      <div className="inter-breadcrumbs">
        <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
          <a href="" className="cursor-pointer block navigation">
            <a href="/">
              <span> Home /</span>
            </a>{" "}
            <a href="#">
              <span style={{ fontWeight: "600" }}>Interview Prep Series</span>
            </a>
          </a>
        </div>
      </div>

      {/* Main Content of the page */}
      <section className="pt-10 pb-6 interview-page">
        <div className="custom-container">
          <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex">
            {/* Sidebar Desktop for Interview Page */}
            <div className="col-span-2 w-[11rem] sidebar-desktop border-r border-gray-300 max-md:hidden md:block">
              {/* Back to Home */}
              <a href="/" className="block">
                <div className="cursor-pointer back-to-home group">
                  <img
                    src={backtohome}
                    alt="Back arrow"
                    className="arrow inline-block align-middle mr-1 transition-transform duration-300 ease-in-out group-hover:-translate-x-2"
                    style={{ width: "22px", height: "16px" }}
                  />
                  <span style={{ fontSize: "16px", fontWeight: "500" }}>
                    Back to
                  </span>
                  <br />
                  <span
                    className="home-align"
                    style={{ fontSize: "22px", fontWeight: "500" }}
                  >
                    Home
                  </span>
                </div>
              </a>

              {/* Navigation Items */}
              <nav aria-label="Main navigation">
                <ul className="overflow-hidden list-none p-0 m-0">
                  {/* Interview Prep Series - Top Level (Active on this page) */}
                  <li
                    className={`border-t border-b border-gray-300 border-l-0 bg-white hover:bg-gray-50 ${
                      currentRoute === "/interview-prep-series"
                        ? "mr-[-1px]"
                        : ""
                    }`}
                  >
                    <div
                      className={
                        currentRoute === "/interview-prep-series"
                          ? ""
                          : "border-r-4 border-r-gray-400"
                      }
                    >
                      <a
                        href="/interview-prep-series"
                        className={`
              flex items-center px-3 py-2
              min-h-[32px]
              w-full
              text-[13px] leading-4 ml-2
              ${
                currentRoute === "/interview-prep-series"
                  ? "text-black font-semibold"
                  : "text-gray-500 font-normal hover:text-gray-700"
              }
            `}
                      >
                        Interview Prep Series
                      </a>
                    </div>
                  </li>

                  {/* ACCA Flashcards - Top Level */}
                  <li
                    className={`border-b border-gray-300 border-l-0 bg-white hover:bg-gray-50 ${
                      currentRoute === "/acca-flashcards" ? "mr-[-1px]" : ""
                    }`}
                  >
                    <div
                      className={
                        currentRoute === "/acca-flashcards"
                          ? ""
                          : "border-r-4 border-r-gray-400"
                      }
                    >
                      <a
                        href="/acca-flashcards"
                        className={`
              flex items-center px-3 py-2
              min-h-[32px]
              w-full
              text-[13px] leading-4 ml-2
              ${
                currentRoute === "/acca-flashcards"
                  ? "text-black font-medium"
                  : "text-gray-500 font-normal hover:text-gray-700"
              }
            `}
                      >
                        ACCA Flashcards
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Interview Prep Series */}
            <div className="col-span-10 space-y-6 interview-prep">
              <h2 className="h2-fonts mb-2 mt-0">
                Ace your interviews with clear, practical guidance.
              </h2>
              <p className="mb-0 main-p" style={{ marginBottom: "35px" }}>
                Interviews can be your gateway to success, but only when you're
                well prepared. ACCA's Interview Prep Series equips you with the
                tools to approach every stage of the process with clarity,
                confidence, and professionalism. Whether you're entering the
                workforce or ready to take your next step, this series supports
                you in building skills that stand out.
              </p>

              {/* Video Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 row-gaps">
                {videos.map((video, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="flex items-center justify-center overflow-hidden relative">
                      <div className="relative w-full h-full cursor-pointer">
                        <img
                          src={video.img}
                          alt={video.alt}
                          className="w-full h-full object-cover"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
                          aria-hidden="true"
                        ></div>
                        <button
                          onClick={() => handlePlayVideo(video)}
                          aria-label={video.iconLabel}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <div className="w-auto h-auto flex items-center justify-center hover:scale-110 transition-transform">
                            <img
                              src={videoicon}
                              alt=""
                              aria-hidden="true"
                              className="videoicon"
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                    <h3 className="mt-4">{video.title}</h3>
                    <p className="mt-2 text-gray-600 text-sm">{video.desc}</p>
                    <div className="mt-2 text-gray-700 text-sm addiinfo">
                      {video.additionalInfo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent className="max-w-none w-screen h-screen p-0 bg-color">
          <DialogClose asChild>
            <button
              className="absolute top-4 right-4 z-50 text-white hover:text-gray-300 transition-colors videocross"
              onClick={closeVideoModal}
            >
              <X size={32} />
            </button>
          </DialogClose>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-6xl aspect-video">
              {currentVideoUrl && (
                <iframe
                  src={currentVideoUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Interview Prep Video"
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Interview;
