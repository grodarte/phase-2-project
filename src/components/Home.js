import "./Home.css";

function Home() {
  return (
    <main className="home-container">
      <section className="hero">
        <h1>Christmas shopping doesn't need to look like this...</h1>
        <br/>
        <img
          src="https://i.giphy.com/3oz8xOuOFqmBi7c3IY.webp"
          alt="Chaotic Christmas"
          className="hero-image"
        />
      </section>

      <section className="description">
        <p>
          That's why I put together this easy app where you can see my wishlist
          and order everything online! No more long lines or feeling like
          you're playing tackle football.
        </p>
        <p>
          The app is easy to maneuver. If you'd like to view gifts to purchase,
          you can view them under the <strong>Wishlist</strong> tab. Once you
          purchase a gift, make sure to mark it as purchased in the app so no
          one buys duplicates!
        </p>
        <p>
          No need to worry about the <strong>Add New Gift</strong> tab—this is
          for me to add new gift ideas to my wishlist.
        </p>
        <p>
          ~ Excited to celebrate with everyone! ~
        </p>
      </section>
    </main>
  );
}

export default Home;