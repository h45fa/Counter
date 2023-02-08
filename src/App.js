import Card from "./components/Card";

function App() {
  const url =
    "https://assets.ithillel.ua/images/blog/cover/_transform_blogCard_2x/Hillel-Blog-BusinessAnalysis.jpg";
  return (
    <Card
      img={url}
      title="UX Design : How To Implement Usability Testing"
      author="Alfredo Rhiel Madsen"
      students={500}
      level="Beginner"
      rating={4.5}
      duration={1.5}
      modules={5}
    />
  );
}

export default App;
