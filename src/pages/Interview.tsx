import { useState } from "react";
import bannerImage1 from "../assets/image/banner1.png";
import bannerImage2 from "../assets/image/banner2.png";
import backtohome from "../assets/image/backtohome.png";
import interviewbanner from "../assets/image/interviewbanner.png";
import sustainable from "../assets/image/sustainable.png";
import innovative from "../assets/image/innovative.png";
import future from "../assets/image/future.png";
import accaflashcard from "../assets/image/accaflashcard.png";
import videoicon from "../assets/image/videoicon.png";
import { useNavigate } from 'react-router-dom';
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


const Interview = () => {
    const navigate = useNavigate();
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    const [currentVideoUrl, setCurrentVideoUrl] = useState("");

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const theme = e.dataTransfer.getData("theme");

        if (theme === "sustainable") navigate("/sustainable");
        else if (theme === "innovative") navigate("/innovative");
        else if (theme === "future") navigate("/future");
    };

    const videos = [
        {
            img: Impactfulcv,
            title: "Create an impactful CV",
            desc: "Craft a CV that stands out and showcases your skills and experience.",
            additionalInfo: (
                <>
                    Download our sample introductory letter and email template to kickstart your job application. You can{" "}
                    <a
                        href={sample}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" underline" style={{ color: "#c80000" }}
                    >
                        download
                    </a>{" "}
                    the template here.
                </>
            ),
            youtubeUrl: "https://www.youtube.com/embed/6-liW6XjIHI", // embed format 
        },
        {
            img: firstimpression,
            title: "Make a great first impression",
            desc: "Learn how to build confidence and present yourself professionally for interviews.",

            youtubeUrl: "https://www.youtube.com/embed/La_bgTB2KpQ", // embed format
        },
        {
            img: linkedin,
            title: "Crafting a strong LinkedIn profile",
            desc: "Learn to craft a powerful LinkedIn profile that gets you noticed.",

            youtubeUrl: "https://www.youtube-nocookie.com/embed/VOj5X9UM6u0?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=11", // embed format
        },
        {
            img: dressing,
            title: "Dressing for interview success",
            desc: "Discover how the right attire and grooming can boost your confidence.",

            youtubeUrl: "https://www.youtube.com/embed/HWGRJMSFNtQ", // embed format
        },
        {
            img: crafting1,
            title: "Crafting a strong introduction",
            desc: "Learn to craft an introduction that highlights your value and makes an impact.",

            youtubeUrl: "https://www.youtube.com/embed/5oAyw8_wkJA?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=9", // embed format
        },
        {
            img: questions1,
            title: " Questions on challenges faced",
            desc: "Learn to use the CAR model to answer tough questions with confidence.",
            additionalInfo: (
                <>
                    <a
                        href={car}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                        style={{ color: "#c80000" }}
                    >
                        Download
                    </a>{" "}
                    the worksheet and ace your next interview.
                </>
            ),

            youtubeUrl: "https://www.youtube.com/embed/_yC-krL_pFk?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=8", // embed format
        },
        {
            img: stregnth,
            title: "Share strengths and growth areas",
            desc: "Learn to be authentic and show growth when discussing strengths and weaknesses.",

            youtubeUrl: "https://www.youtube.com/embed/x1dczGAiAdM?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=7", // embed format
        },
        {
            img: learning,
            title: "Speak with impact about your learning",
            desc: "Learn to use the DLA model to showcase your skills and learning with impact.",
            additionalInfo: (
                <>
                    <a
                        href={dla}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline" style={{ color: "#c80000" }}
                    >
                        Download
                    </a>{" "} the worksheet here.
                </>
            ),
            youtubeUrl: "https://www.youtube.com/embed/z6jc1EWAdJM?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=1", // embed format
        },
        {
            img: company,
            title: "Align with company values",
            desc: "Learn the KAD model to showcase your knowledge, attitude and drive.",
            additionalInfo: (
                <>
                    <a
                        href={kad}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline" style={{ color: "#c80000" }}
                    >
                        Download
                    </a>{" "} our KAD model template to apply what you've learned and start preparing with confidence.

                </>
            ),
            youtubeUrl: "https://www.youtube.com/embed/2GlePBy_rNs?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=5", // embed format
        },
        {
            img: conversation,
            title: "Navigate salary and growth conversations",
            desc: "Learn to navigate salary and career growth conversations with confidence.",

            youtubeUrl: "https://www.youtube.com/embed/Vt-3DNffKqY?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=6", // embed format
        },
        {
            img: expertise,
            title: "Address questions beyond your expertise",
            desc: "Learn to show your adaptability and growth mindset in an interview.",

            youtubeUrl: "https://www.youtube.com/embed/Oiu77R4y6LA?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=4", // embed format
        },
        {       
            img: asking2,
            title: "Ask the right questions",
            desc: "Learn what questions to ask in an interview to show initiative.",

            youtubeUrl: "https://www.youtube.com/embed/bAuMjFsX1b0?list=PLECughgtWWpTUwbD0uwK3EUKVdaUyQLN_&index=3", // embed format
        },
        {
            img:practice,
            title: "Top interview practice tips",
            desc: "Master your interview with our step-by-step guide to effective practice.",

            youtubeUrl: "https://www.youtube.com/embed/sg3mZQaniF0", // embed format
        },
        {
            img:reflect,
            title: "Reflect after your interview",
            desc: "Learn to manage post-interview stress and turn waiting into learning.",

            youtubeUrl: "https://www.youtube.com/embed/lZ6123JBNdg", // embed format
        },

    ];


    const handlePlayVideo = (youtubeUrl: string) => {
        setCurrentVideoUrl(youtubeUrl);
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
                        alt="Industrial welding background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0"></div>
                </div>
                <div className="margin-acca container mx-auto relative z-10 flashcard-banner">
                    <div className="">
                        <h1 className="" style={{ fontSize: '70px', lineHeight: '60px', color: "#ffff", whiteSpace: "0%", fontWeight: 700 }}>
                            Interview Prep Series<span style={{ color: '#D20024' }}>.</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Sidebar Mobile*/}
            <div className="inter-breadcrumbs">
                <div className="w-screen max-w-none col-span-2 space-y-0 sidebar-mobile display-side relative left-1/2 -translate-x-1/2 sm:static sm:w-full sm:max-w-full">
                    <a href="" className="cursor-pointer block navigation">
                        <a href="/"><span> Home /</span></a>{" "}
                        <a href="#"><span style={{ fontWeight: "600" }}>Interview Prep Series</span></a>
                    </a>
                </div>
            </div>

            {/* Main Content of the page */}
            <section className="pt-10 pb-6 interview-page">
                <div className="custom-container">
                    <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto mobile-flex">

                        {/* Sidebar desktop */}
                        <div className="col-span-2 space-y-2 sidebar-desktop">
                            <a href="/" className="block">
                                <div className="cursor-pointer back-to-home group">
                                    <img
                                        src={backtohome}
                                        alt="Back arrow"
                                        className="arrow inline-block align-middle mr-1 transition-transform duration-300 ease-in-out group-hover:-translate-x-1"
                                        style={{ width: "22px", height: "16px" }}
                                    />
                                    <span style={{ fontSize: "16px", fontWeight: "500" }}>Back to</span>
                                    <br />
                                    <span className="home-align" style={{ fontSize: "22px", fontWeight: "500" }}> Home</span>
                                </div>
                            </a>

                            <a href="/flashcards" className="cursor-pointer block">
                                <img
                                    src={accaflashcard}
                                    alt="Industrial welding background"
                                    className="w-full h-full object-cover ips-image"
                                />
                            </a>
                        </div>

                        {/* Interview Prep Series */}
                        <div className="col-span-10 space-y-6 interview-prep">
                            <h2 className="h2-fonts mb-2 mt-0">
                                Ace your interviews with clear, practical guidance.
                            </h2>
                            <p className="mb-0 main-p" style={{ marginBottom: "35px" }}>
                                Interviews can be your gateway to success, but only when you're well prepared. ACCA's Interview Prep Series equips you with the tools to approach every stage of the process with clarity, confidence, and professionalism. Whether you're entering the workforce or ready to take your next step, this series supports you in building skills that stand out.
                            </p>

                            {/* Video Grid - 2 columns */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 row-gaps">
                                {videos.map((video, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex items-center justify-center overflow-hidden relative">
                                            <div className="relative w-full h-full cursor-pointer">
                                                <img
                                                    src={video.img}
                                                    alt={`Video Thumbnail ${index + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                                {/* Image Overlay */}
                                                <div
                                                    className="absolute inset-0"
                                                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}
                                                ></div>
                                                {/* Play Button Overlay */}
                                                <button
                                                    onClick={() => handlePlayVideo(video.youtubeUrl)}
                                                    className="absolute inset-0 flex items-center justify-center"
                                                >
                                                    <div className="w-auto h-auto flex items-center justify-center hover:scale-110 transition-transform">
                                                        <img
                                                            src={videoicon}
                                                            alt="Play video"
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

            {/* YouTube Video Modal */}
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
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube Video"
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
