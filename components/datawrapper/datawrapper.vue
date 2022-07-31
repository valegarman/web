<template>
  <section>
    <v-card style="margin: 8px">
      <iframe
        id="datawrapper-chart-bi4C9"
        title="Units in our database"
        aria-label="Stacked Column Chart"
        src="https://datawrapper.dwcdn.net/bi4C9/2/"
        scrolling="no"
        frameborder="0"
        style="width: 0; min-width: 100% !important; border: none; padding: 5px"
        height="500"
      >
      </iframe>
    </v-card>
  </section>
</template>

<script>
export default {
  mounted() {
    window.addEventListener('message', (e) => {
      if (e.data['datawrapper-height'] !== 0) {
        const t = document.querySelectorAll('iframe')
        for (const a in e.data['datawrapper-height'])
          for (let r = 0; r < t.length; r++) {
            if (t[r].contentWindow === e.source)
              t[r].style.height = e.data['datawrapper-height'][a] + 15 + 'px'
          }
      }
    })
  },
}
</script>
