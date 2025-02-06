import React, { useState, useEffect } from "react";
import './App.css';

const data = {
  id: "3adb0aa2-4387-4fab-a8ed-4c38fc2334e4",
  campaign_type: "STR",
  details: [
    {
      id: "fe64197c-fa99-4f19-8132-0b61ee1956f5",
      name: "CheQ",
      thumbnail: "https://appstorysmediabucket.s3.amazonaws.com/story_groups/Screenshot_2024-12-24_at_1.03.07PM.png",
      ringColor: "#d7b404",
      nameColor: "#000000",
      order: 2,
      slides: [
        {
          id: "ff9d8e07-def5-4781-9944-6fe7d8dcec28",
          parent: "fe64197c-fa99-4f19-8132-0b61ee1956f5",
          image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/New_App_Android.png",
          video: "https://www.example.com/video1.mp4",
          link: "https://app20.in/4",
          button_text: "CheQ Offer",
          order: 1
        }
      ]
    },
    {
      id: "38779bb3-52ac-440d-bdd3-80b6e18118a2",
      name: "Do's and Don't",
      thumbnail: "https://appstorysmediabucket.s3.amazonaws.com/story_groups/Group_24.png",
      ringColor: "#ffea00",
      nameColor: "#111111",
      order: 4,
      slides: [
        {
          id: "17859fbc-9457-40a6-8d83-0f8482694323",
          parent: "38779bb3-52ac-440d-bdd3-80b6e18118a2",
          image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/Frame_38.png",
          video: "https://www.example.com/video2.mp4",
          link: "",
          button_text: "",
          order: 2
        }
      ]
    },
    {
      id: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
      name: "IOS",
      thumbnail: "https://appstorysmediabucket.s3.amazonaws.com/story_groups/Frame_2_2.png",
      ringColor: "#ffd500",
      nameColor: "#111111",
      order: 5,
      slides: [
        {
          id: "7d945e48-3d3f-4a74-bd04-0b2296bbb9ea",
          parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
          image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/sportsbaazi.jpg",
          video: "https://www.example.com/video3.mp4",
          link: "https://app20.in/ios",
          button_text: "iOS Offer",
          order: 1
        },
        {
          id: "59feb0e4-68ce-4c6a-a2b6-c34eb82322b4",
          parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
          image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_13.01.31_7eadf664.jpg",
          video: null,
          link: "https://app20.in/ios/1",
          button_text: "iOS Offer 1",
          order: 2
        },
        {
          id: "45f756ed-7eaf-45ca-b057-dcd784f8909f",
          parent: "2f143cc1-93f8-4b3b-a23c-b2836b79cd25",
          image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_13.01.32_290dca51.jpg",
          video: null,
          link: "https://app20.in/ios/2",
          button_text: "iOS Offer 2",
          order: 3
        }
      ]
    },
    {
      id: "ba82ab84-86bb-4c67-97fd-620410523119",
      name: "Zupee",
      thumbnail: "https://appstorysmediabucket.s3.amazonaws.com/story_groups/Group_22.png",
      ringColor: "#ffd500",
      nameColor: "#111111",
      order: 8,
      slides: [
        {
          id: "d9afb861-cda2-484e-a714-ccddcd79f134",
          parent: "ba82ab84-86bb-4c67-97fd-620410523119",
          image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/Frame_36.png",
          video: null,
          link: "https://app20.in/3",
          button_text: "Start Offer",
          order: 1
        }
      ]
    },
    {
      id: "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
      name: "New Offers",
      thumbnail: "https://appstorysmediabucket.s3.amazonaws.com/story_groups/new-offer.png",
      ringColor: "#ffdd00",
      nameColor: "#000000",
      order: 10,
      slides: [
        {
          id: "f6209a23-7c11-418c-97d2-a4b69155f74f",
          parent: "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
          image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_12.31.32.jpeg",
          video: null,
          link: "https://app20.in/7",
          button_text: "Ludo Supreme Offer",
          order: 1
        },
        {
          id: "7e6f8afc-b3ff-4ddc-b9b4-759f8decfc56",
          parent: "47bc5cbe-5deb-4fe3-8fbc-ba8de055702c",
          image: "https://appstorysmediabucket.s3.amazonaws.com/story_slides/WhatsApp_Image_2025-01-10_at_12.32.26.jpeg",
          video: null,
          link: "https://app20.in/8",
          button_text: "Pepperfry Offer",
          order: 2
        }
      ]
    }
  ]
};

const App = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showStory, setShowStory] = useState(false);
  const [seenStories, setSeenStories] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);

  const openStory = (index) => {
    setCurrentStoryIndex(index);
    setCurrentSlideIndex(0);
    setShowStory(true);
    const storyId = data.details[index].id;
    if (!seenStories.includes(storyId)) {
      setSeenStories(prev => [...prev, storyId]);
    }
  };

  const closeStory = () => {
    setShowStory(false);
    setCurrentStoryIndex(null);
    setCurrentSlideIndex(0);
  };

  const goToPreviousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
      setAnimationKey(prevKey => prevKey + 1); // Force re-animation
    }
  };

  const goToNextSlide = () => {
    const currentStory = data.details[currentStoryIndex];
    if (currentSlideIndex < currentStory.slides.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
      setAnimationKey(prevKey => prevKey + 1); // Force re-animation
    } else {
      closeStory();
    }
  };

  const goToPreviousStory = () => {
    if (currentStoryIndex > 0) {
      openStory(currentStoryIndex - 1);
    }
  };

  const goToNextStory = () => {
    if (currentStoryIndex < data.details.length - 1) {
      openStory(currentStoryIndex + 1);
    } else {
      closeStory();
    }
  };

  useEffect(() => {
    let timer;
    if (showStory) {
      timer = setTimeout(() => {
        goToNextSlide();
      }, 8000);
    }
    return () => clearTimeout(timer);
  }, [showStory, currentSlideIndex, currentStoryIndex, goToNextSlide]);

  const currentStory = data.details[currentStoryIndex];
  const currentSlide = currentStory?.slides[currentSlideIndex];

  return (
    <div className="app">
      {!showStory ? (
        <div className="story-thumbnails">
          {data.details.map((story, index) => (
            <div
              key={story.id}
              className={`story-thumbnail ${seenStories.includes(story.id) ? 'seen' : ''}`}
              onClick={() => openStory(index)}
              style={{
                backgroundImage: `url(${story.thumbnail})`,
                borderColor: seenStories.includes(story.id) ? '#808080' : story.ringColor
              }}
            />
          ))}
        </div>
      ) : (
        <div className="story-viewer">
          <button className="close-button" onClick={closeStory}>
            &times;
          </button>
          <div className="slide-container">
            <button
              className="nav-button prev-story-button"
              onClick={goToPreviousStory}
              disabled={currentStoryIndex === 0}
            >
              &lt;&lt;
            </button>
            <button
              className="nav-button prev-button"
              onClick={goToPreviousSlide}
              disabled={currentSlideIndex === 0}
            >
              &lt;
            </button>
            <div className="slide-content">
              <div className="progress-bars">
                {currentStory.slides.map((slide, index) => (
                  <div key={slide.id} className="progress-bar">
                    <div
                      className={`progress ${index === currentSlideIndex ? 'active' : ''}`}
                      style={{
                        animationDuration: index === currentSlideIndex ? '8s' : '0s',
                        width: index < currentSlideIndex ? '100%' : '0%',
                        backgroundColor: index <= currentSlideIndex ? '#ffd700' : 'rgba(255, 255, 255, 0.3)'
                      }}
                      key={animationKey}
                    ></div>
                  </div>
                ))}
              </div>
              {currentSlide?.image && (
                <img src={currentSlide.image} alt="Slide" />
              )}
              {currentSlide?.button_text && (
                <a href={currentSlide.link} target="_blank" rel="noopener noreferrer">
                  <button className="slide-button">{currentSlide.button_text}</button>
                </a>
              )}
            </div>
            <button
              className="nav-button next-button"
              onClick={goToNextSlide}
              disabled={currentSlideIndex === currentStory.slides.length - 1}
            >
              &gt;
            </button>
            <button
              className="nav-button next-story-button"
              onClick={goToNextStory}
              disabled={currentStoryIndex === data.details.length - 1}
            >
              &gt;&gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;