<template>
  <div class="hero-image">
    <div class="hero-text">
      <h1 style="font-size: 50px">Manuel Valero</h1>
      <p>Neurophysiology and electrophysiology</p>
    </div>
  </div>
</template>

<style lang="scss">
.hero-image {
  background-image: linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 0.3)),
    url('/images/bkg2.jpg');
  height: 95%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}

.hero-text {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.hero-text button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 10px 25px;
  color: black;
  background-color: #ddd;
  text-align: center;
  cursor: pointer;
}

.hero-text button:hover {
  background-color: #555;
  color: white;
}
</style>
