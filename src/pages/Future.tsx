import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import futureskillsbanner from "../assets/image/futureskillsbanner.png";
import accaflashcard from "../assets/image/accaflashcard.png";
import sustainlight from "../assets/image/sustainlight.png";
import inno from "../assets/image/inno.png";
import futuredark from "../assets/image/futuredark.png";
import what111 from "../assets/image/what111.png"
import theme3 from "../assets/image/theme3.png"
import theme1 from "../assets/image/theme1.png"
import what1 from "../assets/image/what1.png"
import what2 from "../assets/image/what2.png"
import what3 from "../assets/image/what3.png"
import fwhatflashcard from "../assets/image/fwhatflashcard.pdf";
import fwhoflashcard from "../assets/image/fwhoflashcard.pdf";
import fwhereflashcard from "../assets/image/fwhereflashcard.pdf";
import fhowflashcard from "../assets/image/fhowflashcard.pdf";
import fwhyflashcard from "../assets/image/fwhyflashcard.pdf";
import futurewhat2 from "../assets/image/futurewhat2.pdf";
import futurewhy1 from "../assets/image/futurewhy1.pdf";
import futurewho1 from "../assets/image/futurewho1.pdf";
import futurewhere2 from "../assets/image/futurewhere2.pdf";
import { FiSearch, FiUser, FiMapPin, FiSettings } from "react-icons/fi";
import { TbBulb } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import { ArrowRight, Plus } from "lucide-react";
import why111 from "../assets/image/why111.png";
import who111 from "../assets/image/who111.png";
import where111 from "../assets/image/where111.png";
import How111 from "../assets/image/how111.png";
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
import fwhat1 from "../assets/image/fwhat1.png"
import fwhat2 from "../assets/image/fwhat2.png"
import fwhy1 from "../assets/image/fwhy1.png"
import fwhy2 from "../assets/image/fwhy2.png"
import fwho1 from "../assets/image/fwho1.png"
import fwho2 from "../assets/image/fwho2.png"
import fwhere1 from "../assets/image/fwhere1.png"
import fwhere2 from "../assets/image/fwhere2.png"
import fhow1 from "../assets/image/fhow1.png"
import fhow2 from "../assets/image/fhow2.png"
import backtohome from "../assets/image/backtohome.png";
import { useLocation } from "react-router-dom"; // **ADDED: Import useLocation to check navigation source**



const future = () => {
  const [activeTab, setActiveTab] = useState("what");
  const [activePopup, setActivePopup] = useState<{ tab: string; icon: number } | null>(null);
  const [showPinkBox, setShowPinkBox] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const buttonRefs = useRef<{ [key: number]: HTMLButtonElement | null }>({});

  const popupRef = useRef<HTMLDivElement | null>(null); // Ref for popup

  // Popup sizes configuration - customize these as needed
  const popupSizes = {
    what: {
      1: '450px',  // Icon 1 width for What tab
      2: '400px',  // Icon 2 width for What tab
      3: '470px'   // Icon 3 width for What tab
    },
    why: {
      1: '500px',  // Icon 1 width for Why tab
      2: '500px',  // Icon 2 width for Why tab
      3: '480px'   // Icon 3 width for Why tab
    },
    who: {
      1: '500px',  // Icon 1 width for Who tab
      2: '700px',  // Icon 2 width for Who tab
      3: '460px'   // Icon 3 width for Who tab
    },
    where: {
      1: '490px',  // Icon 1 width for Where tab
      2: '450px',  // Icon 2 width for Where tab
      3: '470px'   // Icon 3 width for Where tab
    },
    how: {
      1: '500px',  // Icon 1 width for How tab
      2: '500px',  // Icon 2 width for How tab
      3: '450px'   // Icon 3 width for How tab
    }
  };

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

  // ESC key functionality to close popup
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && activePopup) {
        closePopup();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [activePopup]);

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
      title: "What are the key qualities of a finance leader?",
      description: "To lead through uncertainty and complexity, today's CFOs must cultivate five integrative thinking capabilities: continually becoming, empathising, exploring, co-creating, and empowering. These interconnected capabilities support leadership that is adaptive, inclusive and value-driven.",
      image: what111,
      altText: "Aerial view of numerous small sailboats navigating across blue water, symbolising leadership through uncertainty.", // ✅ UPDATED: Separate alt text
      downloadId: "fsdf1",
      learnMoreId: "fslm1",
      downloadLink: fwhatflashcard,
      learnMoreLink: futurewhat2, // What tab learn more link
      visibleIcons: [1, 2], // Configure which icons are visible for this tab
      iconPositions: {
        1: "top-6 left-1", // Top left
        2: "top-2 right-7", // Middle right
        3: "bottom-2 right-1", // Bottom right
      },
      popupImages: [
        { id: 1, src: fwhat1, alt: "What popup image 1" },
        { id: 2, src: fwhat2, alt: "What popup image 2" },
        { id: 3, src: what3, alt: "What popup image 3" },
      ],
    },
    why: {
      title: "Why must a future-fit CFO be adaptable?",
      description: "The future-fit CFO must be adaptable to effectively guide their organisation through complex, interconnected risks while identifying new opportunities. \nAs custodians of critical strategic information, adaptable CFOs are better equipped to ensure transparency, drive agile decision-making, and uphold accountability in a rapidly changing business landscape.",
      image: why111,
      altText: "Panoramic aerial view of a brightly lit, complex coastal city skyline at dusk, representing global complexity.", // ✅ UPDATED: Separate alt text
      downloadId: "fsdf2",
      learnMoreId: "fslm2",
      downloadLink: fwhyflashcard,
      learnMoreLink: futurewhy1, // What tab learn more link
      visibleIcons: [1, 2], // Configure which icons are visible for this tab
      iconPositions: {
        1: "top-5 left-1", // Top left
        2: "top-5 right-2", // Middle right
        3: "bottom-2 right-1", // Bottom right
      },
      popupImages: [
        { id: 1, src: fwhy2, alt: "Why popup image 1" },
        { id: 2, src: fwhy1, alt: "Why popup image 2" },
        { id: 3, src: why3, alt: "Why popup image 3" },
      ],
    },
    who: {
      title: "Who are the key recipients of an organisation's value?",
      description: "Finance leaders must consider a broad range of stakeholders who benefit from the organisation's performance. These include investors, customers, employees, communities and regulators. Creating sustainable value across all groups is fundamental to long-term business success and responsible leadership.",
      image: who111,
      altText: "A team of hikers ascending a snowy mountain ridge, representing stakeholders working towards a common goal.", // ✅ UPDATED: Separate alt text
      downloadId: "fsdf3",
      learnMoreId: "fslm3",
      downloadLink: fwhoflashcard,
      learnMoreLink: futurewho1, // What tab learn more link
      visibleIcons: [1, 2], // Configure which icons are visible for this tab
      iconPositions: {
        1: "top-2 left-6", // Top left
        2: "top-2 right-7 transform -translate-y-1/2", // Middle right
        3: "bottom-2 right-1", // Bottom right
      },
      popupImages: [
        { id: 1, src: fwho1, alt: "Who popup image 1" },
        { id: 2, src: fwho2, alt: "Who popup image 2" },
        { id: 3, src: what3, alt: "Who popup image 3" },
      ],
    },
    where: {
      title: "Where are finance professionals' roles changing?",
      description: "CFOs are expanding their influence across eight critical areas including strategy and business acumen, risk and control, technology and data, leadership, supply chain, investor management, consulting, and transactions. This shift reflects the evolving demands on finance professionals to lead digital transformation, drive sustainable value, and navigate complexity with confidence. As innovation continues to reshape business, developing the right capabilities across these areas is essential to staying competitive and future-ready.",
      image: where111,
      altText: "A person stands on a bridge overlooking a modern, illuminated cityscape, symbolising a changing global role.", // ✅ UPDATED: Separate alt text
      downloadId: "fsdf4",
      learnMoreId: "fslm4",
      downloadLink: fwhereflashcard,
      learnMoreLink: futurewhere2, // What tab learn more link
      visibleIcons: [1, 2], // Configure which icons are visible for this tab
      iconPositions: {
        1: "top-8 left-8", // Top left
        2: "top-8 right-9 transform -translate-y-1/2", // Middle right
        3: "bottom-2 right-1", // Bottom right
      },
      popupImages: [
        { id: 1, src: fwhere1, alt: "Where popup image 1" },
        { id: 2, src: fwhere2, alt: "Where popup image 2" },
        { id: 3, src: where3, alt: "Where popup image 3" },
      ],
    },
    how: {
      title: "How can organisations improve talent engagement and retention ",
      description: "As technology, especially AI, reshapes roles, it's important to support the development of both digital capabilities and human-centred skills like creativity and judgement. Additionally, employers need to recognise that many employees are seeking better pay and clearer growth opportunities, often looking outside their organisations when these aren't available internally.",
      image: How111,
      altText: "Abstract overhead view of a plant with bright pink tentacle-like flowers floating on water.", // ✅ UPDATED: Separate alt text
      downloadId: "fsdf5",
      learnMoreId: "fslm5",
      downloadLink: fhowflashcard,
      learnMoreLink: "https://stories.accaglobal.com/career-ladder-and-variety-of-work/index.html", // What tab learn more link
      visibleIcons: [1, 2], // Configure which icons are visible for this tab
      iconPositions: {
        1: "top-5 left-5", // Top left
        2: "top-5 right-9 transform -translate-y-1/2", // Middle right
        3: "bottom-2 right-1", // Bottom right
      },
      popupImages: [
        { id: 1, src: fhow2, alt: "How popup image 1" },
        { id: 2, src: fhow1, alt: "How popup image 2" },
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
      image: theme1,
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
            src={futureskillsbanner}
            alt="Future Skills Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0"></div>
        </div>
        <div className="margin-acca container mx-auto relative z-10 sustainable-banner">
          <div className="">
            <h1 className="" style={{ fontSize: '70px', lineHeight: '60px', color: "#ffff", whiteSpace: "0%", fontWeight: 700 }}>
              Future Skills<span style={{ color: '#D20024' }}>.</span>
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
                  alt="Acca Flashcards"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="/sustainable" className="cursor-pointer block img-class">
                <img
                  src={sustainlight}
                  alt="Sustainable Business"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="/innovative" className="cursor-pointer block">
                <img
                  src={inno}
                  alt="Innovative Tech"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
              <a href="#" className="cursor-pointer block img-class">
                <img
                  src={futuredark}
                  alt="Future SKills"
                  className="w-full h-full object-cover ips-image"
                />
              </a>
            </div>

            {/* Sidebar Mobile*/}
            <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
              <a href="" className="cursor-pointer block navigation">
                <a href="/"><span> Home /</span></a> <a href="flashcards"><span>ACCA PI Flashcards /</span></a><a href="#"><span style={{ fontWeight: '600' }}> Future Skills</span></a>
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
                      alt={content.altText}
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
                              className="absolute top-full right-0 mt-2 z-50 bg-white shadow-2xl overflow-hidden mobile-popup-center"
                              style={{
                                width: popupSizes[activePopup.tab as keyof typeof popupSizes][activePopup.icon as keyof typeof popupSizes[keyof typeof popupSizes]],
                                maxWidth: '90vw',
                                ...(iconNumber === 3 && { right: '-45px' })
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
                        <a href={theme.id === 1 ? "/sustainable" : "/innovative"} className="cursor-pointer block">
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

export default future;
