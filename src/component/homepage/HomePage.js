import HomePageWorkExperience from "./HomePageWorkExperience";
import HomePageEducation from "./HomePageEducation";
import HomePageTechSumm from "./HomePageTechSumm";

const HomePage = () => {
  return (
    <main class="container">
      <div class="row mt-3">
        <HomePageWorkExperience />
        <HomePageEducation />
      </div>
      <div class="row mt-3">
        <HomePageTechSumm />
      </div>
    </main>
  );
};

export default HomePage;
