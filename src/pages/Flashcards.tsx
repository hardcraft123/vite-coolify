import bannerImage from "../assets/image/banner.png";
import flashcard from "../assets/image/flashcard.png";
import sustainable from "../assets/image/sustainable.png";
import innovative from "../assets/image/innovative.png";
import future from "../assets/image/future.png";
import ips3 from "../assets/image/ips3.png";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import backtohome from "../assets/image/backtohome.png";

const Flashcards = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;

  // **MODIFIED: Updated handleDrop to pass state indicating navigation from flashcard**
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const theme = e.dataTransfer.getData("theme");

    if (theme === "sustainable")
      navigate("/sustainable-business", { state: { fromFlashcard: true } });
    else if (theme === "innovative")
      navigate("/innovative-tech", { state: { fromFlashcard: true } });
    else if (theme === "future")
      navigate("/future-skills", { state: { fromFlashcard: true } });
  };

  return (
    <div className="remove-scrollbar min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[200px]">
        <div className="absolute inset-0">
          <img
            src={flashcard}
            alt="ACCA Flashcards banner: View and download them. Person using a smartphone at night with blurred city lights in the background."
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="margin-acca container mx-auto  relative z-10 flashcard-banner">
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
              ACCA Flashcards<span style={{ color: "#D20024" }}>.</span>
            </h1>
            <p
              className=""
              style={{
                fontSize: "26px",
                lineHeight: "50px",
                whiteSpace: "0px",
              }}
            >
              View and download them
            </p>
          </div>
        </div>
      </section>

      {/* Main Content of the page */}
      <section className="pt-10 pb-6 flashcard-page">
        <div className="custom-container">
          <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex">
            {/* Sidebar Desktop for Flashcards Page */}
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
                  {/* Interview Prep Series - Top Level */}
                  <li
                    className={`border-t border-b border-gray-300 border-l-0 bg-white hover:bg-gray-50 ${
                      currentRoute === "/interview-prep-series" ? "mr-[-1px]" : ""
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
                  ? "text-black font-medium"
                  : "text-gray-500 font-normal hover:text-gray-700"
              }
            `}
                      >
                        Interview Prep Series
                      </a>
                    </div>
                  </li>

                  {/* ACCA Flashcards - Top Level (Active on this page) */}
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
                  ? "text-black font-semibold"
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

            {/* Sidebar Mobile*/}
            <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
              <a href="" className="cursor-pointer block navigation">
                <a href="/">
                  <span> Home /</span>
                </a>{" "}
                <a href="flashcards">
                  <span style={{ fontWeight: "600" }}>ACCA PI Flashcards</span>
                </a>
              </a>
            </div>

            {/* Themes List */}
            <div className="col-span-5 space-y-6">
              <h2 className="h2-fonts mb-8 mt-4">Themes</h2>

              {/* Divider line */}
              <div className="bg-[#CF001B] h-[2px] w-[64px] max-[425px]:w-[64px] mb-8 margin-top1"></div>
              {/* For large screens */}
              <div className="space-y-4 desktop-cards">
                {/* Sustainable Business Card */}
                <div
                  className="relative overflow-hidden h-32 cursor-pointer"
                  draggable
                  tabIndex={0}
                  role="button"
                  aria-label="Open Sustainable Module"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate("/sustainable-business", {
                        state: { fromFlashcard: true },
                      });
                    }
                  }}
                  onDragStart={(e) =>
                    e.dataTransfer.setData("theme", "sustainable")
                  }
                >
                  <img
                    src={sustainable}
                    alt="Sustainable business: Text over a large glass building surrounded by lush green ivy."
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Innovative Tech Card */}
                <div
                  className="relative overflow-hidden h-32 cursor-pointer"
                  draggable
                  tabIndex={0}
                  role="button"
                  aria-label="Open Sustainable Module"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate("/sustainable-business", {
                        state: { fromFlashcard: true },
                      });
                    }
                  }}
                  onDragStart={(e) =>
                    e.dataTransfer.setData("theme", "innovative")
                  }
                >
                  <img
                    src={innovative}
                    alt="Innovative tech: Text over a close-up of a 3D printer at work in a lab."
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                {/* Future Skills Card */}
                <div
                  className="relative overflow-hidden h-32 cursor-pointer"
                  draggable
                  tabIndex={0}
                  role="button"
                  aria-label="Open Sustainable Module"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      navigate("/sustainable-business", {
                        state: { fromFlashcard: true },
                      });
                    }
                  }}
                  onDragStart={(e) => e.dataTransfer.setData("theme", "future")}
                >
                  <img
                    src={future}
                    alt="Future skills: Text over a person using a smartphone with blurred city lights in the background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* For mobile - **MODIFIED: Updated mobile links to pass state** */}
              <div className="space-y-4 mobile-cards">
                {/* Sustainable Business Card */}
                <div
                  className="relative overflow-hidden h-32 cursor-pointer"
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("theme", "sustainable")
                  }
                >
                  <a
                    href="/sustainable-business"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/sustainable-business", {
                        state: { fromFlashcard: true },
                      });
                    }}
                  >
                    <img
                      src={sustainable}
                      alt="Sustainable business: Text over a large glass building surrounded by lush green ivy."
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </a>
                </div>

                {/* Innovative Tech Card */}
                <div
                  className="relative overflow-hidden h-32 cursor-pointer"
                  draggable
                  onDragStart={(e) =>
                    e.dataTransfer.setData("theme", "innovative")
                  }
                >
                  <a
                    href="/innovative-tech"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/innovative-tech", {
                        state: { fromFlashcard: true },
                      });
                    }}
                  >
                    <img
                      src={innovative}
                      alt="Innovative tech: Text over a close-up of a 3D printer at work in a lab."
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </a>
                </div>

                {/* Future Skills Card */}
                <div
                  className="relative overflow-hidden h-32 cursor-pointer"
                  draggable
                  onDragStart={(e) => e.dataTransfer.setData("theme", "future")}
                >
                  <a
                    href="/future-skills"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/future-skills", { state: { fromFlashcard: true } });
                    }}
                  >
                    <img
                      src={future}
                      alt="Future skills: Text over a person using a smartphone with blurred city lights  in the background."
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-5 flex flex-col items-center justify-center space-y-8 max-[425px]:space-y-0 right-column mobile-right">
              {/* Simple Arrow */}
              <div className="arrow-style">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C80000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>

              <div className="flex items-center justify-center">
                <div
                  className="drop-box text-center"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  {/* These are animated sides — do not remove */}
                  <span className="side right"></span>
                  <span className="side left"></span>

                  <p className="text-[#C80000]">
                    Drag a module here
                    <br /> to learn more
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Flashcards;
