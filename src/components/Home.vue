<script>
export default {
  name: "Home",
  data() {
    return {
      liveShots: 0,
      blankShots: 0,
    }
  },
  computed: {
    liveShotChance() {
      if (this.liveShots + this.blankShots === 0) {
        return 0;
      }
      return (this.liveShots / (this.liveShots + this.blankShots)) * 100;
    },
    formatLiveShotChance() {
      const chance = this.liveShotChance;
      return Number.isInteger(chance) ? chance.toFixed(0) : chance.toFixed(2);
    },
  },
  methods: {
    increaseLiveShot() {
      this.liveShots++;
    },
    decreaseLiveShot() {
      if (this.liveShots <= 0) {
        this.liveShots = 0
      } else this.liveShots--;
    },
    increaseBlankShot() {
      this.blankShots++;
    },
    decreaseBlankShot() {
      if (this.blankShots <= 0) {
        this.blankShots = 0
      } else this.blankShots--;
    },
    resetCounters() {
      this.blankShots = 0;
      this.liveShots = 0;
    }
  }
}
</script>

<template>
  <div class="flex column place-center">
    <div class="flex container1">
      <div class="flex column">
        <p class="center p live">LIVE</p>
        <div class="">
          <button @click="increaseLiveShot" class="add-button center">+</button>
          <div class="flex center">
            <input type="number" v-model="liveShots" class="number-field live"></input>
          </div>
          <button @click="decreaseLiveShot" class="add-button center">-</button>
        </div>
      </div>
      <div class="flex column">
        <p class="center p blank">BLANK</p>
        <div class="">
          <button @click="increaseBlankShot" class="add-button center">+</button>
          <div class="flex center">
            <input type="number" v-model="blankShots" class="number-field blank"></input>
          </div>
          <button @click="decreaseBlankShot" class="add-button center">-</button>
        </div>
      </div>
    </div>
    <button @click="resetCounters" class="reset-button">RESET</button>
    <div class="flex">
      <p class="p white flex center">Chance of a live shot:</p>
      <p class="p live-shot-chance">{{ formatLiveShotChance }}</p>
      <p class="p white">%</p>
    </div>
  </div>
  <p class="p darkgray disc flex">Discord: aleksandrss</p>
</template>

<style scoped>

.flex {
  display: flex;
}

.column {
  flex-direction: column;
}

.center {
  align-self: center;
}

.live {
  color: red;
}

.blank {
  color: lightblue;
}

.add-button {
  background: transparent;
  color: white;
  height: 1.5em;
  border: none;
  width: 1.5em;
  font-size: 40px;
}

.add-button:hover {
  color: red;
}

.add-button:active {
  color: darkred;
}

.reset-button {
  background: transparent;
  color: white;
  font-size: 20px;
  height: 3em;
  border: none;
  width: 5em;
  align-self: center;
  margin-top: 2em;
}

.reset-button:hover {
  color: red;
}

.reset-button:active {
  color: darkred;
}

.number-field {
  background: transparent;
  text-align: center;
  border: none;
  height: 1.5em;
  width: 1.5em;
  font-size: 40px;
}

.container1 {
  width: 10em;
  justify-content: space-between;
}

.place-center {
  place-items: center;
}

.live-shot-chance {
  color: red;
  margin-inline: 5px;
}

.white {
  color: whitesmoke;
}

.darkgray {
  color: #757575;
}

.disc {
  position: absolute;
  bottom: 5px;
  left: 1.3em;
}

</style>