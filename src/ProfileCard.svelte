<script>
  export let onClickHandler = () => {};
  export let profile = {
    name: "Username",
    birthday: new Date(0),
    photo: "",
    status: "unknown status"
  };
  export let palette = {
    bg: "#eee",
    primary: "#000",
    text: "#333",
    accent: "#7915B3"
  };

  $: birthdayText = new Intl.DateTimeFormat().format(profile.birthday);
</script>

<style>
  .profile,
  .photo,
  .name,
  .birthday,
  .status,
  .button {
    transition-duration: 0.5s;
    transition-property: all;
  }

  .profile {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    align-self: center;
    justify-self: center;
    padding: 1rem;
  }
  .photo {
    width: 150px;
    height: 150px;
    margin: 0.5rem;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
  }
  .name {
    font-size: 1.5rem;
  }
  .birthday,
  .status {
    font-size: 1rem;
    margin: 0.1rem;
  }
  .button {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
  }
</style>

<div class="profile" style="background-color:{palette.bg}; border-color: {palette.primary};">
  <div class="photo" style="background-image:url({profile.photo});"></div>
  <div class="name" style="color:{palette.primary};">
    {profile.name}
  </div>

  <div class="button" 
    style="background-color:{palette.accent}; color:{palette.bg};"
    on:click={onClickHandler}>
    Details >
  </div>

  {#if (birthdayText || '').length > 0}
  <div class="birthday" style="color:{palette.text};">
    {birthdayText}
  </div>
  {/if}

  {#if (profile.status || '').length > 0}
  <div class="status" style="color:{palette.text};">
    {profile.status}
  </div>
  {/if}
</div>
