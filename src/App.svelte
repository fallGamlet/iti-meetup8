<script>
  export let name = "";
  import { onMount } from "svelte";
  import ProfileCard from "./ProfileCard.svelte";
  import EventTimer from "./EventTimer";
  import LoopList from "./LoopList";

  const eventTimer = new EventTimer(makeChangePaletteLoop, 2000);

  let palettes = new LoopList([
    { bg: "#ffffff", primary: "#771449", text: "#333333", accent: "#7915B3" },
    { bg: "#333333", primary: "#ffffaa", text: "#eeeeee", accent: "#ffff33" },
    { bg: "#274A89", primary: "#D1E2FF", text: "#ffffff", accent: "#ffff77" }
  ]);

  let profiles = new LoopList([
    {
      name: "Bato",
      birthday: new Date("2021-06-01"),
      photo: "https://giantbomb1.cbsistatic.com/uploads/original/1/19745/675274-batou2.jpg",
      status: "stand by"
    },
    {
      name: "Motoko",
      birthday: new Date("2026-06-13"),
      photo: "https://www.anime-planet.com/images/anime/main_images/ghostintheshell.jpg",
      status: "diving"
    },
    {
      name: "Togusa",
      birthday: new Date("2023-06-13"),
      photo: "https://readingnow.files.wordpress.com/2014/05/togusa.jpg",
      status: "driving"
    }
  ]);

  let curPalette = palettes.toFirst();
  let curProfile = profiles.toFirst();

  function makeChangePaletteLoop() {
    curPalette = palettes.random;
    curProfile = profiles.random;
  }

  onMount(() => {
    eventTimer.start();
  });

  function onProfileClicked() {
    alert("Profile is activated...");
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 320px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }
  .card {
    border-radius: 1rem;
    box-shadow: 0px 4px 4px 2px rgba(0,0,0,0.2);
    overflow: hidden;
  }
</style>

<main>
  <h1>Hello {name}</h1>
  <div class="card">
    <ProfileCard 
      palette={curPalette} 
      profile={curProfile}
      onClickHandler={onProfileClicked}
    />
  </div>
</main>
