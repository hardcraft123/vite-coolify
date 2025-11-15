import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import innobanner from "../assets/image/innobanner.png";
import accaflashcard from "../assets/image/accaflashcard.png";
import sustain10 from "../assets/image/sustain10.png";
import innovativedark from "../assets/image/innovativedark.png";
import future1 from "../assets/image/future1.png";
import what11 from "../assets/image/what11.png"
import theme3 from "../assets/image/theme3.png"
import theme2 from "../assets/image/theme2.png"
import what1 from "../assets/image/what1.png"
import what2 from "../assets/image/what2.png"
import what3 from "../assets/image/what3.png"
import iwhatflashcard1 from "../assets/image/iwhatflashcard1.pdf";
import iwhereflashcard1 from "../assets/image/iwhereflashcard1.pdf";
import iwhyflashcard1 from "../assets/image/iwhyflashcard1.pdf";
import iwhoflashcard1 from "../assets/image/iwhoflashcard1.pdf";
import ihowflashcard1 from "../assets/image/ihowflashcard1.pdf";
import innovatewhat from "../assets/image/innovatewhat.pdf";
import Learn_more from "../assets/image/Learn_more.pdf";
import { FiSearch, FiUser, FiMapPin, FiSettings } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { useLocation } from "react-router-dom"; // **ADDED: Import useLocation to check navigation source**
import why11 from "../assets/image/why11.png";
import who11 from "../assets/image/who11.png";
import where11 from "../assets/image/where11.png";
import how11 from "../assets/image/how11.png";
import { X } from "lucide-react";
import bulb from "../assets/image/bulb.png";
import person from "../assets/image/person.png"
import arrow from "../assets/image/arrow.png";
import leftarrow from "../assets/image/leftarrow.png";
import why1 from "../assets/image/why1.png"
import why2 from "../assets/image/why2.png"
import why3 from "../assets/image/why3.png"
import who1 from "../assets/image/who1.png"
import where1 from "../assets/image/where1.png"
import where2 from "../assets/image/where2.png"
import where3 from "../assets/image/where3.png"
import how1 from "../assets/image/how1.png"
import how2 from "../assets/image/how2.png"
import iwhat1 from "../assets/image/iwhat1.png"
import iwhat2 from "../assets/image/iwhat2.png"
import iwhy1 from "../assets/image/iwhy1.png"
import iwhy2 from "../assets/image/iwhy2.png"
import iwho1 from "../assets/image/iwho1.png"
import iwho2 from "../assets/image/iwho2.png"
import iwhere1 from "../assets/image/iwhere1.png"
import iwhere2 from "../assets/image/iwhere2.png"
import ihow1 from "../assets/image/ihow1.png"
import ihow2 from "../assets/image/ihow2.png"
import backtohome from "../assets/image/backtohome.png";


const Innovative = () => {
  const [activeTab, setActiveTab] = useState("what");
  const [activePopup, setActivePopup] = useState<{ tab: string; icon: number } | null>(null);
  const [showPinkBox, setShowPinkBox] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});

  const popupRef = useRef<HTMLDivElement | null>(null); // Ref for popup

  // **ADDED: Get location to check if user came from flashcard page**
  const location = useLocation();
  const cameFromFlashcard = location.state?.fromFlashcard === true;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        closePopup(); // Close popup on outside click
      }
    }

    if (activePopup) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activePopup]); // Only run effect when popup changes

  useEffect(() => {
    // **MODIFIED: Only run pink box animation if user came from flashcard page**
    if (cameFromFlashcard) {
      // Start pink box animation immediately
      const timer1 = setTimeout(() => {
        setShowPinkBox(false);
      }, 1200); // Pink box visible for 1.2 seconds, then starts fading

      // Show content after pink box animation completes
      const timer2 = setTimeout(() => {
        setShowContent(true);
      }, 800); // Content shows after 1.6 seconds

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      // **ADDED: If not from flashcard, show content immediately without animation**
      setShowPinkBox(false);
      setShowContent(true);
    }
  }, [cameFromFlashcard]); // **MODIFIED: Added cameFromFlashcard dependency**

  const tabs = [
    { id: "what", label: "What", icon: <FiSearch className="text-red-500" /> },
    {
      id: "why",
      label: "Why",
      icon: <img src={bulb} alt="Why" className=" object-contain why-buttons" style={{ width: '10px' }} />,
    },
    { id: "who", label: "Who", icon: <img src={person} alt="person" className="object-contain" style={{ width: '15px' }} />, },
    { id: "where", label: "Where", icon: <FiMapPin className="text-red-500" /> },
    { id: "how", label: "How", icon: <FiSettings className="text-red-500" /> },
  ];

  const contentData = {
    what: {
      title: "What are the skills needed for AI literacy?",
      description: "AI Literacy would mean combining technical insight with human insight and soft skills. Professionals must grasp programming, AI/ML concepts, and data governance while also strengthening problem-solving, ethical reasoning, and communication. These skills are essential for responsible and future-ready decision making.",
      image: what11,
      downloadId: "itdf1",
      learnMoreId: "itlm1",
      downloadLink: iwhatflashcard1, // What tab download link
      learnMoreLink: innovatewhat, // What tab learn more link
      visibleIcons: [1, 2], // Configure which icons are visible for this tab
      iconPositions: {
        1: "top-2 left-1", // Top left
        2: "top-2 right-1 transform -translate-y-1/2", // Middle right
        3: "bottom-2 right-1", // Bottom right
      },
      popupSizes: {
        1: { width: "500px", rightOffset: "0px" },
        2: { width: "600px", rightOffset: "0px" },
        3: { width: "470px", rightOffset: "-0px" },
      },
      popupImages: [
        { id: 1, src: iwhat2, alt: "What popup image 1" },
        { id: 2, src: iwhat1, alt: "What popup image 2" },
        { id: 3, src: what3, alt: "What popup image 3" },
      ],
    },
    why: {
      title: "Why are accountants still essential?",
      description: "AI has great potential to support people in accounting and other fields. Instead of replacing human skills, it is now seen as a tool that helps accountants do their work better.",
      image: why11,
      downloadId: "itdf2",
      learnMoreId: "itlm2",
      downloadLink: iwhyflashcard1, // What tab download link
      learnMoreLink: "https://www.accaglobal.com/gb/en/professional-insights/technology/digital-horizons.html", // External Learn More link
      visibleIcons: [1, 2], // Configure which icons are visible for this tab
      iconPositions: {
        1: "top-2 left-1", // Top left
        2: "top-2 right-1 transform -translate-y-1/2", // Middle right
        3: "bottom-2 right-1", // Bottom right
      },
      popupSizes: {
        1: { width: "400px", rightOffset: "0px" },
        2: { width: "500px", rightOffset: "0px" },
        3: { width: "470px", rightOffset: "-45px" },
      },
      popupImages: [
        { id: 1, src: iwhy1, alt: "Why popup image 1" },
        { id: 2, src: iwhy2, alt: "Why popup image 2" },
        { id: 3, src: why3, alt: "Why popup image 3" },
      ],
    },
    who: {
      title: "Who drives AI adoption in accounting?",
      description: "Successful AI adoption depends on everyone from Entry-Level to the C-suite. Entry-level professionals typically develop data literacy and technical skills. Mid-level roles focus on analytics and compliance. Senior managers lead stakeholder engagement and risk management, while C-suite executives drive AI strategy and governance.",
      image: who11,
      downloadId: "itdf3",
      learnMoreId: "itlm3",
      downloadLink: iwhoflashcard1, // What tab download link
      learnMoreLink: "https://stories.accaglobal.com/ai-monitor_talent-skills-focus/responsible-ai-adoption/index.html", // What tab learn more link
      visibleIcons: [1, 2], // Only show icon 1 for this tab
      iconPositions: {
        1: "top-1/2 left-1/2 transform -translate-y-1/2", // Middle left
      },
      popupSizes: {
        1: { width: "600px", rightOffset: "0px" },
        2: { width: "350px", rightOffset: "0px" },
        3: { width: "470px", rightOffset: "-45px" },
      },
      popupImages: [
        { id: 1, src: iwho1, alt: "Who popup image 1" },
        { id: 2, src: iwho2, alt: "Who popup image 2" },
        { id: 3, src: what3, alt: "Who popup image 3" },
      ],
    },
    where: {
      title: "Where does AI add value?",
      description: "AI offers clear value in four areas namely sustainability reporting, insight generation, compliance monitoring, and process efficiency. It enhances ESG analysis, automates control testing, and delivers real-time financial intelligence. Accountants use AI to improve decision quality while maintaining trust and transparency.",
      image: where11,
      downloadId: "itdf4",
      learnMoreId: "itlm4",
      downloadLink: iwhereflashcard1, // What tab download link
      learnMoreLink: "https://www.accaglobal.com/gb/en/professional-insights/technology/digital-horizons.html", // What tab learn more link
      visibleIcons: [1, 2], // Configure which icons are visible for this tab
      iconPositions: {
        1: "top-0 left-4", // Top left
        2: "bottom-0 left-4", // Bottom left
        3: "top-1/2 right-4 transform -translate-y-1/2", // Middle right
      },
      popupSizes: {
        1: { width: "600px", rightOffset: "0px" },
        2: { width: "350px", rightOffset: "0px" },
        3: { width: "470px", rightOffset: "-45px" },
      },
      popupImages: [
        { id: 1, src: iwhere1, alt: "Where popup image 1" },
        { id: 2, src: iwhere2, alt: "Where popup image 2" },
        { id: 3, src: where3, alt: "Where popup image 3" },
      ],
    }, 
    how: {
      title: "How do leading firms adopt AI successfully?",
      description: "Top firms prioritise digital skills, strategic alignment, and ethical frameworks. They invest in continuous learning, promote experimentation, and collaborate across teams. These organisations view AI not just as a tool but as a strategic enabler of transformation.",
      image: how11,
      downloadId: "itdf5",
      learnMoreId: "itlm5",
      downloadLink: ihowflashcard1, // What tab download link
      learnMoreLink: "https://www.accaglobal.com/gb/en/professional-insights/technology/digital-horizons.html", // What tab learn more link
      visibleIcons: [1, 2], // Only show icons 1 and 2 for this tab
      iconPositions: {
        1: "bottom-5 left-4", // Bottom left
        2: "top-5 right-5", // Top right
      },
      popupSizes: {
        1: { width: "400px", rightOffset: "0px" },
        2: { width: "500px", rightOffset: "0px" },
        3: { width: "470px", rightOffset: "-45px" },
      },
      popupImages: [
        { id: 1, src: ihow2, alt: "How popup image 1" },
        { id: 2, src: ihow1, alt: "How popup image 2" },
        { id: 3, src: what3, alt: "How popup image 3" },
      ],
    },
  };

  const handleIconClick = (iconNumber: number) => {
    setActivePopup({ tab: activeTab, icon: iconNumber });
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  const content = contentData[activeTab as keyof typeof contentData];

  const themes = [
    {
      id: 1,
      title: "Innovative Tech",
      image: theme3,
    },
    {
      id: 2,
      title: "Future Skills",
      image: theme2,
    },
  ];

  return (
    <div className="remove-scrollbar min-h-screen bg-background">
      <style>{`

        @keyframes pinkBoxCenterExpand {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
          }
        }

        .pink-box-animation {
          animation: pinkBoxCenterExpand 1.6s ease-out forwards;
        }

        .content-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Mobile popup centering for max-width 425px */
        @media (max-width: 425px) {
          .mobile-popup-center {
            position: fixed !important;
            top: 74% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            margin-top: 0 !important;
            right: auto !important;
            width: 90vw !important;
            max-width: 350px !important;
          }
        }
      `}</style>

      <Header />

      {/* Pink Box Animation - **MODIFIED: Only show if came from flashcard** */}
      {showPinkBox && cameFromFlashcard && (
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div className="pink-box-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFD1DF] opacity-90"></div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-[140px]">
        <div className="absolute inset-0">
          <img
            src={innobanner}
            alt="Industrial welding background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="margin-acca container mx-auto relative z-10 sustainable-banner">
          <div className="">
            <h1 className="" style={{ fontSize: '70px', lineHeight: '60px', color: "#ffff", whiteSpace: "0%", fontWeight: 700 }}>
              Innovative Tech<span style={{ color: '#D20024' }}>.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content of the page */}
      <section className="pt-0 sm:pt-10 pb-6">
        <div className="custom-container">
          <div className={`md:grid md:grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex transition-all duration-500 ${showContent ? 'content-fade-in opacity-100' : 'opacity-0'}`}>

            {/* Sidebar for desktop*/}
            <div className="col-span-2 space-y-2 sidebar-desktop">
              <a href="/" className="block">
  <div className="cursor-pointer back-to-home group">
    <img
      src={backtohome}
      alt="Back arrow"
      className="arrow inline-block align-middle mr-1 transition-transform duration-300 ease-in-out group-hover:-translate-x-2"
      style={{ width: '22px', height: '16px' }}
    />
    <span style={{ fontSize: '16px', fontWeight: '500' }}>Back to</span>
    <br />
    <span className="home-align" style={{ fontSize: '22px', fontWeight: '500' }}> Home</span>
  </div>
</a>

              <a href="/flashcards" className="cursor-pointer block">
                <img
                  src={accaflashcard}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="/sustainable" className="cursor-pointer block img-class">
                <img
                  src={sustain10}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="#" className="cursor-pointer block">
                <img
                  src={innovativedark}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="/future" className="cursor-pointer block img-class">
                <img
                  src={future1}
                  alt="Industrial welding background"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
            </div>

            {/* Sidebar Mobile*/}
            <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
              <a href="" className="cursor-pointer block navigation">
                <a href="/"><span> Home /</span></a> <a href="flashcards"><span>ACCA PI Flashcards /</span></a><a href="#"><span style={{ fontWeight: '600' }}> Innovative Tech.</span></a>
              </a>
            </div>

            {/* Themes List */}
            <div className="col-span-10 space-y-6">
              {/* Tabs Navigation */}
              <div className="flex flex-wrap max-[425px]:flex gap-6 mb-8 mt-4 margin-this">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`tab-gap button-style flex items-center px-6 py-3 transition-colors duration-200 ${activeTab === tab.id
                      ? " font-bold"
                      : "border-color text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="grid md:grid-cols-[65%_35%] gap-6 max-w-7xl mx-auto mobile-gap">

                {/* Left Content */}
                <div className="space-y-6">
                  <h2 className="h2-fonts h2-tabs">
                    {contentData[activeTab].title.replace(/\?$/, "")}
                    <span style={{ color: "#C80000" }}>?</span>
                  </h2>

                  <p className="tabs-para">
                    {content.description}
                  </p>

                  <div className="flex space-x-6 pt-4 tabs-links">
                    <span className="flex">
                      <a
                        id={content.learnMoreId}
                        href={content.learnMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 flex items-center"
                      >
                        Click here to learn more
                      </a>
                      <span className="inline-flex items-center ml-2" style={{ color: '#C80000' }}>
                        <img src={arrow} className="w-4 h-4 pt-1" />
                      </span>
                    </span>

                    <span className="flex">
                      <a
                        id={content.downloadId}
                        href={content.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-600 hover:text-red-700 font-medium text-sm transition-colors duration-200 flex items-center"
                      >
                        Download Flashcard
                      </a>
                      <span className="inline-flex items-center ml-2" style={{ color: '#C80000' }}>
                        <img src={arrow} className="w-4 h-4 pt-1" />
                      </span>
                    </span>

                  </div>
                </div>

                {/* Right Content - Image with Interactive Icons */}
                <div className="relative">
                  <div className="relative overflow-hidden">
                    <img
                      src={content.image}
                      alt={content.title}
                      className="w-full h-64 object-cover image-height"
                    />

                    {/* Interactive Icons - Dynamic positioning based on active tab */}
                    <div className="absolute inset-0 position-set">
                      {content.visibleIcons.map((iconNumber) => (
                        <div key={iconNumber} className={`absolute ${content.iconPositions[iconNumber]}`}>
                          <button
                            ref={(el) => buttonRefs.current[iconNumber] = el}
                            onClick={() => handleIconClick(iconNumber)}
                            className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200 group"
                          >
                            <Plus className="h-5 w-5 border border-[#CF001B] text-[#CF001B] rounded-full font-bold cssforthis" />
                          </button>

                          {/* Popup for current icon */}
                          {activePopup && activePopup.tab === activeTab && activePopup.icon === iconNumber && (
                            <div
                              ref={popupRef}
                              className="absolute top-full right-0 mt-2 z-50 bg-white shadow-2xl overflow-hidden mobile-popup-center innovative-popup"
                              style={{
                                width: contentData[activePopup.tab as keyof typeof contentData].popupSizes[activePopup.icon].width,
                                maxWidth: '90vw',
                                right: contentData[activePopup.tab as keyof typeof contentData].popupSizes[activePopup.icon].rightOffset
                              }}
                            >
                              <div className="relative">
                                <button
                                  onClick={closePopup}
                                  className="absolute top-2 right-2 z-10 w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center max-[425px]:flex"
                                >
                                  <X className="h-4 w-4" />
                                </button>

                                <div className="">
                                  <img
                                    src={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].src}
                                    alt={contentData[activePopup.tab as keyof typeof contentData].popupImages[activePopup.icon - 1].alt}
                                    className="w-full h-auto object-contain rounded-lg"
                                    onError={(e) => {
                                      console.error('Image failed to load:', e.currentTarget.src);
                                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtc2l6ZT0iMThweCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="mt-6 below-para">
                    Click on the above icons for more
                  </p>
                </div>
              </div>

              {/* Related Themes */}
              <div className="mt-12 theme-css">
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Related Themes</h4>

                {/* Divider line */}
                <div className="bg-[#CF001B] h-[2px] w-[60px] mb-4"></div>

                <div className="grid grid-cols-[65%_35%] gap-6 max-w-7xl mx-auto">
                  {/* Left 65% Column (Images) */}
                  <div className="flex gap-6 justify-start">
                    {themes.map((theme) => (
                      <div key={theme.id} className="w-1/2 overflow-hidden">
                        <a href={theme.id === 1 ? "/sustainable" : "/future"} className="cursor-pointer block">
                          <div className="relative">
                            <img
                              src={theme.image}
                              alt={theme.title}
                              className="w-full h-[200px] object-cover"
                            />
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Right 35% Column (Empty or Content Placeholder) */}
                  <div></div>
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

export default Innovative;
