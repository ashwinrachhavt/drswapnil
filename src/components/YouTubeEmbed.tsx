import React from 'react';

interface YouTubeEmbedProps {
  videoUrl: string;
}

function getYouTubeEmbedID(url: string): string | null {
  // This regex extracts the video id from various YouTube URL formats
  const regex = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?|watch)(?:.*[?&]v=))|youtu\.be\/)([A-Za-z0-9_-]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoUrl }) => {
  const videoId = getYouTubeEmbedID(videoUrl);
  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg">
      <iframe
        src={embedUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube video"
        className="absolute top-0 left-0 w-full h-full rounded-lg"
      />
    </div>
  );
};

export default YouTubeEmbed;
