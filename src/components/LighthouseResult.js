import React from "react"

const computeColor = val => {
  if (val >= 90) {
    return "var(--green600)"
  } else if (val >= 60 && val <= 90) {
    return "var(--orange600)"
  } else if (val >= 0 && val <= 59) {
    return "var(--red600)"
  }
}

const LighthouseResult = props => (
  <div
    css={{
      border: "1px solid var(--border-light)",
      marginBottom: "1rem",
      display: "flex",
      justifyContent: "space-between",
      textAlign: "center",
      fontSize: "0.8rem",
      color: "var(--text)",
      borderRadius: "1rem",
      overflowX: "auto",
      minWidth: "100%",
      "& div": {
        flex: 1,
        padding: "1rem",
        display: "block",
      },
      "& svg": {
        width: "100px",
        display: "block",
        margin: "0 auto 0.5rem auto",
      },
    }}
  >
    <div>
      <svg viewBox="0 0 36 36">
        <path
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={computeColor(props.performance)}
          strokeWidth="2"
          strokeDasharray={`${props.performance}, 100`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--text)"
          style={{ fontSize: "8px" }}
        >
          {props.performance}
        </text>
      </svg>
      Performance
    </div>
    <div>
      <svg viewBox="0 0 36 36">
        <path
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={computeColor(props.accessibility)}
          strokeWidth="2"
          strokeDasharray={`${props.accessibility}, 100`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--text)"
          style={{ fontSize: "8px" }}
        >
          {props.accessibility}
        </text>
      </svg>
      Accessibility
    </div>
    <div>
      <svg viewBox="0 0 36 36">
        <path
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={computeColor(props.bestPractices)}
          strokeWidth="2"
          strokeDasharray={`${props.bestPractices}, 100`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--text)"
          style={{ fontSize: "8px" }}
        >
          {props.bestPractices}
        </text>
      </svg>
      Best Practices
    </div>
    <div>
      <svg viewBox="0 0 36 36">
        <path
          d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={computeColor(props.seo)}
          strokeWidth="2"
          strokeDasharray={`${props.seo}, 100`}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--text)"
          style={{ fontSize: "8px" }}
        >
          {props.seo}
        </text>
      </svg>
      SEO
    </div>
  </div>
)

export default LighthouseResult
