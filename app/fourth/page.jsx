import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div>
       
      
<div class="item-hints">
  <div class="hint" data-position="4">
    <span class="hint-radius"></span>
    <span class="hint-dot">Tip</span>
    <div class="hint-content do--split-children">
      <p>Use Navbar to navigate the website quickly and easily.</p>
    </div>
  </div>
</div>
      </div>
      <h2>Audi: Driving Innovation with Elegance</h2>
      <p>Audi stands at the forefront of automotive excellence, blending sophisticated design with groundbreaking technology. From its signature quattro all-wheel drive to its futuristic virtual cockpit, Audi creates vehicles that are as intelligent as they are beautiful. Each car is engineered to offer seamless performance, delivering a driving experience that’s both thrilling and luxurious. Whether cruising through city streets or navigating challenging terrains, Audi ensures unparalleled precision and comfort every step of the way.</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">Click Here</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>Audi: Progress Meets Performance</h3>
        <p>
        Audi embodies the spirit of progress, crafting vehicles that redefine modern luxury and performance. With its bold design language and advanced hybrid and electric technologies, Audi leads the way in sustainable mobility. From the sleek A-series sedans to the rugged Q-series SUVs, every model is a testament to precision engineering. Audi is not just a car—it’s a commitment to innovation, offering drivers the perfect fusion of power, efficiency, and style.</p>
      </div>
      <div className="card">
        <h3>Audi: Redefining the Future of Mobility</h3>
        <p>Audi is more than a car manufacturer; it’s a vision of the future. Combining advanced AI-driven systems with dynamic design, Audi is shaping the way we experience mobility. The iconic LED lighting, plush interiors, and state-of-the-art infotainment systems make every journey a masterpiece. Whether it's the thrill of the Audi R8 or the sustainability of the e-tron series, Audi continues to push boundaries, delivering excellence on every level.</p>
      </div>
    </main>
  )
}