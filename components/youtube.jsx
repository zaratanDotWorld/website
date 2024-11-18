export default function ({ videoSrc, videoTitle }) {
  return (
    <div className="mediaWrapper">
      <iframe
        src={videoSrc}
        title={videoTitle}
        allow="autoplay; picture-in-picture; clipboard-write; gyroscope;"
        allowFullScreen
      />
    </div>
  )
}
