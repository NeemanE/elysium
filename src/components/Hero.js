
export default function Hero(  ){
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(/images/skyline-night.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold">Doha Trading</h1>
      <p className="mb-5 text-3xl">Your host for all your Houston travel needs.</p>
      <button className="btn btn-neutral">Book now</button>
    </div>
  </div>
</div>
    )
}