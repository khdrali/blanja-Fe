import React, { useState, useRef, useEffect } from "react";

const dummyData = [
  { image: "/assets/images/tshirt-cat.png" },
  { image: "/assets/images/short-cat.png" },
  { image: "/assets/images/jacket-cat.png" },
  { image: "/assets/images/pants-cat.png" },
  { image: "/assets/images/tshirt-cat.png" },
  { image: "/assets/images/short-cat.png" },
  { image: "/assets/images/jacket-cat.png" },
  { image: "/assets/images/pants-cat.png" },
];

const CategoryHome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const totalSlides = dummyData.length;
  const slidesToShow = 4;

  // Fungsi untuk menggeser slide ke kanan
  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: sliderRef.current.offsetWidth / slidesToShow,
        behavior: "smooth",
      });
      setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - slidesToShow));
    }
  };

  // Fungsi untuk menggeser slide ke kiri
  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: -(sliderRef.current.offsetWidth / slidesToShow),
        behavior: "smooth",
      });
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  };

  // Handle drag events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault(); // Menghentikan perilaku default seperti teks yang disorot
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Faktor kecepatan geser
    sliderRef.current.scrollLeft = scrollLeft - walk;
    updateCurrentSlide(); // Perbarui slide aktif saat di-drag
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (sliderRef.current) {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
      setScrollLeft(sliderRef.current.scrollLeft);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    updateCurrentSlide(); // Perbarui slide aktif saat di-drag (untuk mobile)
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Update the current slide based on scroll position
  const updateCurrentSlide = () => {
    if (sliderRef.current) {
      const newSlide = Math.round(
        sliderRef.current.scrollLeft /
          (sliderRef.current.offsetWidth / slidesToShow)
      );
      setCurrentSlide(newSlide);
    }
  };

  // Tambahkan event listener scroll saat sliderRef tersedia
  useEffect(() => {
    const handleScroll = () => {
      updateCurrentSlide(); // Update slide saat scroll terjadi
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
    }

    // Cleanup event listener saat component unmount
    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="flex mt-5 bg-[#F0F1F9] px-7 py-10 justify-start items-start gap-10">
      <div>
        <p className="text-[34px] font-metropolisBold">Category</p>
        <p className="text-[12px] font-metropolisReguler text-[#9B9B9B]">
          What are you currently looking for
        </p>
        <div className="flex items-center gap-3 mt-12">
          <button
            onClick={prevSlide}
            className={`rounded-full bg-[#FFFFFF] px-4 py-4 ${
              currentSlide == 0 ? "opacity-50 cursor-default" : ""
            }`}
          >
            <img src="/assets/icons/left-arrow.svg" alt="Previous" />
          </button>
          <button
            onClick={nextSlide}
            className={`rounded-full bg-[#FFFFFF] px-4 py-4 ${
              currentSlide == totalSlides - slidesToShow
                ? "opacity-50 cursor-default"
                : ""
            }`}
          >
            <img src="/assets/icons/right-arrow.svg" alt="Next" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden w-full">
        {/* Slider container */}
        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-scroll no-scrollbar transition-transform duration-500 ease-in-out"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {dummyData.map((v, key) => (
            <div key={key} className="min-w-[20%] flex-shrink-0">
              <img src={v?.image} alt={`Category ${key}`} className="w-full" />
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-5 justify-center items-center">
          {dummyData
            .slice(0, totalSlides - slidesToShow + 1)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-[10px] w-[10px] rounded-full ${
                  currentSlide === index ? "bg-[#273AC7]" : "bg-gray-400"
                }`}
              ></button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHome;
