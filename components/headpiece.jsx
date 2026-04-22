export default function ({ mainText, subText, icon, color }) {
  return (
    <div className="center">
    <h1 className={`spaced logo-${color}`} style={{ fontSize: "4em" }}>{mainText}</h1>
    <p className="spaced rainbow-text-animated" style={{ fontSize: "1.5em" }}>{subText}</p>
    <div style={{ fontSize: "4em", lineHeight: 1 }} aria-hidden="true">{icon}</div>
  </div>
  )
}
