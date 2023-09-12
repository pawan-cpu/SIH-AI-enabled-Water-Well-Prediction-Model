import "./home.scss"

const Home = () => {
  return (
    <div className="home">
    <div className="navbar">
        <div className="left">
          <span>PixelBytes</span>
        </div>
    </div>
    <div className="center">
      <span>Jal Shakti -</span>
      <p >The ultimate AI enabled water well predictor app</p>
      <a href="">
      <button>Try Now!</button>
      </a>
      <button>Visualize</button>

    </div> 
    <div className="container">
      <div className="card">
        <span>Problem Statement</span>
        <p>The web-based system is expected to help common users in making decisions regarding water well in a particular location.</p>
      </div>
      <div className="card">
        <span>Features</span>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@700&display=swap" rel="stylesheet"/>
        <p><li>If area is suitable for water well construction or not? </li><li>Depth of water bearing zones</li> <li>Expected discharge of the well</li><li>Most suitable drilling technique in the area.</li>
        <li>Expected quality of groundwater</li>
         </p>
      </div>
      <div className="card"><span>Use case</span>
      <p><li>Optimize Allocation: Efficiently distribute water resources for agriculture and industry.</li>
        <li>Predictive Maintenance: Anticipate well performance issues before they disrupt operations.</li>
        <li>Drought Management: Prepare for droughts by forecasting groundwater levels.</li>
      </p>
      </div>
      <div className="card"><span>Benefits</span>
      <p>
      Data-Driven Insights: Extract valuable insights from well data with AI.
      Cost Savings: Reduce operational costs through optimized well management.
      Sustainability: Promote eco-friendly water resource stewardship.
      Time Efficiency: Save time with automated predictions and recommendations.
      Improved Yield: Maximize crop yield with precise water allocation.
      </p></div>
      </div>

    </div>
  )
}

export default Home
