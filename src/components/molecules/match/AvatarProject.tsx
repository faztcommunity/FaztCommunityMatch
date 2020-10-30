function AvatarProject() {
  return (
    <div className="avatar-circle">
      <div className="mini-circle-transparent">
        <svg
          className="circle-dashed-affinity"
          width="62"
          height="62"
          viewBox="0 0 61 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="30.7279"
            cy="30.8085"
            r="28.9691"
            stroke="#FF295F"
            stroke-width="2"
            stroke-linecap="round"
            stroke-dasharray="8.94 8.94"
          />
        </svg>
        <div className="content-circle-affinity">
          <div className="box">
            <svg className="content-circle-progress">
              <circle
                className="progress-bar-circle"
                cx="30"
                cy="30"
                r="23"
              ></circle>
              <circle
                className="progress-bar-circle"
                cx="30"
                cy="30"
                r="23"
              ></circle>
            </svg>
            <div>
              <h4 className="percent-affinity-project">70%</h4>
            </div>
          </div>
        </div>
      </div>
      <svg
        className="line-circle"
        width="49"
        height="42"
        viewBox="0 0 49 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.07568 0.593506C1.9542 6.07038 2.36941 19.3661 12.4457 29.825C14.5184 31.8976 27.9522 44.6057 48.0562 37.8907"
          stroke="#289038"
          stroke-width="4"
        />
      </svg>
    </div>
  )
}

export default AvatarProject
