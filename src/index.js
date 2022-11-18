import "./example/extensions"
import Builder from "./example/builder"
import Mouse from "./example/Mouse"
import "../scss/style.scss"
import Keyboard from "./example/Keyboard"
import Menu from "./example/Menu"
document.addEventListener('DOMContentLoaded', ()=>{
    let b = new Builder(document.querySelectorAll('.examples > img')[0])
    Mouse.bind()
    Keyboard.bind()
    new Menu()
    /*b.importFromHTML(
        `
        <svg version="1.1" id="Ebene_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

        <defs>
          <filter id="filter" width="150%" height="160%" x="-25%" y="-25%">
          <!-- COLORS -->
            <feFlood flood-color="#16B5FF" result="COLOR-blue"></feFlood>‚
            <feFlood flood-color="#9800FF" result="COLOR-violet"></feFlood>
            <feFlood flood-color="#A64DFF" result="COLOR-violet-light"></feFlood>
          <!-- COLORS END -->
    
          <!-- BOTTOM SPLASH -->
            <feTurbulence baseFrequency="0.05" type="fractalNoise" numOctaves="1" seed="2" result="BOTTOM-SPLASH_10"></feTurbulence>
            <feGaussianBlur stdDeviation="6.5" in="SourceAlpha" result="BOTTOM-SPLASH_20"></feGaussianBlur>
            <feDisplacementMap scale="420" in="BOTTOM-SPLASH_20" in2="BOTTOM-SPLASH_10" result="BOTTOM-SPLASH_30"></feDisplacementMap>
            <feComposite operator="in" in="COLOR-blue" in2="BOTTOM-SPLASH_30" result="BOTTOM-SPLASH_40"></feComposite>
          <!-- BOTTOM END -->
    
          <!-- MIDDLE SPLASH -->
            <feTurbulence baseFrequency="0.1" type="fractalNoise" numOctaves="1" seed="1" result="MIDDLE-SPLASH_10"></feTurbulence>
            <feGaussianBlur in="SourceAlpha" stdDeviation="0.1" result="MIDDLE-SPLASH_20"></feGaussianBlur>
            <feDisplacementMap in="MIDDLE-SPLASH_20" in2="MIDDLE-SPLASH_10" scale="25" result="MIDDLE-SPLASH_30"></feDisplacementMap>
            <feComposite in="COLOR-violet-light" in2="MIDDLE-SPLASH_30" operator="in" result="MIDDLE-SPLASH_40"></feComposite>
          <!-- MIDDLE END -->
    
          <!-- TOP SPLASH -->
            <feTurbulence baseFrequency="0.07" type="fractalNoise" numOctaves="1" seed="1" result="TOP-SPLASH_10"></feTurbulence>
            <feGaussianBlur stdDeviation="3.5" in="SourceAlpha" result="TOP-SPLASH_20"></feGaussianBlur>
            <feDisplacementMap scale="220" in="TOP-SPLASH_20" in2="TOP-SPLASH_10" result="TOP-SPLASH_30"></feDisplacementMap>
            <feComposite operator="in" in="COLOR-violet" in2="TOP-SPLASH_30" result="TOP-SPLASH_40"></feComposite>
          <!-- TOP END -->
    
          <!-- LIGHT EFFECTS -->
            <feMerge result="LIGHT-EFFECTS_10">
              <feMergeNode in="BOTTOM-SPLASH_40"></feMergeNode>
              <feMergeNode in="MIDDLE-SPLASH_40"></feMergeNode>
              <feMergeNode in="TOP-SPLASH_40"></feMergeNode>
            </feMerge>
            <feColorMatrix type="matrix" values="0 0 0 0 0,
            0 0 0 0 0,
            0 0 0 0 0,
            0 0 0 1 0" in="LIGHT-EFFECTS_10" result="LIGHT-EFFECTS_20"></feColorMatrix>
            <feGaussianBlur stdDeviation="2" in="LIGHT-EFFECTS_20" result="LIGHT-EFFECTS_30"></feGaussianBlur>
            <feSpecularLighting surfaceScale="5" specularConstant=".75" specularExponent="30" lighting-color="#white" in="LIGHT-EFFECTS_30" result="LIGHT-EFFECTS_40">
              <fePointLight x="-50" y="-100" z="400"></fePointLight>
            </feSpecularLighting>
            <feComposite operator="in" in="LIGHT-EFFECTS_40" in2="LIGHT-EFFECTS_20" result="LIGHT-EFFECTS_50"></feComposite>
            <feComposite operator="arithmetic" k1="0" k2="1" k3="1" k4="0" in="LIGHT-EFFECTS_10" in2="LIGHT-EFFECTS_50" result="LIGHT-EFFECTS_60"></feComposite>
          </filter>
          <!-- LIGHT EFFECTS END -->
        </defs>
          <text class="filtered" x="50" y="200">splash!</text>
      </svg>
        `
    )*/
})

export default class Blob {
    constructor(container) {
        this.container = container
        this.build()

        this.draw()
    }

    build(){
        this.c = document.createElement('canvas')
        this.container.appendChild(this.c)
        const rect = this.c.getBoundingClientRect()
        this.c.width = rect.width
        this.c.height = rect.height
        this.ctx = this.c.getContext('2d')

        this.hiddenCanvas = document.createElement('canvas')
        this.hiddenCtx = this.hiddenCanvas.getContext('2d')
        this.hiddenCanvas.width = this.c.width
        this.hiddenCanvas.height = this.c.height

        let size = 0.5
        this.circles = Array(20).fill({}).map(c => ({
            x: Math.random() * this.c.width,
            y: Math.random() * this.c.height,
            speedX: (Math.random() * 2 - 1) * 0.2,
            speedY: (Math.random() * 2 - 1) * 0.2,
            size: (this.c.width / 5 * Math.random() + this.c.width / 10) * size,
            color: `hsl(${Math.random()*100+120}deg, 70%, 70%)`
        }))
        this.ctx.fillStyle = "red"
        this.loop()
    }

    clear(){
        this.hiddenCtx.clearRect(0, 0, this.c.width, this.c.height)
        this.ctx.clearRect(0, 0, this.c.width, this.c.height)
    }

    draw(){
        this.clear()

        this.circles.map(c => {
            if(c.x < 0 || c.x > this.c.width) c.speedX = -c.speedX
            if(c.y < 0 || c.y > this.c.height) c.speedY = -c.speedY

            c.x += c.speedX
            c.y += c.speedY
            this.drawCircle(c.x,c.y, c.size, c.color)
        })

        this.ctx.drawImage(this.hiddenCanvas, 0, 0, this.c.width, this.c.height)
    }

    loop(){
        this.draw()
        requestAnimationFrame(this.loop.bind(this))
    }

    drawCircle(x, y, radius=50, color="red"){
        this.hiddenCtx.fillStyle = color
        this.hiddenCtx.beginPath()
        this.hiddenCtx.arc(x, y, radius, 0, 2*Math.PI)
        this.hiddenCtx.fill()
    }
}