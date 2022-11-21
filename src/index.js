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
    /*b.importFromHTML(`
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

    <defs>

      <filter id="filter">
        <!-- Colors: -->
          <feFlood flood-color="#4CFED7" flood-opacity="1" result="COL_green-l"></feFlood>
          <feFlood flood-color="#0A4D39" flood-opacity="1" result="COL_green-m"></feFlood>
          <feFlood flood-color="#2A9B83" flood-opacity="1" result="COL_green-d"></feFlood>
          <feFlood flood-color="#FA5C71" flood-opacity="1" result="COL_red-l"></feFlood>
          <feFlood flood-color="#A5122B" flood-opacity="1" result="COL_red-d"></feFlood>
          <feFlood flood-color="rgba(0,0,0,0)" flood-opacity="0" result="TRANSPARENT"></feFlood>
        <!-- Colors end -->

        <!-- Lower Green Bevel -->
          <feMorphology operator="dilate" radius="10" in="SourceAlpha" result="GREEN-BEVEL-1_10"></feMorphology>
          <feConvolveMatrix order="8,8" divisor="1" kernelMatrix="1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1" in="GREEN-BEVEL-1_10" result="GREEN-BEVEL-1_20"></feConvolveMatrix>
          <feComposite operator="in" in="COL_green-d" in2="GREEN-BEVEL-1_20" result="GREEN-BEVEL-1_30"></feComposite>
        <!-- Lower Green Bevel End -->

        <!-- Lower Green Front -->
          <feComposite operator="in" in="COL_green-l" in2="GREEN-BEVEL-1_10" result="GREEN-FRONT-1_0"></feComposite>
          <feOffset dx="4" dy="4" in="GREEN-FRONT-1_0" result="GREEN-FRONT-1_10"></feOffset>
          <feSpecularLighting surfaceScale="0" specularConstant=".75" specularExponent="30" lighting-color="#white" in="GREEN-FRONT-1_10" result="GREEN-FRONT-1_20">
            <fePointLight x="0" y="-30" z="400"></fePointLight>
          </feSpecularLighting>
          <feComposite operator="out" in2="GREEN-FRONT-1_20" in="GREEN-FRONT-1_10" result="GREEN-FRONT-1_30"></feComposite>
        <!-- Lower Green Front End -->

        <!-- Upper Green Bevel -->
          <feMorphology operator="dilate" radius="7" in="SourceAlpha" result="GREEN-BEVEL-2_0"></feMorphology>
          <feConvolveMatrix order="8,8" divisor="1" kernelMatrix="1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1" in="GREEN-BEVEL-2_0" result="GREEN-BEVEL-2_10"></feConvolveMatrix>
          <feComposite operator="in" in="COL_green-d" in2="GREEN-BEVEL-2_10" result="GREEN-BEVEL-2_20"></feComposite>
          <feOffset dx="9" dy="9" in="GREEN-BEVEL-2_20" result="GREEN-BEVEL-2_30"></feOffset>
        <!-- Upper Green Bevel end -->

        <!-- Upper Green Front -->
          <feOffset dx="18" dy="18" in="GREEN-BEVEL-2_0" result="GREEN-FRONT-2_10"></feOffset>
          <feComposite operator="in" in="COL_green-l" in2="GREEN-FRONT-2_10" result="GREEN-FRONT-2_20"></feComposite>
          <feSpecularLighting surfaceScale="0" specularConstant="0.75" specularExponent="40" lighting-color="#white" in="GREEN-FRONT-2_20" result="GREEN-FRONT-2_30">
            <fePointLight x="120" y="170" z="500"></fePointLight>
          </feSpecularLighting>
           <feComposite operator="in" in2="GREEN-FRONT-2_10" in="GREEN-FRONT-2_30" result="GREEN-FRONT-2_40"></feComposite>
        <!-- Upper Green Front end -->

        <!-- Bevels and Front shaded -->
          <feMerge result="SHADED-BEVELS_0">
            <feMergeNode in="GREEN-BEVEL-1_10"></feMergeNode>
            <feMergeNode in="GREEN-FRONT-1_30"></feMergeNode>
            <feMergeNode in="GREEN-BEVEL-2_30"></feMergeNode>
            <feMergeNode in="GREEN-FRONT-2_20"></feMergeNode>
            <feMergeNode in="GREEN-FRONT-2_40"></feMergeNode>
            <feMergeNode in="TRANSPARENT"></feMergeNode>
          </feMerge>

          <feSpecularLighting surfaceScale="0" specularConstant="0.45" specularExponent="30" lighting-color="#white" in="SHADED-BEVELS_0" result="SHADED-BEVELS_10">
              <fePointLight x="320" y="-20" z="400"></fePointLight>
          </feSpecularLighting>
          <feComposite operator="in" in2="SHADED-BEVELS_0" in="SHADED-BEVELS_10" result="SHADED-BEVELS_30"></feComposite>
        <!-- Bevels and Front shaded end -->

        <!-- Upper Red Bevel -->
          <feConvolveMatrix order="4,4" divisor="1" kernelMatrix="1 0 0 0
          0 1 0 0
          0 0 1 0
          0 0 0 1" in="SourceAlpha" result="RED-BEVEL-0_0"></feConvolveMatrix>
          <feComposite in="COL_red-d" in2="RED-BEVEL-0_0" operator="in" result="RED-BEVEL-0_10"></feComposite>
          <feOffset dx="20" dy="20" in="RED-BEVEL-0_10" result="RED-BEVEL-0_20"></feOffset>
        <!-- Upper Red Bevel end -->

        <!-- Upper Red Front -->
          <feComposite operator="in" in="COL_red-l" in2="SourceAlpha" result="RED-FRONT-0_0"></feComposite>
          <feOffset dx="24" dy="24" in="RED-FRONT-0_0" result="RED-FRONT-0_10"></feOffset>
          <feSpecularLighting surfaceScale="0" specularConstant=".45" specularExponent="30" lighting-color="#white" in="RED-FRONT-0_10" result="RED-FRONT-0_20">
          <fePointLight x="20" y="180" z="300"></fePointLight>
          </feSpecularLighting>
          <feComposite operator="in" in2="RED-FRONT-0_10" in="RED-FRONT-0_20" result="RED-FRONT-0_30"></feComposite>
        <!-- Upper Red Front end-->

        <!-- Inner Line -->
          <feMorphology radius="4" in="SourceAlpha" result="INNER-LINE_0"></feMorphology>
          <feMorphology radius="5" in="SourceAlpha" result="INNER-LINE_10"></feMorphology>
          <feComposite operator="out" in="INNER-LINE_0" in2="INNER-LINE_10" result="INNER-LINE_20"></feComposite>
          <feComposite operator="in" in="COL_green-l" in2="INNER-LINE_20" result="INNER-LINE_30"></feComposite>
          <feOffset dx="24" dy="24" in="INNER-LINE_30" result="INNER-LINE_40"></feOffset>
        <!-- Inner Line end -->

        <feMerge result="extruded-m">

          <feMergeNode in="SHADED-BEVELS_0"></feMergeNode>
          <feMergeNode in="SHADED-BEVELS_30"></feMergeNode>
          <feMergeNode in="RED-BEVEL-0_20"></feMergeNode>
          <feMergeNode in="RED-FRONT-0_10"></feMergeNode>
          <feMergeNode in="RED-FRONT-0_30"></feMergeNode>
          <feMergeNode in="INNER-LINE_40"></feMergeNode>

          <feMergeNode in="TRANSPARENT"></feMergeNode>
        </feMerge>

      </filter>

    </defs>
  </svg>
    `)*/
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